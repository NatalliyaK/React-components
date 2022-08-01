import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchPanel from './SearchPanel';

jest.spyOn(window.localStorage.__proto__, 'getItem');
jest.spyOn(window.localStorage.__proto__, 'setItem');

describe('SearchPanel component', () => {
  it('render correctly', () => {
    const { asFragment } = render(<SearchPanel />);

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });

  it('ls', () => {
    const { unmount } = render(<SearchPanel />);

    expect(localStorage.getItem).toBeCalledTimes(1);
    expect(localStorage.setItem).not.toBeCalled();

    unmount();
    expect(localStorage.setItem).toBeCalledTimes(1);
  });
});

describe('SearchPanel component', () => {
  test('it renders', () => {
    render(<SearchPanel />);

    expect(screen.getByText('Show more')).toBeInTheDocument();
  });
});
