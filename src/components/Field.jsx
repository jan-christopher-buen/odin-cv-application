export default function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  multiline = false,
  ...attributes
}) {
  const id = name
  const inputProps = {
    id,
    name,
    value,
    onChange,
    required: true,
    ...attributes,
  }
  return (
    <div className={`field${multiline ? ' field-wide' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {multiline ? (
        <textarea {...inputProps} rows={6} />
      ) : (
        <input {...inputProps} type={type} />
      )}
    </div>
  )
}
