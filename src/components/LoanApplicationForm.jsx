import { useState } from 'react';

import { createLoanApplicationService } from '../services/loanService';


export default function LoanApplicationForm({ setResult, setError }) {
  const [form, setForm] = useState({ taxId: '', name: '', amount: '' });
  const [errors, setErrors] = useState({});

  const validations = {
    taxId: (value) => {
      const errs = [];
      if (!value) errs.push('Tax ID is required.');
      else if (!/^\d{5,10}$/.test(value)) errs.push('Tax ID must be min 5 digits and max 10 digits.');
      return errs.join(' ');
    },
    name: (value) => {
      const errs = [];
      if (!value) errs.push('Business name is required.');
      else if (value.trim().length < 3) errs.push('Must be at least 3 characters.');
      return errs.join(' ');
    },
    amount: (value) => {
      const errs = [];
      if (!value) errs.push('Requested amount is required.');
      else if (isNaN(parseFloat(value)) || parseFloat(value) <= 0) errs.push('Must be a positive number.');
      return errs.join(' ');
    }
  }

  const validateField = (fieldName, value) => {
    const errorMsg = validations[fieldName](value);
    setErrors((prev) => ({ ...prev, [fieldName]: errorMsg }));
    return errorMsg;
  }

  const validateAll = () => {
    const newErrors = {};
    for (const field in form) {
      newErrors[field] = validateField(field, form[field]);
    }
    setErrors(newErrors);
    return Object.values(newErrors).some((msg) => msg);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    let filteredValue = value;
    if (name === 'taxId') {
      filteredValue = value.replace(/[^\d]/g, '').slice(0, 10);
    } else if (name === 'amount') {
      let numeric = value.replace(/[^0-9.]/g, '');
      const parts = numeric.split('.');
      if (parts.length > 2) {
        numeric = parts[0] + '.' + parts.slice(1).join('');
      }
      if (numeric.startsWith('0') && numeric.length > 1 && !numeric.startsWith('0.')) {
        numeric = numeric.replace(/^0+/, '');
      }
      if (numeric.includes('.')) {
        const [intPart, decimalPart] = numeric.split('.');
        numeric = intPart + '.' + decimalPart.slice(0, 2);
      }
      if (parseFloat(numeric) > 1000000) {
        numeric = '1000000';
      }
      filteredValue = numeric;
    } else if (name === 'name') {
      filteredValue = value.slice(0, 100);
    }
    setForm((prev) => ({ ...prev, [name]: filteredValue }));
    validateField(name, filteredValue);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasErrors = validateAll();
    if (hasErrors) return;
    createLoanApplicationService({
      tax_id: form.taxId,
      amount: parseFloat(form.amount),
      name: form.name
    })
      .then((res) => {
        setResult(res);
      })
      .catch((error) => {
        setError(error.message);
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="taxId">Tax ID</label>
        <input id="taxId" name="taxId" value={form.taxId} onChange={handleChange} />
        <span>{errors.taxId}</span>
      </div>
      <div>
        <label htmlFor="name">Business Name</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} />
        <span>{errors.name}</span>
      </div>
      <div>
        <label htmlFor="amount">Requested Amount</label>
        <input id="amount" name="amount" value={form.amount} onChange={handleChange} />
        <span>{errors.amount}</span>
      </div>
      <button type="submit">Apply</button>
    </form>
  )
}