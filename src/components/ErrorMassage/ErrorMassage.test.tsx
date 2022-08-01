import { render } from '@testing-library/react';
import ErrorMassage from './ErrorMassage';

describe('ErrorMassage component', () => {
  it('render correctly', () => {
    const { asFragment } = render(<ErrorMassage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
