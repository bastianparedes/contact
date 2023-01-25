import type { NextApiRequest, NextApiResponse } from 'next';

import sendMail from '../../utils/sendMail';

const Contact = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    const { subject, text } = JSON.parse(req.body);
    await sendMail(subject, text)
      .then((response) => {
        res.status(200);
        res.send(response);
      })
      .catch((error) => {
        res.status(500);
        res.send(error);
      })
      .finally(() => {
        res.end();
      });
  }
};

export default Contact;
