import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './services.css'

const Services = (props) => {
  return (
    <div className="services-container1">
      <Helmet>
        <title>Services | Scale Africa</title>
        <meta
          property="og:title"
          content="Services | Scale Africa"
        />
        <link
          rel="canonical"
          href="https://circular-self-reliant-sheep-lh9nyn.teleporthq.site/services"
        />
        <meta
          property="og:url"
          content="https://circular-self-reliant-sheep-lh9nyn.teleporthq.site/services"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-maize">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/28355406/pictures/preview-0.jpg"
          src="https://videos.pexels.com/video-files/28355406/12366543_640_360_30fps.mp4"
          className="hero-maize-video"
        ></video>
        <div className="hero-maize-overlay"></div>
        <div className="hero-maize-content">
          <h1 className="hero-title">
            Fueling the Scale of African Enterprise
          </h1>
          <p className="hero-subtitle">
            We partner with high-potential African SMEs that already demonstrate commercial traction, providing the capital, expertise, and operational support needed to scale sustainably.
          </p>
          <div className="hero-maize-actions">
            <a href="#contact">
              <div className="btn btn-accent btn-lg">
                <span>Partner with Us</span>
              </div>
            </a>
            <a href="#services">
              <div className="btn btn-lg btn-outline">
                <span>Explore Our Framework</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="core-services">
        <div className="core-services-container">
          <div className="core-services-header">
            <h2 className="section-title">Our Mission in Action</h2>
            <p className="section-content">
              We empower high-potential businesses to evolve from local operations into institutional-grade powerhouses.
            </p>
          </div>
          <div className="core-services-grid">
            <div className="service-card">
              <div className="service-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
              </div>
              <h3 className="section-subtitle">01. Identifying Proven Traction</h3>
              <p className="section-content">
                We bypass early-stage ideation to focus exclusively on high-potential African SMEs 
                that have already proven their market fit. By partnering with businesses that possess 
                clear commercial momentum, we ensure our resources catalyze immediate, viable growth.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">02. Deploying Growth Capital</h3>
              <p className="section-content">
                Scaling requires flexible, intentional financing. We inject targeted growth capital 
                specifically structured to unlock operational bottlenecks, fund machinery or technology 
                upgrades, and provide the runway needed to capture larger market shares.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">03. Embedding Operational Excellence</h3>
              <p className="section-content">
                Capital alone isn't enough. We embed deep, hands-on operational and commercial 
                expertise directly into our partner companies. From streamlining internal workflows 
                to refining pricing and product development, we build structural strength from the inside out.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <polyline points="9 15 11 17 15 13"></polyline>
                </svg>
              </div>
              <h3 className="section-subtitle">04. Driving Investment Readiness</h3>
              <p className="section-content">
                We prepare your business for its next institutional horizon. By upgrading financial 
                governance, compliance frameworks, and strategic data rooms, we transition highly functional 
                SMEs into institutional-grade targets ready for major funding rounds.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">05. Fostering Sustainable Employment</h3>
              <p className="section-content">
                True economic scale is measured by human impact. Every partnership we form is deeply 
                tied to measurable job creation, turning commercial expansion into stable, long-term 
                employment opportunities and career paths within local communities.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="section-subtitle">06. Anchoring Local Value Chains</h3>
              <p className="section-content">
                We believe in keeping economic value where it originates. We actively help our partners 
                secure broader market access, elevate raw value addition, and build resilient local 
                supply chains that reduce reliance on volatile external markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="supply-chain">
        <div className="supply-chain-container">
          <div className="supply-chain-header">
            <h2 className="section-title">Our Strategic Objectives</h2>
            <p className="section-content">
            </p>
          </div>
          <div className="supply-chain-steps">
            <div className="step-item">
              <div className="step-number">
                <span>01</span>
              </div>
              <h3 className="section-subtitle">Enterprise Resilience:</h3>
              <p className="section-content">
                We help businesses build robust frameworks capable of weathering macroeconomic shifts and supply chain fluctuations.
              </p>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>02</span>
              </div>
              <h3 className="section-subtitle">Investment Readiness:</h3>
              <p className="section-content">
                We transition operationally sound SMEs into institutional-grade targets ready for subsequent major funding rounds.
              </p>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>03</span>
              </div>
              <h3 className="section-subtitle">Sustainable Employment:</h3>
              <p className="section-content">
                By scaling commercially viable businesses, we actively foster long-term job creation and career development in local economies.
              </p>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>04</span>
              </div>
              <h3 className="section-subtitle">Local Value Chains:</h3>
              <p className="section-content">
                Building comprehensive strategic data rooms to attract subsequent-stage institutional capital.
              </p>
            </div>
          </div>
        </div>
      </section>
                    
      <section className="logistics-process">
        <div className="logistics-process-container">
          <div className="logistics-process-header">
            <h2 className="section-title">Partnership Criteria</h2>
            <p className="section-content">
            </p>
          </div>
          <div className="logistics-process-steps">
            <div className="process-step">
              <div className="process-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="section-subtitle">Geography</h3>
              <p className="section-content">
                Registered and operating within high-growth African markets.
              </p>
            </div>
            <div className="process-step">
              <div className="process-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <h3 className="section-subtitle">Traction</h3>
              <p className="section-content">
                Must demonstrate proven commercial traction (clear, verifiable revenue streams; not early-stage ideation).
              </p>
            </div>
            <div className="process-step">
              <div className="process-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
              <h3 className="section-subtitle">Potential</h3>
              <p className="section-content">
                Highly scalable business models with clear room to expand regionally or vertically.
              </p>
            </div>
            <div className="process-step">
              <div className="process-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Alignment</h3>
              <p className="section-content">
                Leadership teams committed to creating sustainable local employment and strong value chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-cta">
        <div className="contact-cta-container">
          <div className="contact-column">
            <h2 className="section-title">Partner With Us</h2>
            <p className="section-content">
              Are you an established African SME ready to unlock structured capital and operational growth? Let's connect.
            </p>
            <div className="contact-methods">
              <div className="method-item">
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
                <span>+27 76 159 2717</span>
              </div>
              <div className="method-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>james@qualityfoodsolutions.co.za</span>
              </div>
            </div>
          </div>
          <div className="contact-column">
            <div className="cta-box">
              <h3 className="section-subtitle">Start Your Solution</h3>
              <p className="section-content">
                Schedule an assessment or request a custom scale-up blueprint consultation.
              </p>
              <div className="cta-buttons">
                <a href="mailto:james@qualityfoodsolutions.co.za?subject=Partnership Inquiry">
                  <div className="btn btn-lg btn-primary">
                    <span>Email Us</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <dialog id="quoteModal" className="quote-dialog">
        <div className="modal-header">
          <h2 className="modal-title">Apply for Partnership Assessment</h2>
          <button id="closeQuoteModal" className="btn-close">×</button>
        </div>
        <div className="modal-body">
          <form className="modal-form">
            <div className="form-group">
              <label htmlFor="companyName">SME / Company Name</label>
              <input type="text" id="companyName" placeholder="Enter your business name" required />
            </div>
            <div className="form-group">
              <label htmlFor="annualRevenue">Annual Revenue (USD)</label>
              <input type="text" id="annualRevenue" placeholder="e.g., $250k - $1M" required />
            </div>
            <div className="form-group">
              <label htmlFor="sectors">Primary Industry Sector</label>
              <input type="text" id="sectors" placeholder="e.g., Agro-processing, FMCG, Tech" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Briefly describe your scaling bottlenecks</label>
              <textarea id="message" rows="3" placeholder="Tell us how we can help..." required></textarea>
            </div>
            <button type="submit" className="btn btn-accent btn-lg">Submit Application</button>
          </form>
        </div>
      </dialog>
      <Footer></Footer>
    </div>
  )
}

export default Services
