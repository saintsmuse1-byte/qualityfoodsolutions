import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

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

        </div>
              {/* Consultants Section */}
<section className="home-consultants-section">
  <div className="home-consultants-container">
    <h2>Meet Our Consultants</h2>
    <p className="home-consultants-intro">
      Our experienced consultants provide practical, science-based solutions
      tailored to the food industry. Learn more about their expertise below.
    </p>

    <div className="home-consultants-grid">

      <div className="consultant-card">
        <img
          src="/fleur.jpg"
          alt="Fleur"
          className="consultant-image"
        />

        <h3>Fleur</h3>

        <p>
          Enterprise Development, Product Commercialisation & Market Access Specialist

        </p>

        <Link to="/fleur">
          <button className="consultant-button">
            View Fleur's Profile
          </button>
        </Link>
      </div>

      <div className="consultant-card">
        <img
          src="/james.jpg"
          alt="James"
          className="consultant-image"
        />

        <h3>James</h3>

        <p>
          Agribusiness, Food Processing & Enterprise Growth Specialist


        <Link to="/james">
          <button className="consultant-button">
            View James's Profile
          </button>
        </Link>
      </div>

    </div>
  </div>
</section>
      </div>
    </div>
  )
}

export default Home
