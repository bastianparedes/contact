import { createMocks } from 'node-mocks-http';

import Cv from '../../../pages/api/cv';

describe('/api/cv', () => {
  it('should have correct status, header and end', () => {
    const { req, res } = createMocks({
      method: 'GET'
    });
    Cv(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getHeaders()['content-type']).toBe('application/pdf');
    expect(res._isEndCalled()).toBe(true);
  });
});
