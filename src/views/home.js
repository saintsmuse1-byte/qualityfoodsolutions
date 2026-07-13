import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Circular Self Reliant Sheep</title>
        <meta property="og:title" content="Circular Self Reliant Sheep" />
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
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container7">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon21"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text3">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
