import React from 'react';

function LatestArticlesSection() {
  // 内联样式对象
  const sectionStyle = {
    backgroundColor: '#f4f4f4',
    padding: '20px',
  };

  const titleStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const articleStyle = {
    marginBottom: '10px',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Latest articles or popular questions</h2>
      <div style={articleStyle}>
        <h3>Article title 1</h3>
        <p>Article content 1</p>
      </div>
      <div style={articleStyle}>
        <h3>Article title 2</h3>
        <p>Article content 2</p>
      </div>
      {/* Add more articles here */}
    </section>
  );
}

export default LatestArticlesSection;
