import React from 'react';

function SecurityPrivacySection() {
  const sectionStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '24px',
    color: '#333',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Security and Privacy Instructions</h2>
      <p style={paragraphStyle}>We take your security and privacy very seriously. Here is our security and privacy policy:</p>
      <ul style={paragraphStyle}>
        <li>We strictly protect user data and will not disclose it to any third party. </li>
        <li>All user data is encrypted to ensure secure transmission. </li>
        <li>We conduct regular security reviews and vulnerability scans to ensure the security of our systems. </li>
      </ul>
    </section>
  );
}

export default SecurityPrivacySection;