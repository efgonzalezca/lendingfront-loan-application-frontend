// tests/LoanForm.test.jsx
import { render, screen } from '@testing-library/react';

import LoanApplicationForm from '../src/components/LoanApplicationForm';

describe('LoanApplicationForm', () => {
  test('renders all form inputs and submit button', () => {
    render(<LoanApplicationForm setResult={() => {}} setError={() => {}} />);

    expect(screen.getByLabelText('Tax ID')).toBeInTheDocument();
    expect(screen.getByLabelText('Business Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Requested Amount')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /apply/i })).toBeInTheDocument();
  })
})
