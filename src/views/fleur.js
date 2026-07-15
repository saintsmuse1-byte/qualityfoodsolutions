import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './fleur.css'

const FleurProfile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Fleur - Operational &amp; Design Consultant | Quality Food Solutions</title>
      </Helmet>
      
      <div className="profile-header-nav">
        <Link to="/" className="back-home-btn">← Back to Home</Link>
      </div>

      <main className="profile-content-wrapper">
        <div className="profile-image-column">
          <img src="/fleur.jpg" alt="Fleur" className="profile-main-img" />
        </div>
        <div className="profile-details-column">
          <span className="profile-tag">Operational &amp; Design Consultant</span>
          <h1 className="profile-name">Fleur</h1>
          <h2 className="profile-specialty">Value Chain Optimization &amp; Brand Dynamics</h2>
          
          <div className="profile-bio-section">
            <p className="profile-text">
              insert text here
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FleurProfile
