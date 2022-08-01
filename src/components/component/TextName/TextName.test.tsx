import { render, screen } from '@testing-library/react';
import TextName from './TextName';

describe('TextName component', () => {
  test('it renders', () => {
    render(<TextName />);

    expect(screen.getByText('Name:')).toBeInTheDocument();
  });
});
