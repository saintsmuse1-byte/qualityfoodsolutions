import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './contact-details.css'

const ContactDetails = (props) => {
  return (
    <div className="contact-details-container1">
      <section className="contact-details-section">
        <div className="contact-details-container">
          <div className="contact-details-card">
            <div className="contact-details-header">
              <h2 className="section-title contact-details-headline">
                Get in Touch with Quality Food Solutions
              </h2>
              <p className="contact-details-thq-section-content-elm1 section-content">
                Feeding Growth, Delivering Quality. We are here to manage your
                food distribution needs with precision and care. Reach out to
                our experts today.
              </p>
            </div>
            <div className="contact-details-grid">
              <div className="contact-details-info-column">
                <div className="contact-details-thq-contact-details-row-elm">
                  <div
                    data-role="contact-item"
                    className="contact-details-item"
                  >
                    <div className="contact-details-icon-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="contact-details-text-group">
                      <span className="contact-details-label">
                        Phone Support
                      </span>
                      <a href="tel:+18005550199">
                        <div className="contact-details-value">
                          <span>+1 (800) 555-0199</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    data-role="contact-item"
                    className="contact-details-thq-contact-details-item-elm2 contact-details-item"
                  >
                    <div className="contact-details-icon-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className="contact-details-text-group">
                      <span className="contact-details-label">
                        Email Address
                      </span>
                      <a href="mailto:info@qualityfoodsolutions.com?subject=">
                        <div className="contact-details-value">
                          <span>james@qualityfoodsolutions.com</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  data-role="contact-item"
                  className="contact-details-thq-contact-details-item-elm3 contact-details-item"
                >
                  <div className="contact-details-icon-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-details-text-group">
                    <span className="contact-details-label">
                      Main Distribution Hub
                    </span>
                    <span className="contact-details-value">
                      122 Harvest Lane, Agriculture District
                    </span>
                  </div>
                </div>
              </div>
              <div className="contact-details-visual-column">
                <div className="contact-details-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                    alt="Vibrant cornfield at sunset representing Quality Food Solutions' roots"
                    className="contact-details-image"
                  />
                  <div className="contact-details-thq-contact-details-overlay-elm contact-details-overlay"></div>
                </div>
              </div>
            </div>
            <div className="contact-details-footer">
              <div className="contact-details-cta-box">
                <p className="section-content">
                  Ready to scale your distribution network?
                </p>
                <div className="contact-details-actions">
                  <Link to="/services">
                    <div className="btn btn-accent btn-lg">
                      <span>Explore Services</span>
                    </div>
                  </Link>
                  <button className="contact-details-secondary-btn btn btn-lg btn-outline">
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-details-container2">
        <div className="contact-details-container3">
          <Script
            html={`<script>
        ;(function () {
          const contactItems = document.querySelectorAll("[data-role='contact-item']")
          const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
          }
          const contactObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  entry.target.style.opacity = "1"
                  entry.target.style.transform = "translateY(0)"
                }, index * 150)
                contactObserver.unobserve(entry.target)
              }
            })
          }, observerOptions)
          contactItems.forEach((item) => {
            item.style.opacity = "0"
            item.style.transform = "translateY(20px)"
            item.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
            contactObserver.observe(item)
          })
        })()
      </script>`}
          ></Script>
        </div>
      </div>
      <div className="contact-details-container4">
        <div className="contact-details-container5">
          <Script html={``}></Script>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
