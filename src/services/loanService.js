import axios from 'axios';

const baseURL = `${import.meta.env.VITE_API_URL}/api`;

export const createLoanApplicationService = async (form) => {
  try {
    const response = await axios.post(`${baseURL}/loan/evaluate`, form);
    return response.data;  
  } catch(error) {
    if(!error.response) {
      throw error;
    }
    if(error.response.status === 400) {
      const stringErrors = Object.entries(error.response.data.errors).map(([key, value]) => {
        return `${key}: ${value}`;
      }).join(' | ')
      throw new Error(stringErrors);
    }
    if(error.response.status === 500) {
      throw new Error('Service error');
    }
    throw error;
  }
}