import React from 'react';

function CategorySection() {
  // 内联样式对象
  const sectionStyle = {
    backgroundColor: '#f0f0f0',
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

  const categoryItemStyle = {
    listStyleType: 'none',
    fontSize: '18px',
    marginBottom: '5px',
  };

  return (
    <section style={sectionStyle} className="categories">
      <h2 style={headingStyle}>Theme classification</h2>
      <ul>
        <li style={categoryItemStyle}>Healthy eating</li>
        <li style={categoryItemStyle}>Mental Health</li>
        <li style={categoryItemStyle}>Common diseases</li>
        {/* Add more categories */}
      </ul>
    </section>
  );
}

export default CategorySection;