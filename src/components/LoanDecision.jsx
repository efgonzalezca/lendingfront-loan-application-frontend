import DecisionError from './LoanDecision/DecisionError';
import DecisionMessage from './LoanDecision/DecisionMessage';

export default function LoanDecision({ result, error, onBack }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      {error ? (
        <DecisionError error={error} onBack={onBack} />
      ) : (
        <DecisionMessage result={result} onBack={onBack} />
      )}
    </div>
  )
}
