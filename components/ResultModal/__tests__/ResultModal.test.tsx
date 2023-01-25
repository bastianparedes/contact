import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { GrStatusGood } from 'react-icons/gr';

import ResultModal from '..';
jest.mock('bastianparedes/components', () => ({
  Modal: ({
    setModalVisible,
    children
  }: {
    setModalVisible: (boolean: boolean) => void;
    children: React.ReactNode;
  }) => {
    return (
      <>
        <button
          onClick={() => {
            setModalVisible(false);
          }}
        >
          X
        </button>
        {children}
      </>
    );
  }
}));

describe('<ResultModal />', () => {
  it('should render', () => {
    const props = {
      Icon: GrStatusGood,
      setModalVisible: jest.fn(),
      text: 'Success'
    };

    const { container } = render(<ResultModal {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without props', () => {
    const props = {
      setModalVisible: jest.fn()
    };

    const { container } = render(<ResultModal {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should close modal when button is clicked', async () => {
    const props = {
      Icon: GrStatusGood,
      setModalVisible: jest.fn(),
      text: 'Success'
    };

    const { getByText } = render(<ResultModal {...props} />);
    const button = getByText('X');
    act(() => {
      fireEvent.click(button);
    });

    expect(props.setModalVisible).toBeCalledTimes(1);
    expect(props.setModalVisible).toBeCalledWith(false);
  });
});
