import Field from './Field'

export default function ExperienceInformation({ data, onChange }) {
  return (
    <fieldset>
      <legend>Practical experience</legend>
      <p className="section-note">
        Describe your role and the work you contributed.
      </p>
      <div className="field-grid">
        <Field
          label="Company name"
          name="company"
          value={data.company}
          onChange={onChange}
        />
        <Field
          label="Position title"
          name="position"
          value={data.position}
          onChange={onChange}
        />
        <Field
          label="Start month"
          name="startDate"
          type="month"
          value={data.startDate}
          onChange={onChange}
        />
        <Field
          label="End month"
          name="endDate"
          type="month"
          min={data.startDate || undefined}
          value={data.endDate}
          onChange={onChange}
        />
        <Field
          label="Main responsibilities"
          name="responsibilities"
          multiline
          value={data.responsibilities}
          onChange={onChange}
        />
      </div>
    </fieldset>
  )
}
