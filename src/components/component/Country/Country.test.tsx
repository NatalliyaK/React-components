import { render, screen } from '@testing-library/react';
import Country from './Country';

describe('Country component', () => {
  test('it renders', () => {
    render(<Country />);

    expect(screen.getByText('Country:')).toBeInTheDocument();
  });
});
