import React from 'react'
import './components.css'

function WelcomeCard({ name = 'Guest', subtitle = 'Welcome to the site', onStart }) {
  return (
    <section className="card welcome-card">
      <div className="card-body">
        <h2 className="welcome-title">Ciao, {name}!</h2>
        <p className="welcome-subtitle">{subtitle}</p>
        <button className="card-link" onClick={onStart} type="button">Inizia</button>
      </div>
    </section>
  )
}

export default WelcomeCard