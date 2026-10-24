import GeneralInformation from './GeneralInformation'
import EducationInformation from './EducationInformation'
import ExperienceInformation from './ExperienceInformation'
import '../styles/form.css'

export default function CVForm({ data, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <GeneralInformation
        data={data.general}
        onChange={(event) => onChange('general', event)}
      />
      <EducationInformation
        data={data.education}
        onChange={(event) => onChange('education', event)}
      />
      <ExperienceInformation
        data={data.experience}
        onChange={(event) => onChange('experience', event)}
      />
      <div className="form-actions">
        <p>You can edit your details after creating your CV.</p>
        <button type="submit">Create CV</button>
      </div>
    </form>
  )
}
