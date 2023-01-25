import React from 'react';

import { render } from '@testing-library/react';

import Main from '..';

describe('<Main />', () => {
  it('should render', () => {
    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });
});
