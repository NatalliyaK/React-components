import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox component', () => {
  test('it renders', () => {
    render(<Checkbox />);

    expect(screen.getByText('agree to the processing of data')).toBeInTheDocument();
  });
});
