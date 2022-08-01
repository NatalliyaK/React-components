import { render, screen } from '@testing-library/react';
import DataBirth from './DataBirth';

describe('DataBirth component', () => {
  test('it renders', () => {
    render(<DataBirth />);

    expect(screen.getByText('Birth data:')).toBeInTheDocument();
  });
});
