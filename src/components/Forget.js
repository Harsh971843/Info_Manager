import React, { useState } from 'react';
import './Forget.css';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the API call to handle forgot password
    // Example: 
    fetch('/api/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    .then(response => response.json())
    .then(data => setMessage(data.message))
    .catch(error => setMessage('An error occurred'));
    setMessage(`If an account with ${email} exists, a reset link has been sent.`);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}>Send Reset Link</button>
      </form>
      {message && <p style={{ marginTop: '15px', color: '#007BFF' }}>{message}</p>}
    </div>
  );
};

export default Forgot;
