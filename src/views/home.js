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

      {/* Embedded Dynamic Modern Styles */}
      <style>{`
        .team-section-dark {
          background-color: #0D2818; /* Rich Deep Forest Green */
          padding: 6rem 2rem;
          color: #ffffff;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .team-container-dark {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          text-align: center;
        }
        .team-header-dark {
          margin-bottom: 4.5rem;
        }
        .team-title-dark {
          font-size: 2.8rem;
          color: #ffffff;
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        .team-subtitle-dark {
          font-size: 1.15rem;
          color: #a3c2ae;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .team-grid-dark {
          display: flex;
          flex-wrap: wrap;
          gap: 3rem;
          justify-content: center;
        }
        .profile-card-dark {
          flex: 1;
          min-width: 290px;
          max-width: 480px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 4rem 3rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(12px);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .profile-card-dark:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
        }
        .profile-tag-dark {
          color: #81c784;
          font-size: 0.8rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-weight: 700;
          display: block;
          margin-bottom: 1.2rem;
        }
        .profile-name-dark {
          font-size: 2.6rem;
          margin: 0 0 1rem 0;
          color: #ffffff;
          font-weight: 600;
          letter-spacing: -0.5px;
        }
        .profile-title-dark {
          font-size: 1.15rem;
          line-height: 1.6;
          color: #d0e5d8;
          margin: 0 0 3.5rem 0;
          min-height: 4.8rem;
        }
        .profile-btn-dark {
          background-color: #ffffff;
          color: #0D2818;
          padding: 1rem 2rem;
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.95rem;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1.5px solid #ffffff;
          cursor: pointer;
          text-decoration: none;
          justify-content: center;
          width: fit-content;
        }
        .profile-btn-dark:hover {
          background-color: transparent;
          color: #ffffff;
        }
        .profile-btn-dark svg {
          transition: transform 0.3s ease;
        }
        .profile-btn-dark:hover svg {
          transform: translateX(4px);
        }
        @media (max-width: 768px) {
          .team-title-dark {
            font-size: 2.2rem;
          }
          .profile-card-dark {
            padding: 3rem 2rem;
          }
          .profile-name-dark {
            font-size: 2.2rem;
          }
        }
      `}</style>

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

        {/* --- DYNAMIC MODERN CONSULTANT TEAM SECTION --- */}
        <section className="team-section-dark">
          <div className="team-container-dark">
            <div className="team-header-dark">
              <h2 className="team-title-dark">Our Consulting Team</h2>
              <p className="team-subtitle-dark">
                Bringing decades of world-class, multi-disciplinary expertise directly to growing enterprises.
              </p>
            </div>
            
            <div className="team-grid-dark">
              
              {/* Profile Card: Fleur */}
              <div className="profile-card-dark">
                <div>
                  <span className="profile-tag-dark">Specialist Consultant</span>
                  <h3 className="profile-name-dark">Fleur</h3>
                  <p className="profile-title-dark">
                    Enterprise Development, Product Commercialisation &amp; Market Access Specialist
                  </p>
                </div>
                <Link to="/services" className="profile-btn-dark">
                  <span>See Full Profile</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

              {/* Profile Card: James */}
              <div className="profile-card-dark">
                <div>
                  <span className="profile-tag-dark">Specialist Consultant</span>
                  <h3 className="profile-name-dark">James</h3>
                  <p className="profile-title-dark">
                    Agribusiness, Food Processing &amp; Enterprise Growth Specialist
                  </p>
                </div>
                <Link to="/services" className="profile-btn-dark">
                  <span>See Full Profile</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
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
