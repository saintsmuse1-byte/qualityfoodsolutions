import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

// --- IMPORTED NAVIGATION COMPONENT ---
import Navigation from '../components/navigation'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Quality Food Solutions</title>
        <meta property="og:title" content="Quality Food Solutions" />
        <link
          rel="canonical"
          href="https://circular-self-reliant-sheep-lh9nyn.teleporthq.site/"
        />
        <meta
          property="og:url"
          content="https://circular-self-reliant-sheep-lh9nyn.teleporthq.site/"
        />
      </Helmet>

      {/* --- ADDED NAVIGATION BAR --- */}
      <Navigation />

      <div className="home-container2">
        <section className="home-thq-hero-section-elm hero-section">
          <div className="hero-media-container">
            <div className="home-thq-hero-overlay-elm hero-overlay"></div>
            <img src="/wheat.jpg" alt="image" className="home-image" />
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-text-block">
              <h1 className="custom-brand-title hero-title">
                Quality Food Solutions
              </h1>
              <p className="hero-hero-subtitle hero-subtitle">
                Feeding Growth. Delivering Quality
              </p>
              <div className="hero-actions">
                <Link to="/services">
                  <div className="hero-btn-lg custom-accent-btn btn btn-primary btn-lg">
                    <span>Explore Our Services</span>
                  </div>
                </Link>
                <a href="#contact-footer">
                  <div className="hero-btn-lg custom-outline-white btn btn-lg btn-outline">
                    <span>Get in Touch</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-contact-strip">
            <div className="hero-contact-container">
              <div className="hero-contact-item">
                <div className="hero-contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                    ></path>
                  </svg>
                </div>
                <span className="section-content">+27 76 159 2717</span>
              </div>
              <div className="hero-contact-item">
                <div className="hero-contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </g>
                  </svg>
                </div>
                <span className="section-content">
                  Kwa-Zulu Natal, South Africa
                </span>
              </div>
              <div className="hero-contact-item">
                <div className="hero-contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <circle cx="6" cy="12" r="4"></circle>
                      <circle cx="18" cy="12" r="4"></circle>
                      <path d="M6 16h12"></path>
                    </g>
                  </svg>
                </div>
                <span className="section-content">
                  james@qualityfoodsolutions.co.za
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* --- DYNAMIC & MODERN CONSULTANT PROFILES SECTION --- */}
        <section 
          className="consultant-profiles-section"
          style={{
            backgroundColor: '#0c2214', // Sophisticated Dark Green
            padding: '100px 24px',
            color: '#FFFFFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div 
            style={{
              maxWidth: '1200px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '60px'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <h2 
                style={{
                  fontSize: '2.8rem',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: '#F4F9F4',
                  letterSpacing: '-0.02em',
                  fontFamily: 'inherit'
                }}
              >
                Our Specialist Consultants
              </h2>
              <div 
                style={{ 
                  height: '3px', 
                  width: '60px', 
                  backgroundColor: '#A3BCA9', 
                  margin: '0 auto 24px auto', 
                  borderRadius: '2px' 
                }}
              />
              <p 
                style={{
                  fontSize: '1.15rem',
                  color: '#A3BCA9',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}
              >
                Meet the driving forces behind our strategic agricultural insights, enterprise development, and market expansions.
              </p>
            </div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px'
              }}
            >
              {/* FLEUR PROFILE CARD */}
              <div 
                className="modern-consultant-card"
                style={{
                  backgroundColor: '#122d1b', // Lighter dark green contrasting card background
                  borderRadius: '16px',
                  padding: '48px 40px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>
                  <div 
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '28px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <span style={{ fontSize: '1.8rem', fontWeight: '500', color: '#88a38f' }}>F</span>
                  </div>
                  <h3 
                    style={{
                      fontSize: '2.2rem',
                      fontWeight: '600',
                      marginBottom: '16px',
                      color: '#FFFFFF',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    Fleur
                  </h3>
                  <p 
                    style={{
                      fontSize: '1.1rem',
                      color: '#A3BCA9',
                      lineHeight: '1.6',
                      fontWeight: '500',
                      marginBottom: '40px'
                    }}
                  >
                    Enterprise Development, Product Commercialisation &amp; Market Access Specialist
                  </p>
                </div>
                <Link 
                  to="/fleur" 
                  style={{ textDecoration: 'none', width: 'fit-content' }}
                >
                  <span 
                    className="see-profile-button"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px 28px',
                      borderRadius: '30px',
                      backgroundColor: '#FFFFFF',
                      color: '#0c2214',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      letterSpacing: '0.03em',
                      cursor: 'pointer',
                      border: 'none',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    see full profile
                  </span>
                </Link>
              </div>

              {/* JAMES PROFILE CARD */}
              <div 
                className="modern-consultant-card"
                style={{
                  backgroundColor: '#122d1b',
                  borderRadius: '16px',
                  padding: '48px 40px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>
                  <div 
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '28px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <span style={{ fontSize: '1.8rem', fontWeight: '500', color: '#88a38f' }}>J</span>
                  </div>
                  <h3 
                    style={{
                      fontSize: '2.2rem',
                      fontWeight: '600',
                      marginBottom: '16px',
                      color: '#FFFFFF',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    James
                  </h3>
                  <p 
                    style={{
                      fontSize: '1.1rem',
                      color: '#A3BCA9',
                      lineHeight: '1.6',
                      fontWeight: '500',
                      marginBottom: '40px'
                    }}
                  >
                    Agribusiness, Food Processing &amp; Enterprise Growth Specialist
                  </p>
                </div>
                <Link 
                  to="/james" 
                  style={{ textDecoration: 'none', width: 'fit-content' }}
                >
                  <span 
                    className="see-profile-button"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px 28px',
                      borderRadius: '30px',
                      backgroundColor: '#FFFFFF',
                      color: '#0c2214',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      letterSpacing: '0.03em',
                      cursor: 'pointer',
                      border: 'none',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    see full profile
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="home-container3">
          <div className="home-container4">
            <Script
              html={`<script>
        ;(function () {
          const heroSection = document.querySelector('[data-node-id="TQ_VyiQutQbnF"]')
          const heroImage = document.querySelector('[data-node-id="TQ_QLlM_GUdyK"]')
          if (heroSection && heroImage) {
            window.addEventListener("scroll", () => {
              const scrollValue = window.scrollY
              const speed = 0.3
              if (scrollValue < window.innerHeight) {
                heroImage.style.transform = \`translateY(\\\${scrollValue * speed}px) scale(\\\${1 + scrollValue * 0.0002})\`
              }
            })
          }
        })()
      </script>`}
            ></Script>
          </div>
        </div>
        <div className="home-container5">
          <div className="home-container6">
            <Script
              html={`<style>
        @keyframes heroFadeIn {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
