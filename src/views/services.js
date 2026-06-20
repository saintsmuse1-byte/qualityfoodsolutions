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
        <title>Services - Circular Self Reliant Sheep</title>
        <meta
          property="og:title"
          content="Services - Circular Self Reliant Sheep"
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
          autoPlay="true"
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
            Premier Distribution Services for a Growing World
          </h1>
          <p className="hero-subtitle">Feeding Growth, Delivering Quality</p>
          <div className="hero-maize-actions">
            <a href="#contact">
              <div className="btn btn-accent btn-lg">
                <span>Request a Consultation</span>
              </div>
            </a>
            <a href="#services">
              <div className="btn btn-lg btn-outline">
                <span>Explore Services</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section id="services" className="core-services">
        <div className="core-services-container">
          <div className="core-services-header">
            <h2 className="section-title">Core Distribution Services</h2>
            <p className="section-content">
              Reliable food logistics tailored to every stage of the supply
              chain.
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
              <h3 className="section-subtitle">Bulk Grain Distribution</h3>
              <p className="section-content">
                High-capacity transport systems for maize, wheat, and soy from
                farm to silo.
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
              <h3 className="section-subtitle">Retail Deliveries</h3>
              <p className="section-content">
                Last-mile precision ensuring supermarket shelves stay stocked
                with fresh produce.
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
              <h3 className="section-subtitle">Contract Distribution</h3>
              <h3 className="section-subtitle">Contract Distribution</h3>
              <p className="section-content">
                Dedicated logistics partnerships designed for long-term
                stability and growth.
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
              <h3 className="section-subtitle">Direct-to-Processor</h3>
              <p className="section-content">
                Streamlined shipping routes directly from harvesting sites to
                processing facilities.
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
              <h3 className="section-subtitle">Wholesale Fulfillment</h3>
              <p className="section-content">
                Large-scale order management for regional distributors and food
                hubs.
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
              <h3 className="section-subtitle">Logistics Consulting</h3>
              <p className="section-content">
                Expert analysis to optimize your supply chain routing and reduce
                overhead costs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="supply-chain">
        <div className="supply-chain-container">
          <div className="supply-chain-header">
            <h2 className="section-title">Supply Chain Capabilities</h2>
            <p className="section-content">
              End-to-end integration for maximum efficiency and transparency.
            </p>
          </div>
          <div className="supply-chain-steps">
            <div className="step-item">
              <div className="step-number">
                <span>01</span>
              </div>
              <h3 className="section-subtitle">Procurement Coordination</h3>
              <p className="section-content">
                Direct sourcing from certified growers to ensure premium raw
                material quality.
              </p>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>02</span>
              </div>
              <h3 className="section-subtitle">Demand Forecasting</h3>
              <p className="section-content">
                Predictive analytics to align inventory levels with market
                seasonalities.
              </p>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>03</span>
              </div>
              <h3 className="section-subtitle">Inventory Management</h3>
              <p className="section-content">
                Real-time tracking and stock rotation to eliminate waste and
                optimize space.
              </p>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>04</span>
              </div>
              <h3 className="section-subtitle">Traceability</h3>
              <p className="section-content">
                Full digital audit trails from the field to the final delivery
                destination.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="value-added">
        <div className="value-added-container">
          <div className="value-added-header">
            <h2 className="section-title">Value-Added Services</h2>
            <p className="section-content">
              Beyond transport—enhancing your products at every touchpoint.
            </p>
          </div>
          <div className="value-added-grid">
            <div className="value-card">
              <div className="value-icon">
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
                    d="m10 20l-1.25-2.5L6 18m4-14L8.75 6.5L6 6m4.585 9H10m-8-3h6.5L10 9m10 5.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"
                  ></path>
                  <path d="m4 10l1.5 2L4 14m3 7l3-6l-1.5-3M7 3l3 6h2"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Cold Chain Solutions</h3>
              <p className="section-content">
                Climate-controlled storage and transit preserving nutritional
                value and freshness.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
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
              <h3 className="section-subtitle">Warehousing</h3>
              <p className="section-content">
                Strategically located hubs with 50,000+ sq ft capacity for dry
                and cool storage.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
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
              <h3 className="section-subtitle">Quality Inspection</h3>
              <p className="section-content">
                Rigorous multi-point checks at intake and dispatch for 100%
                compliance.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
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
              <h3 className="section-subtitle">Repackaging</h3>
              <p className="section-content">
                Flexible unit-sizing and bundling to meet specific retail and
                wholesale requirements.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
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
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5m-4 5l-3.5 3.5l-2-2L8 17"></path>
                  </g>
                </svg>
              </div>
              <h3 className="section-subtitle">Labeling</h3>
              <p className="section-content">
                Custom barcode and compliance labeling for seamless inventory
                integration.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
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
              <h3 className="section-subtitle">Light Processing</h3>
              <p className="section-content">
                On-site cleaning, sorting, and drying services for agricultural
                commodities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="logistics-process">
        <div className="logistics-process-container">
          <div className="logistics-process-header">
            <h2 className="section-title">Logistics Management Process</h2>
            <p className="section-content">
              From intake to delivery—precision management at every step.
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
              <h3 className="section-subtitle">Order Intake</h3>
              <p className="section-content">
                Automated digital processing and order verification.
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
              <h3 className="section-subtitle">Routing Optimization</h3>
              <p className="section-content">
                AI-driven pathfinding to minimize fuel and transit time.
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
              <h3 className="section-subtitle">Compliance Check</h3>
              <p className="section-content">
                Final safety and quality audits before dispatch.
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
              <h3 className="section-subtitle">Final Delivery</h3>
              <p className="section-content">
                Real-time tracking and proof-of-delivery confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="performance-stats">
        <div className="performance-stats-container">
          <div className="performance-stats-header">
            <h2 className="section-title">Performance &amp; Reliability</h2>
            <p className="section-content">
              The numbers that define our commitment to your growth.
            </p>
          </div>
          <div className="performance-stats-grid">
            <div className="stat-card">
              <span className="stat-number">99.8%</span>
              <h3 className="section-subtitle">On-Time Delivery</h3>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <h3 className="section-subtitle">Cold-Chain Retention</h3>
            </div>
            <div className="stat-card">
              <span className="stat-number">50k+</span>
              <h3 className="section-subtitle">Warehouse Capacity (sq ft)</h3>
            </div>
            <div className="stat-card">
              <span className="stat-number">&lt; 24h</span>
              <h3 className="section-subtitle">Average Lead Time</h3>
            </div>
            <div className="stat-card">
              <span className="stat-number">1.2M</span>
              <h3 className="section-subtitle">Tons Distributed Annually</h3>
            </div>
            <div className="stat-card">
              <span className="stat-number">Zero</span>
              <h3 className="section-subtitle">Safety Incidents</h3>
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
                alt="Maize harvest case study"
              />
            </div>
            <div className="case-content">
              <h3 className="section-subtitle">Regional Maize Hub Expansion</h3>
              <p className="section-content">
                &quot;Quality Food Solutions optimized our distribution routes,
                reducing transit time by 30%.&quot; — AgriCorp CEO
              </p>
              <span className="case-outcome">Outcome: +25% Profitability</span>
            </div>
          </div>
          <div className="case-card">
            <div className="case-image">
              <img
                src="https://images.pexels.com/photos/17965454/pexels-photo-17965454.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Cold chain success"
              />
            </div>
            <div className="case-content">
              <h3 className="section-subtitle">
                Fresh Produce Cold-Chain Success
              </h3>
              <p className="section-content">
                &quot;Their temperature monitoring is flawless. We haven&apos;t
                lost a single pallet in two years.&quot; — FreshLink Logistics
              </p>
              <span className="case-outcome">Outcome: 0% Product Loss</span>
            </div>
          </div>
          <div className="case-card">
            <div className="case-image">
              <img
                src="https://images.pexels.com/photos/20234940/pexels-photo-20234940.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Bulk grain distribution"
              />
            </div>
            <div className="case-content">
              <h3 className="section-subtitle">Bulk Grain Streamlining</h3>
              <p className="section-content">
                &quot;The traceability from field to processor has given our
                brand a major trust boost.&quot; — Miller&apos;s Choice
              </p>
              <span className="case-outcome">
                Outcome: Full Audit Compliance
              </span>
            </div>
          </div>
          <div className="case-card">
            <div className="case-image">
              <img
                src="https://images.pexels.com/photos/12529226/pexels-photo-12529226.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Retail supply chain"
              />
            </div>
            <div className="case-content">
              <h3 className="section-subtitle">Retail Supply Resilience</h3>
              <p className="section-content">
                &quot;Even during peak harvest, Quality Food Solutions kept our
                retail network fully operational.&quot; — SuperMart Group
              </p>
              <span className="case-outcome">
                Outcome: 99.9% Shelf Availability
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-cta">
        <div className="contact-cta-container">
          <div className="contact-column">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-content">
              Ready to optimize your food distribution? Contact our logistics
              experts today.
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
                <span>+1 (800) QUALITY-FOOD</span>
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
                <span>logistics@qualityfoodsolutions.com</span>
              </div>
            </div>
          </div>
          <div className="contact-column">
            <h3 className="section-subtitle">Our Headquarters</h3>
            <p className="section-content">
              <span>
                {' '}
                1224 Logistics Parkway
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                {' '}
                Industrial Hub, State 45001
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                {' '}
                Supply Chain Center
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </div>
          <div className="contact-column">
            <div className="cta-box">
              <h3 className="section-subtitle">Start Your Solution</h3>
              <p className="section-content">
                Schedule a consultation or request a custom quote.
              </p>
              <div className="cta-buttons">
                <button id="openQuoteModal" className="btn btn-accent btn-lg">
                  Request a Quote
                </button>
                <a href="mailto:logistics@qualityfoodsolutions.com?subject=">
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
          <h2 className="section-title">Request a Quote</h2>
          <button id="closeQuoteModal" className="close-btn">
            ×
          </button>
        </div>
        <form
          action="/submit-quote"
          method="POST"
          data-form-id="194acd36-5064-49d2-8e03-54884f6907f8"
          className="quote-form"
        >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="true"
              required
              placeholder="John Doe"
              data-form-field-id="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="john@example.com"
              data-form-field-id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="service">Service Type</label>
            <select id="service" name="service" data-form-field-id="service">
              <option value="bulk">Bulk Distribution</option>
              <option value="cold">Cold Chain</option>
              <option value="warehousing">Warehousing</option>
              <option value="consulting">Consulting</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Details</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell us about your requirements..."
              data-form-field-id="message"
            ></textarea>
          </div>
          <button
            type="submit"
            id="thq_button_xX8n"
            name="button"
            data-form-field-id="thq_button_xX8n"
            className="btn btn-accent"
          >
            Submit Request
          </button>
        </form>
      </dialog>
      <div className="services-container2">
        <div className="services-container3">
          <Script
            html={`<script defer data-name="quality-food-solutions-logic">
(function(){
  const modal = document.getElementById("quoteModal")
  const openBtn = document.getElementById("openQuoteModal")
  const closeBtn = document.getElementById("closeQuoteModal")

  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener("click", () => {
      modal.showModal()
    })

    closeBtn.addEventListener("click", () => {
      modal.close()
    })

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.close()
      }
    })
  }

  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".service-card, .value-card, .process-step, .stat-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="services-container4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="services-icon77"
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
          <span className="services-text26">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Services
