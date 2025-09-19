import React, { useState } from 'react'

function RegistrationForm() {
  const initialForm = {
    username: '',
    email: '',
    password: '',
    country: '',        // select
    gender: '',         // radio
    acceptedTerms: false, // checkbox singolo
    interests: []       // checkbox multipli
  }

  const [formData, setFormData] = useState(initialForm)
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  // Funzione helper per aggiornare un campo specifico
  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleInterest = (value) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter(v => v !== value)
        : [...prev.interests, value]
    }))
  }

  // validateForm builds an errors object, sets state and returns true if valid
  const validateForm = () => {
    const newErrors = {}

    // Validazione username
    if (!formData.username || !formData.username.trim()) {
      newErrors.username = 'Username obbligatorio'
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username deve essere almeno 3 caratteri'
    }

    // Validazione email
    if (!formData.email || !formData.email.trim()) {
      newErrors.email = 'Email obbligatoria'
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Email non valida'
    }

    // Validazione password
    if (!formData.password) {
      newErrors.password = 'Password obbligatoria'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password deve essere almeno 6 caratteri'
    }

    // Validazione country (select) - opzionale ma esemplificata
    if (!formData.country) {
      newErrors.country = 'Seleziona un paese'
    }

    // Validazione acceptedTerms (checkbox singolo)
    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = 'Devi accettare i termini'
    }

    setErrors(newErrors)
    return newErrors
  }

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // mostra errori per tutti i campi
    setTouched({ username: true, email: true, password: true, country: true, acceptedTerms: true })
    setSuccess(false)

    const newErrors = validateForm()
    const isValid = Object.keys(newErrors).length === 0
    if (isValid) {
      console.log('Dati form:', formData)
      setSuccess(true)
      alert('Form valido! Registrazione completata.')
      // reset form 
      setFormData(initialForm)
      setErrors({})
      setTouched({})
      setTimeout(() => setSuccess(false), 3000)
    } else {
      // Mostra un alert riassuntivo degli errori
      const errorLines = Object.entries(newErrors).map(([k, v]) => `${k}: ${v}`)
      alert('Ci sono errori nel form:\n' + errorLines.join('\n'))
      // focus sul primo campo con errore
      const firstError = Object.keys(newErrors)[0]
      if (firstError) {
        // prova a trovare un input/select con nome corrispondente
        const el = document.querySelector(`[name="${firstError}"]`)
        if (el && typeof el.focus === 'function') el.focus()
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label>
          Username:
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={(e) => updateField('username', e.target.value)}
          onBlur={() => handleBlur('username')}
        />
        {touched.username && errors.username && (
          <div className="error">{errors.username}</div>
        )}
      </div>

      <div>
        <label>
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          onBlur={() => handleBlur('email')}
        />
        {touched.email && errors.email && (
          <div className="error">{errors.email}</div>
        )}
      </div>

      {/* Select: country */}
      <div>
        <label>Paese:</label>
  <select name="country" value={formData.country} onChange={(e) => updateField('country', e.target.value)} onBlur={() => handleBlur('country')}>
          <option value="">Seleziona paese</option>
          <option value="it">Italia</option>
          <option value="fr">Francia</option>
          <option value="de">Germania</option>
        </select>
        {touched.country && errors.country && <div className="error">{errors.country}</div>}
      </div>

      <div>
        <label>
          Password:
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => updateField('password', e.target.value)}
          onBlur={() => handleBlur('password')}
        />
        {touched.password && errors.password && (
          <div className="error">{errors.password}</div>
        )}
      </div>

      {/* Radio: gender */}
      <div>
        <label>Genere:</label>
        <label>
          <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={() => updateField('gender', 'male')} /> Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={() => updateField('gender', 'female')} /> Female
        </label>
      </div>

      {/* Checkbox singolo: acceptedTerms */}
      <div>
        <label>
          <input type="checkbox" name="acceptedTerms" checked={formData.acceptedTerms} onChange={(e) => updateField('acceptedTerms', e.target.checked)} /> Accetto i termini
        </label>
        {touched.acceptedTerms && errors.acceptedTerms && <div className="error">{errors.acceptedTerms}</div>}
      </div>

      {/* Checkbox multipli: interests */}
      <div>
        <label>Interessi:</label>
        <label>
          <input type="checkbox" name="interests" value="Hardware" checked={formData.interests.includes('Hardware')} onChange={() => toggleInterest('Hardware')} /> Hardware
        </label>
        <label>
          <input type="checkbox" name="interests" value="CyberSecurity" checked={formData.interests.includes('CyberSecurity')} onChange={() => toggleInterest('CyberSecurity')} /> CyberSecurity
        </label>
        <label>
          <input type="checkbox" name="interests" value="Tech" checked={formData.interests.includes('Tech')} onChange={() => toggleInterest('Tech')} /> Tech
        </label>
      </div>

  <button type="submit">Registrati</button>

      {/* Debug: mostra i dati in tempo reale */}
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </form>
  )
}

export default RegistrationForm