import { useState } from 'react';

import './index.css';
import Navigation from './components/Navigation';
import LoanDecision from './components/LoanDecision';
import LoanApplicationForm from './components/LoanApplicationForm';


function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const reset = () => {
    setResult(null);
    setError(null);
  }

  return (
    <div>
      <Navigation />
      <main>
        {error ? (
          <LoanDecision error={error} onBack={reset} />
        ) : result ? (
          <LoanDecision result={result} onBack={reset} />
        ) : (
          <LoanApplicationForm setResult={setResult} setError={setError} />
        )}
      </main>
    </div>
  )
}

export default App;