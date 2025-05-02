export default function DecisionMessage({ result, onBack }) {
  const { decision, name, tax_id, amount } = result || {};

  const messages = {
    Approved: '✅ Approved',
    Declined: '❌ Declined',
    Undecided: '🕓 Undecided'
  }

  return (
    <div>
      <h2>{messages[decision] || 'Unknown decision'}</h2>
      <p>
        The loan request for <strong>{name}</strong> (Tax ID: <strong>{tax_id}</strong>)<br />
        has been <strong>{decision}</strong> for an amount of <strong>${Number(amount).toLocaleString()}</strong>.
      </p>
      <button onClick={onBack}>Back</button>
    </div>
  )
}
