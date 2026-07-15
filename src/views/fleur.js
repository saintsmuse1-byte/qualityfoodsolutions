import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// --- 1. IMPORT NAVIGATION COMPONENT ---
import Navigation from '../components/navigation'

import './fleur.css'

const FleurProfile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Fleur - Operational &amp; Design Consultant | Quality Food Solutions</title>
      </Helmet>
      
      {/* --- 2. ADDED NAVIGATION BAR --- */}
      <Navigation />
      
      {/* Optional: You can keep or remove this simple back button since you now have a full nav bar */}
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
              Fleur Robinson is an enterprise development and product commercialisation specialist with more than 25 years of experience spanning marketing, information technology, entrepreneurship and digital commerce. Over the past 16 years she has founded, built and grown a successful product-based business, gaining practical expertise in transforming ideas into commercially viable products and taking them successfully to market.
            </p>

            <p className="profile-text">
              Her experience covers the complete product commercialisation journey: from identifying market opportunities and developing new products through branding, packaging, customer testing and pricing, to digital commerce, online marketplace management and long-term business growth.
            </p>

            <p className="profile-text">
              As founder of Eye-Dears, Fleur has personally designed and commercialised more than 100 original products and built a multi-channel business selling through Shopify, Amazon South Africa and Takealot. This hands-on experience has provided practical insight into the challenges faced by small and growing enterprises, including product development, customer acquisition, market access, logistics, digital marketing and business scalability.
            </p>

            <p className="profile-text">
              Fleur is passionate about helping entrepreneurs and SMEs build stronger, more sustainable businesses. She works alongside founders to identify growth opportunities, improve products, strengthen branding, develop routes to market and increase commercial viability. Her approach combines strategic thinking with practical implementation, ensuring that advice can be translated into real commercial outcomes.
            </p>

            <p className="profile-text">
              She has particular expertise in product development, product commercialisation, enterprise development, digital commerce, branding, packaging, customer experience and market access. Through her work she has supported the development of products for retail, wholesale and online markets while continually applying the lessons learned from operating and growing her own business.
            </p>

            <p className="profile-text">
              Fleur believes that successful enterprise development is about more than providing advice; it is about working with entrepreneurs to develop businesses that are commercially sustainable and capable of creating lasting economic impact.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FleurProfile
