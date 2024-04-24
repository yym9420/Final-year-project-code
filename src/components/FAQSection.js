import React from 'react';

function FAQSection() {
  // 内联样式对象
  const sectionStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '20px',
  };

  const headingStyle = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const questionStyle = {
    color: '#555',
    fontSize: '18px',
    marginBottom: '5px',
  };

  const answerStyle = {
    color: '#777',
    fontSize: '16px',
    marginBottom: '15px',
  };

  return (
    <section style={sectionStyle} className="faq">
      <h2 style={headingStyle}>FAQ</h2>
      <div>
        <div style={questionStyle}>Question 1: How to register? </div>
        <div style={answerStyle}>A: You can find registration options on the login page. </div>

        <div style={questionStyle}>Question 2: How to reset password? </div>
        <div style={answerStyle}>A: You can click the "Forgot Password" link and follow the prompts. </div>

        {/* Add more questions and answers */}
      </div>
    </section>
  );
}

export default FAQSection;