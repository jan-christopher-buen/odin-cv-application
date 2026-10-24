import Field from './Field'

export default function EducationInformation({ data, onChange }) {
  return (
    <fieldset>
      <legend>Education</legend>
      <p className="section-note">Add your educational experience.</p>
      <div className="field-grid">
        <Field
          label="School name"
          name="school"
          value={data.school}
          onChange={onChange}
        />
        <Field
          label="Title of study"
          name="study"
          value={data.study}
          onChange={onChange}
        />
        <Field
          label="Date of study"
          name="studyDate"
          type="date"
          value={data.studyDate}
          onChange={onChange}
        />
      </div>
    </fieldset>
  )
}
