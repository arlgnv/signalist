import dayjs from 'dayjs';

import { createDailyMarketNewsEmail } from '@/nodemailer/emailCreators';
import nodemailer from '@/nodemailer/transporter';

import inngest, { dailyMarketNewsPrepared } from '../';

const sendDailyMarketNewsEmail = inngest.createFunction(
  {
    id: 'send-daily-market-news-email',
    triggers: [dailyMarketNewsPrepared],
  },
  async ({ event }) => {
    await nodemailer.sendMail({
      to: event.data.userEmail,
      subject: `Today's market news summary - ${dayjs().format('dddd, MMMM D, YYYY')}`,
      html: createDailyMarketNewsEmail(event.data.marketNews),
    });
  },
);

export default sendDailyMarketNewsEmail;
