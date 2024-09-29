import React, { useState, useEffect } from 'react'
import InsuranceClaimComponent from './component1'
import About from './about'
import Policies from './policies'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showComponent1, setShowComponent1] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showPolicies, setShowPolicies] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleGetStarted = () => {
    setShowComponent1(true);
  };

  const handleShowAbout = () => {
    setShowAbout(true);
  };

  const handleShowPolicies = () => {
    setShowPolicies(true);
  };

  if (showComponent1) {
    return <InsuranceClaimComponent />;
  }

  if (showAbout) {
    return <About />;
  }

  if (showPolicies) {
    return <Policies />;
  }

  return (
    <div className="landing-page">
      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="logo">Blocksure Innovation</div>
        <nav>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span></span>
          </label>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#" className="cta-nav" onClick={handleShowPolicies}>Policies</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
          <div className="hero-content">
            <h1>Revolutionizing Insurance with Smart Contracts</h1>
            <p>Experience the future of protection with our blockchain-powered insurance solutions</p>
            <button className="cta-button" onClick={handleGetStarted}>Claim amount</button>
          </div>
        </section>
        <section id="about">
          <h2>About Us</h2>
          <p>Smart Contract Insurance leverages cutting-edge blockchain technology to provide transparent and efficient insurance solutions for the modern world.</p>
          <div className="down-side-logo">
            <i className="ri-arrow-down-wide-line" onClick={handleShowAbout}></i>
          </div>
        </section>
        
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <section id="services">
          <h2>Our Services</h2>
          <div className="service-grid">
            <div className="service-item" onClick={handleShowPolicies} style={{ cursor: 'pointer' }}>
              <i className="fas fa-link"></i>
              <h3>Blockchain-Based Policies</h3>
            </div>
            <div className="service-item">
              <i className="fas fa-shield-alt"></i>
              <h3>Smart Contract Coverage</h3>
            </div>
            <div className="service-item">
              <i className="fas fa-bolt"></i>
              <h3>Instant Claims Processing</h3>
            </div>
            <div className="service-item">
              <i className="fas fa-lock"></i>
              <h3>Decentralized Security</h3>
            </div>
          </div>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" className="submit-button">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Smart Contract Insurance. All rights reserved.</p>
      </footer>
      
    </div>
  )
}

export default App