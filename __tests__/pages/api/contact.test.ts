import { createMocks } from 'node-mocks-http';

import Contact from '../../../pages/api/contact';
import sendMail from '../../../utils/sendMail';

jest.mock('../../../utils/sendMail');

describe('/api/contact', () => {
  it('should have correct status and end', async () => {
    (sendMail as jest.Mock).mockReturnValue(Promise.resolve());

    const { req, res } = createMocks({
      body: JSON.stringify({
        subject: 'Subject',
        text: 'Text'
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
    await Contact(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._isEndCalled()).toBe(true);
  });

  it('should have incorrect status and end', async () => {
    (sendMail as jest.Mock).mockReturnValue(Promise.reject(new Error()));

    const { req, res } = createMocks({
      body: JSON.stringify({
        subject: 'Subject',
        text: 'Text'
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
    await Contact(req, res);
    expect(res._getStatusCode()).toBe(500);
    expect(res._isEndCalled()).toBe(true);
  });
});
