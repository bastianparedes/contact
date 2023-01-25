import nodemailer from 'nodemailer';

import sendMail from '../sendMail';

jest.mock('nodemailer');

describe('sendMail', () => {
  const mockedSendMail = {
    sendMail: jest.fn()
  };

  it('should call sendMail', async () => {
    (nodemailer.createTransport as jest.Mock).mockReturnValue(mockedSendMail);
    await sendMail('Subject', 'Text');
    expect(mockedSendMail.sendMail).toBeCalledTimes(1);
  });
});
