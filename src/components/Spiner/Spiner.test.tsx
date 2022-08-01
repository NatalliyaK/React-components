import { render } from '@testing-library/react';
import Spiner from './Spiner';

describe('Spiner component', () => {
  it('render correctly', () => {
    const { asFragment } = render(<Spiner />);

    expect(asFragment()).toMatchSnapshot();
  });
});
