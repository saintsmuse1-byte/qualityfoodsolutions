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
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></path>
                    <path d="M5 17H3v-4M2 5h11v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5M3 9h4"></path>
                  </g>
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
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  ></path>
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
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"></path>
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8zM6 13h12M6 17h12"></path>
                  </g>
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
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                    <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                  </g>
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
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="m19 9l-5 5l-4-4l-3 3"></path>
                  </g>
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
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <rect
                      width="14"
                      height="20"
                      x="5"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M12 18h.01"></path>
                  </g>
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
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="m19 9l-5 5l-4-4l-3 3"></path>
                  </g>
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
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </g>
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
              <h3 className="section-subtitle">Alignment</h3>
              <p className="section-content">
                Leadership teams committed to creating sustainable local employment and strong value chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-studies">
        <div className="case-studies-rail">
          <div className="case-card">
            <div className="case-image">
              <img
                src="https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Agro-Processing Case Study"
              />
            </div>
            <div className="case-content">
              <h3 className="section-subtitle">Regional Agro-Processing Expansion</h3>
              <p className="section-content">
                &quot;Their hands-on operational blueprint and targeted machinery capital helped us double processing capacity.&quot; — AgriCorp CEO
              </p>
              <span className="case-outcome">Outcome: +120% Revenue Scale</span>
            </div>
          </div>
          <div className="case-card">
            <div className="case-image">
              <img
                src="https://images.pexels.com/photos/17965454/pexels-photo-17965454.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="FMCG Case Study"
              />
            </div>
            <div className="case-content">
              <h3 className="section-subtitle">
                FMCG Manufacturing Scaling
              </h3>
              <p className="section-content">
                &quot;The restructuring of our financial reporting system unlocked institutional bank lines for the first time in years.&quot; — FMCG Director
              </p>
              <span className="case-outcome">Outcome: 100% Audit Readiness</span>
            </div>
          </div>
          <div className="case-card">
            <div className="case-image">
              <img
                src="https://images.pexels.com/photos/20234940/pexels-photo-20234940.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Supply Chain Case Study"
              />
            </div>
            <div className="case-content">
              <h3 className="section-subtitle">Tech-Enabled Local Sourcing</h3>
              <p className="section-content">
                &quot;Integrating modern inventory management across our supply chain reduced margin leakage down to zero.&quot; — Agrilink Founder
              </p>
              <span className="case-outcome">
                Outcome: Full Value-Chain Integration
              </span>
            </div>
          </div>
          <div className="case-card">
            <div className="case-image">
              <img
                src="https://images.pexels.com/photos/12529226/pexels-photo-12529226.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Retail Scale Case Study"
              />
            </div>
            <div className="case-content">
              <h3 className="section-subtitle">Sustainable Off-Taker Network</h3>
              <p className="section-content">
                &quot;They matched us with regional enterprise buyers and helped us scale up to meet peak-demand requirements reliably.&quot; — SuperMart Supplier
              </p>
              <span className="case-outcome">
                Outcome: +140% Job Creation
              </span>
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
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                    <path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"></path>
                  </g>
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
                <button id="openQuoteModal" className="btn btn-accent btn-lg">
                  Apply for Partnership
                </button>
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
