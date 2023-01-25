import { createTransport, SentMessageInfo } from 'nodemailer';

const defaultTo = process.env.PERSONAL_EMAIL;

const sendMail = async (
  subject: string,
  text: string,
  to: string = defaultTo
): Promise<SentMessageInfo> => {
  return await createTransport({
    auth: {
      pass: process.env.SENDER_EMAIL_PASSWORD,
      user: process.env.SENDER_EMAIL
    },
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false
  }).sendMail({
    from: process.env.SENDER_EMAIL,
    subject,
    text,
    to
  });
};

export default sendMail;
