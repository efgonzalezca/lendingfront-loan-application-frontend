export default function DecisionError({ error, onBack }) {
  return (
    <div >
      <h2 style={{ color: 'red' }}>⚠️ An error occurred</h2>
      <p>{error}</p>
      <button onClick={onBack}>Back</button>
    </div>
  )
}
