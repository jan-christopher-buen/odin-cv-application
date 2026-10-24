import Field from './Field'

export default function GeneralInformation({ data, onChange }) {
  return (
    <fieldset>
      <legend>General information</legend>
      <p className="section-note">
        Start with the details that help people reach you.
      </p>
      <div className="field-grid">
        <Field
          label="Full name"
          name="fullName"
          value={data.fullName}
          onChange={onChange}
          autoComplete="name"
          autoFocus
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={data.email}
          onChange={onChange}
          autoComplete="email"
        />
        <Field
          label="Phone number"
          name="phone"
          type="tel"
          value={data.phone}
          onChange={onChange}
          autoComplete="tel"
        />
      </div>
    </fieldset>
  )
}
