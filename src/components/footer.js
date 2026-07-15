import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column footer-brand-col">
              <div className="footer-logo-wrapper">
                <span className="footer-brand-name">
                  <span>
                    {' '}
                    Quality Food
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="footer-thq-footer-accent-text-elm">
                    Solutions
                  </span>
                </span>
              </div>
              <p className="footer-description">
                Feeding Growth, Delivering Quality. We partner with high-potential African SMEs that already demonstrate commercial traction, providing the capital, expertise, and operational support needed to scale sustainably.
              </p>
              <div className="footer-social-links">
                <a href="#">
                  <div aria-label="LinkedIn" className="footer-social-btn">
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
                        <path d="M8 11v5m0-8v.01M12 16v-5m4 5v-3a2 2 0 1 0-4 0"></path>
                        <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"></path>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Our Services</h3>
              <ul className="footer-nav-list">
                <li>
                  <Link to="/services">
                    <div className="footer-link">
                      <span>Bulk Distribution</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <div className="footer-link">
                      <span>Supply Chain Management</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <div className="footer-link">
                      <span>Quality Assurance</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <div className="footer-link">
                      <span>Logistics Solutions</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <div className="footer-link">
                      <span>Agri-Business Support</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Get In Touch</h3>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <div className="footer-icon-box">
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
                  <span className="footer-contact-text">
                    Kwa-Zulu Natal Midlands, South Africa
                  </span>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-icon-box">
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
                  <span className="footer-contact-text">+27 76 159 2717</span>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-icon-box">
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
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      </g>
                    </svg>
                  </div>
                  <span className="footer-contact-text">
                    james@qualityfoodsolutions.co.za
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              <span>© 2026 Quality Food Solutions. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-interactivity">
(function(){
  // Simple micro-interaction for social buttons
  const socialButtons = document.querySelectorAll(".footer-social-btn")

  socialButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    })

    btn.addEventListener("mouseleave", () => {
      btn.style.transition = "all 0.3s ease"
    })
  })

  // Ensure copyright year is current (though prompt specified 2026, dynamic is better for production)
  const copyrightElem = document.querySelector(".footer-copyright")
  if (copyrightElem) {
    const currentYear = new Date().getFullYear()
    if (currentYear > 2026) {
      copyrightElem.innerHTML = \`&copy; \${currentYear} Quality Food Solutions. All rights reserved.\`
    }
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
