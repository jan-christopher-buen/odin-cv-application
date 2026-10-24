import { useState } from 'react'
import CVForm from './components/CVForm'
import CVPreview from './components/CVPreview'
import './styles/app.css'

const initialData = {
  general: { fullName: '', email: '', phone: '' },
  education: { school: '', study: '', studyDate: '' },
  experience: {
    company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
  },
}

export default function App() {
  const [cvData, setCvData] = useState(initialData)
  const [isEditing, setIsEditing] = useState(true)

  function handleChange(section, event) {
    const { name, value } = event.target
    event.target.setCustomValidity('')
    setCvData((previousData) => ({
      ...previousData,
      [section]: { ...previousData[section], [name]: value },
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    for (const field of form.elements) {
      if (field.required && !field.value.trim()) {
        field.setCustomValidity('Please enter a value, not only spaces.')
      }
    }
    if (!form.reportValidity()) return
    setIsEditing(false)
  }

  return (
    <main className="app-shell">
      {isEditing ? (
        <>
          <header className="page-header">
            <p className="wordmark">CV Studio</p>
            <h1>Make your experience count.</h1>
            <p className="intro">
              Bring your details together in a clear, professional CV. Fill in
              the sections below, then create your CV to review it.
            </p>
            <p className="required-note">All fields are required.</p>
          </header>
          <CVForm
            data={cvData}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </>
      ) : (
        <CVPreview data={cvData} onEdit={() => setIsEditing(true)} />
      )}
      <p className="privacy-note">
        Your details stay on this page. Refreshing clears your information.
      </p>
    </main>
  )
}
