import { render } from '@testing-library/react';
import CardsPage from './CardsPage';

describe('CardsPage component', () => {
  it('render correctly', () => {
    const { asFragment } = render(<CardsPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
