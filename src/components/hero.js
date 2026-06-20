import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-container1">
      <section className="hero-thq-hero-section-elm hero-section">
        <div className="hero-media-container">
          <img
            src="https://images.pexels.com/photos/11987205/pexels-photo-11987205.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            alt="Golden wheat field at sunset"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
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
      <div className="hero-container2">
        <div className="hero-container3">
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
      <div className="hero-container4">
        <div className="hero-container5">
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
  )
}

export default Hero
