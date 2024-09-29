import React from 'react'
// import './policies.css'

function Policies() {
  const handleBackToLanding = () => {
    window.location.href = '/';
  };

  return (
    <>
    <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
    rel="stylesheet"
    />
    
    <div className="policies-container" style={{ position: 'relative' }}>
      <i 
        className="ri-arrow-left-line" 
        style={{ 
          color: 'white', 
          fontSize: '2.5rem', 
          position: 'absolute', 
          top: '10px', 
          left: '10px',
          cursor: 'pointer',
          transition: 'transform 0.3s ease, color 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.2)';
          e.target.style.color = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.color = 'white';
        }}
        onClick={handleBackToLanding}
      ></i>
      
      <h1 className="policies-title" style={{ 
        background: 'linear-gradient(45deg, #4B0082, #8A2BE2)', 
        color: 'white',
        padding: '10px', 
        borderRadius: '8px',
        marginTop: '50px'  // Added to give space for the icon
      }}>Our Insurance Partners</h1>
      <div className="main-container">
        <div className="policy-card">
          <div className="logo-container" style={{ 
            background: 'linear-gradient(135deg, #B22222, #DC143C)', 
            borderRadius: '15px', 
            padding: '10px' 
          }}>
            <a href="https://www.allianz.com/" target="_blank" rel="noopener noreferrer">
              <img 
                alt="Allianz Logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Allianz.svg" 
                className="company-logo"
                style={{ borderRadius: '10px' }}
              />
            </a>
          </div>
          <h3 className="company-name">Allianz</h3>
          <p className="company-description">Global insurance and asset management</p>
        </div>
        <div className="policy-card">
          <div className="logo-container" style={{ 
            background: 'linear-gradient(135deg, #006400, #228B22)', 
            borderRadius: '15px', 
            padding: '10px' 
          }}>
            <a href="https://etherisc.com/" target="_blank" rel="noopener noreferrer">
              <img 
                alt="Etherisc Logo" 
                src="https://cdn.prod.website-files.com/6243075ff83d08a79dc7b307/62430b9f2fb99352e8fca26f_2019_Etherisc_Logo.svg" 
                className="company-logo"
                style={{ borderRadius: '10px' }}
              />
            </a>
          </div>
          <h3 className="company-name">Etherisc</h3>
          <p className="company-description">Decentralized insurance protocol</p>
        </div>
        <div className="policy-card">
          <div className="logo-container" style={{ 
            background: 'linear-gradient(135deg, #00008B, #0000CD)', 
            borderRadius: '15px', 
            padding: '10px' 
          }}>
            <a href="https://www.kaleido.io/" target="_blank" rel="noopener noreferrer">
              <img 
                alt="Kaleido Logo" 
                src="https://cdn.prod.website-files.com/5dfc18aeef0cf9644ab5ccca/620412a21c148004e3d0628b_kaleido-logo.svg" 
                className="company-logo"
                style={{ borderRadius: '10px' }}
              />
            </a>
          </div>
          <h3 className="company-name">Kaleido</h3>
          <p className="company-description">Blockchain business cloud</p>
        </div> 
      </div>
    </div>
    </>
  )
}

export default Policies