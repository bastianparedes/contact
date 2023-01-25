// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { afterEach, jest } from '@jest/globals';

jest.mock('next/image');
['ai', 'bi', 'fi', 'gr', 'vsc'].forEach((element) => {
  jest.mock('react-icons/' + element);
});

afterEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});
