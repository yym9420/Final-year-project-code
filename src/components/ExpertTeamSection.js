import React from 'react';

function ExpertTeamSection() {
  // 内联样式对象
  const sectionStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const headingStyle = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  return (
    <section style={sectionStyle} className="expert-team">
      <h2 style={headingStyle}>Introduction to the expert team</h2>
      <ul>
        <li>Dr. Zhang San - Cardiologist</li>
        <li>Dr. John Doe - Nutritionist</li>
        <li>Dr. Wang Wu - Pediatrician</li>
        {/* Add more expert introductions */}
      </ul>
    </section>
  );
}

export default ExpertTeamSection;