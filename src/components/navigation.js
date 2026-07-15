import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav id="main-navigation" className="navigation-wrapper">
        <div className="navigation-container">
          <Link to="/">
            <div
              aria-label="Quality Food Solutions Home"
              className="navigation-brand"
            >
              <div className="navigation-logo-icon">
                {/* --- THREE-LEAFED PLANT SVG (DESKTOP) --- */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 20h10" />
                  <path d="M10 20c5.5-2.5 8-6.4 8-12c-2.5 0-6.4 2.5-8 8" />
                  <path d="M10 12.1a12.1 12.1 0 0 0-3.5-3.6" />
                  <path d="M14 11a11.9 11.9 0 0 1 3.5-3" />
                </svg>
              </div>
              <span className="navigation-brand-name">
                Quality Food Solutions
              </span>
            </div>
          </Link>
          <div className="navigation-desktop-menu">
            <ul className="navigation-links">
              <li>
                <Link to="/">
                  <div className="navigation-link">
                    <span>Home</span>
                  </div>
                </Link>
              </li>
              
              {/* --- ADDED ABOUT US LINK (DESKTOP) --- */}
              <li>
                <a href="/#about-us" style={{ textDecoration: 'none' }}>
                  <div className="navigation-link">
                    <span>About Us</span>
                  </div>
                </a>
              </li>

              <li>
                <Link to="/services">
                  <div className="navigation-link">
                    <span>Services</span>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="navigation-actions">
              <a href="#contact">
                <div className="btn btn-primary btn-sm">
                  <span>Contact Us</span>
                </div>
              </a>
            </div>
          </div>
          <button
            id="menu-toggle"
            aria-expanded="false"
            aria-controls="mobile-overlay"
            aria-label="Toggle navigation menu"
            className="navigation-mobile-toggle"
          >
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
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobile-overlay" className="navigation-mobile-overlay">
        <div className="navigation-overlay-header">
          <Link to="/">
            <div
              aria-label="Quality Food Solutions Home"
              className="navigation-brand"
            >
              <div className="navigation-logo-icon">
                {/* --- THREE-LEAFED PLANT SVG (MOBILE OVERLAY) --- */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 20h10" />
                  <path d="M10 20c5.5-2.5 8-6.4 8-12c-2.5 0-6.4 2.5-8 8" />
                  <path d="M10 12.1a12.1 12.1 0 0 0-3.5-3.6" />
                  <path d="M14 11a11.9 11.9 0 0 1 3.5-3" />
                </svg>
              </div>
              <span className="navigation-brand-name">
                Quality Food Solutions
              </span>
            </div>
          </Link>
          <button
            id="menu-close"
            aria-label="Close navigation menu"
            className="navigation-overlay-close"
          >
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
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <ul className="navigation-mobile-links">
            <li>
              <Link to="/">
                <div className="navigation-mobile-link">
                  <span>Home</span>
                </div>
              </Link>
            </li>

            {/* --- ADDED ABOUT US LINK (MOBILE) --- */}
            <li>
              <a href="/#about-us" style={{ textDecoration: 'none' }}>
                <div className="navigation-mobile-link">
                  <span>About Us</span>
                </div>
              </a>
            </li>

            <li>
              <Link to="/services">
                <div className="navigation-mobile-link">
                  <span>Services</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="navigation-mobile-actions">
            <a href="#contact">
              <div className="btn btn-primary btn-lg">
                <span>Get in Touch</span>
              </div>
            </a>
            <div className="navigation-contact-info">
              <p className="section-content">
                Feeding Growth, Delivering Quality
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const menuToggle = document.getElementById("menu-toggle")
  const menuClose = document.getElementById("menu-close")
  const mobileOverlay = document.getElementById("mobile-overlay")
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")

  const openMenu = () => {
    mobileOverlay.classList.add("is-active")
    menuToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    mobileOverlay.classList.remove("is-active")
    menuToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  menuToggle.addEventListener("click", openMenu)
  menuClose.addEventListener("click", closeMenu)

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("is-active")) {
      closeMenu()
    }
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767 && mobileOverlay.classList.contains("is-active")) {
      closeMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-mobile-overlay {
  transition: none;
}
.navigation-link::after {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
