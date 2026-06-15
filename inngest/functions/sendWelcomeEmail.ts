import { createWelcomeEmail } from '@/nodemailer/emailCreators';
import nodemailer from '@/nodemailer/transporter';

import inngest from '../client';
import { userSignedUp } from '../eventTypes';
import { INTRO_FOR_WELCOME_EMAIL } from '../prompts';

const sendWelcomeEmail = inngest.createFunction(
  { id: 'send-welcome-email', triggers: [userSignedUp] },
  async ({ event, step }) => {
    const generatePersonalizedIntroResponse = await step.ai.infer(
      'generate-personalized-intro',
      {
        model: step.ai.models.gemini({ model: 'gemini-2.5-flash' }),
        body: {
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: INTRO_FOR_WELCOME_EMAIL.replace(
                    '{{userData}}',
                    `
                      - Investment goal: ${event.data.investmentGoal}
                      - Risk tolerance: ${event.data.riskTolerance}
                      - Preferred industry: ${event.data.preferredIndustry}
                    `,
                  ),
                },
              ],
            },
          ],
        },
      },
    );

    await step.run('send-email', async () => {
      const personalizedIntroPart =
        generatePersonalizedIntroResponse.candidates?.[0]?.content.parts[0];
      const personalizedIntro =
        (personalizedIntroPart && 'text' in personalizedIntroPart
          ? personalizedIntroPart.text
          : undefined) ??
        '<p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #ccdadc;">Thanks for joining Signalist. You now have the tools to track markets and make smarter moves.</p>';

      await nodemailer.sendMail({
        to: event.data.email,
        subject: 'Welcome to Signalist 🚀',
        html: createWelcomeEmail(event.data.fullName, personalizedIntro),
      });
    });
  },
);

export default sendWelcomeEmail;
