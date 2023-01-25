import React from 'react';

import { render } from '@testing-library/react';

import Contact from '../../pages';

jest.mock('../../components/Main');
jest.mock('../../components/Form');
jest.mock('bastianparedes/components', () => ({
  Body: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  Loader: () => <div data-testid="data-testid-loader"></div>
}));

describe('/contact', () => {
  it('should render', () => {
    const { container } = render(<Contact />);
    expect(container).toMatchSnapshot();
  });
});
