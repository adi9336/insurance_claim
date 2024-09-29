import React, { useState } from 'react';
import './component1.css';

const InsuranceClaimComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [claimAmount, setClaimAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Claim submitted:', { name, email, claimAmount });
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    } else {
      console.log('Ethereum wallet not detected');
    }
  };

  const handleBack = () => {
    // Reload the website
    window.location.reload();
  };

  return (
    <div className="container">
      <h1>Insurance Claim Website</h1>

      {/* Claim Form */}
      <form id="claimForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="claimAmount">Claim Amount (ETH):</label>
        <input
          type="number"
          id="claimAmount"
          name="claimAmount"
          value={claimAmount}
          onChange={(e) => setClaimAmount(e.target.value)}
          required
        />

        <button type="submit">Submit Claim</button>
      </form>

      {/* Ethereum Wallet Integration */}
      <div id="wallet">
        <h2>Connect to Ethereum Wallet</h2>
        <div className="button-container">
          <button id="connectWalletBtn" onClick={connectWallet}>
            Connect Wallet
          </button>
          <button id="backBtn" onClick={handleBack}>
            Back
          </button>
        </div>
        <p id="walletAddress">{walletAddress}</p>
      </div>

      
    </div>
  );
};

export default InsuranceClaimComponent;
