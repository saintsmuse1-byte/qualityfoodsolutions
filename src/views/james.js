import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// --- IMPORTED NAVIGATION COMPONENT ---
import Navigation from '../components/navigation'

import './james.css'

const JamesProfile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>James - Senior Project Consultant | Quality Food Solutions</title>
      </Helmet>
      
      {/* --- ADDED NAVIGATION BAR --- */}
      <Navigation />
      
      {/* Keep or remove this simple back button as you prefer, since the nav bar is now active */}
      <div className="profile-header-nav">
        <Link to="/" className="back-home-btn">← Back to Home</Link>
      </div>

      <main className="profile-content-wrapper">
        <div className="profile-image-column">
          <img src="/james.jpg" alt="James" className="profile-main-img" />
        </div>
        <div className="profile-details-column">
          <span className="profile-tag">Senior Project Consultant</span>
          <h1 className="profile-name">James</h1>
          <h2 className="profile-specialty">Financial Oversight &amp; Infrastructure Strategy</h2>
          
          <div className="profile-bio-section">
            <p className="profile-text">
              James Robinson is an agribusiness and food processing specialist with more than 30 years of experience developing, managing and scaling businesses across Sub-Saharan Africa. His expertise spans agro-processing, food manufacturing, value chain development, factory start-ups, investment evaluation and commercial business growth.
            </p>
            <p className="profile-text">
              Throughout his career, James has worked with entrepreneurs, investors, multinational companies and development organisations to identify commercial opportunities, develop investment-ready businesses and deliver complex agribusiness projects. His experience includes leading greenfield factory developments, evaluating investment opportunities, restructuring agribusiness operations and building commercially sustainable supply chains across Southern and Eastern Africa.
            </p>
            <p className="profile-text">
              As Founder and Managing Director of Valley Canners in Zimbabwe, James secured development finance, established and grew a successful fruit and vegetable processing business, managed more than 300 factory staff, developed regional and international markets, and built extensive outgrower networks supplying fruit and vegetables for processing.
            </p>
            <p className="profile-text">
              His consulting experience includes assignments for organisations including the World Bank, where he contributed to Tanzania's Food Processing Competitiveness Cluster Study, and leadership roles with Lonrho Agriculture, where he identified and developed investment opportunities throughout Sub-Saharan Africa, including large-scale agro-processing and outgrower projects in Mozambique.
            </p>
            <p className="profile-text">
              James combines strategic commercial thinking with practical implementation. He enjoys working alongside entrepreneurs and management teams to strengthen businesses, improve processing capacity, develop value-added products, expand routes to market and build commercially sustainable enterprises capable of creating long-term employment and economic growth.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default JamesProfile
