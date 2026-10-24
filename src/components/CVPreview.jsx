import '../styles/preview.css'

function formatDate(value, includeDay = false) {
  const [year, month, day = 1] = value.split('-').map(Number)
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    ...(includeDay ? { day: 'numeric' } : {}),
  }).format(new Date(year, month - 1, day))
}

export default function CVPreview({ data, onEdit }) {
  const { general, education, experience } = data
  return (
    <>
      <div className="preview-toolbar">
        <p>Your CV is ready. Review it below.</p>
        <button type="button" onClick={onEdit}>
          Edit CV
        </button>
      </div>
      <article className="cv-document" aria-label="Curriculum vitae">
        <header className="cv-header">
          <h1>{general.fullName}</h1>
          <address>
            <span>{general.email}</span>
            <span>{general.phone}</span>
          </address>
        </header>
        <section className="cv-section">
          <h2>Education</h2>
          <h3>{education.school}</h3>
          <p className="cv-subtitle">{education.study}</p>
          <p className="cv-date">
            <time dateTime={education.studyDate}>
              {formatDate(education.studyDate, true)}
            </time>
          </p>
        </section>
        <section className="cv-section">
          <h2>Experience</h2>
          <h3>{experience.position}</h3>
          <p className="cv-subtitle">{experience.company}</p>
          <p className="cv-date">
            <time dateTime={experience.startDate}>
              {formatDate(experience.startDate)}
            </time>{' '}
            –{' '}
            <time dateTime={experience.endDate}>
              {formatDate(experience.endDate)}
            </time>
          </p>
          <p className="responsibilities">{experience.responsibilities}</p>
        </section>
      </article>
    </>
  )
}
