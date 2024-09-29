import React from 'react'
import './about.css'

function about() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <div className="about-us-container" style={{ backgroundColor: '#121212' }}>
        <div className="about-us" style={{ backgroundColor: '#1E1E1E', color: '#E0E0E0' }}>
          <i 
            className="ri-arrow-left-line" 
            style={{ fontSize: '2rem', cursor: 'pointer' }} 
            onClick={() => window.location.href = '/'}
          ></i>
          <h2 style={{ color: '#64B5F6', marginTop: '2rem', marginBottom: '2rem' }}>About Us</h2>
          <p style={{ color: '#B0B0B0' }}>
            At Blocksure Innovation, we are pioneering the future of insurance through blockchain technology. Our mission is to provide transparent, efficient, and secure insurance solutions that empower our clients and revolutionize the industry.
          </p>
          <p style={{ color: '#B0B0B0' }}>
            Founded by a team of insurance experts and blockchain enthusiasts, we combine deep industry knowledge with cutting-edge technology to create innovative insurance products that meet the evolving needs of our customers in the digital age.
          </p>
        </div>
      </div>
    </>
  )
}

export default about
