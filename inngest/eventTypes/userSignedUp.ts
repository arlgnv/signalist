import { eventType } from 'inngest';
import * as z from 'zod';

const userSignedUp = eventType('app/user.signed_up', {
  schema: z.object({
    fullName: z.string().min(2).max(100),
    email: z.email(),
    investmentGoal: z.enum(['growth', 'income', 'balanced', 'conservative']),
    riskTolerance: z.enum(['low', 'medium', 'high']),
    preferredIndustry: z.enum([
      'technology',
      'healthcare',
      'finance',
      'energy',
      'consumer goods',
    ]),
  }),
});

export default userSignedUp;
