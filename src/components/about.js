import React from 'react'

import Script from 'dangerous-html/react'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container1">
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-grid">
            <div className="about-content-wrapper">
              <div className="about-header">
                <span className="about-label">Since 2012</span>
                <h2 className="about-title section-title">
                  Quality Food Solutions
                </h2>
              </div>
              <div className="about-body">
                <p className="about-text section-content">
                  Quality Food Solutions is a South African food trading company
                  focused on sourcing and supplying quality meat, poultry and
                  food products. We deliver dependable sourcing solutions,
                  competitive pricing and professional service to customers
                  across Southern Africa.
                </p>
                <div className="about-features">
                  <div className="about-feature-item">
                    <div className="about-icon-box">
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
                          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                          <circle cx="17" cy="18" r="2"></circle>
                          <circle cx="7" cy="18" r="2"></circle>
                        </g>
                      </svg>
                    </div>
                    <div className="about-feature-text">
                      <span className="about-feature-title">
                        Dependable Sourcing
                      </span>
                    </div>
                  </div>
                  <div className="about-feature-item">
                    <div className="about-icon-box">
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
                          <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                          <circle cx="12" cy="8" r="6"></circle>
                        </g>
                      </svg>
                    </div>
                    <div className="about-feature-text">
                      <span className="about-feature-title">
                        Professional Service
                      </span>
                    </div>
                  </div>
                </div>
                <div className="about-thq-about-actions-elm about-actions"></div>
              </div>
            </div>
            <div className="about-visual-wrapper">
              <div className="about-image-card">
                <div className="about-thq-thq-about-main-image-elm-elm about-main-image">
                  <img
                    src="/chicken-1500w.jpg"
                    alt="image"
                    className="about-image"
                  />
                </div>
                <div className="about-badge about-badge-top">
                  <span className="about-badge-number">100%</span>
                  <span className="about-badge-text">Quality Assured</span>
                </div>
              </div>
              <div className="about-accent-box about-accent-navy"></div>
              <div className="about-accent-box about-accent-red"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="about-container2">
        <div className="about-container3">
          <Script
            html={`<script defer data-name="about-interactions">
(function(){
  const aboutSection = document.getElementById("about")
  const visualWrapper = aboutSection.querySelector(".about-visual-wrapper")

  if (visualWrapper) {
    window.addEventListener("scroll", () => {
      const scrollValue = window.scrollY
      const sectionTop = aboutSection.offsetTop
      const windowHeight = window.innerHeight

      if (scrollValue > sectionTop - windowHeight && scrollValue < sectionTop + aboutSection.offsetHeight) {
        const relativeScroll = (scrollValue - (sectionTop - windowHeight)) / (windowHeight + aboutSection.offsetHeight)
        const translateY = relativeScroll * 40 - 20

        const badge = visualWrapper.querySelector(".about-badge-top")
        const expCard = visualWrapper.querySelector(".about-experience-card")

        if (badge) badge.style.transform = \`translateY(\${translateY * -0.5}px)\`
        if (expCard) expCard.style.transform = \`translateY(\${translateY * 0.8}px)\`
      }
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="about-container4">
        <div className="about-container5">
          <Script
            html={`<style>
        @keyframes aboutFadeIn {to {opacity: 1;
transform: translate(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default About
