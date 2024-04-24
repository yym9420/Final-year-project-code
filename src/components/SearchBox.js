import React from 'react';

function SearchBox() {
  // 内联样式对象
  const containerStyle = {
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '10px',
    marginRight: '10px',
    width: '200px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <input type="text" style={inputStyle} placeholder="Enter your question" />
      <button style={buttonStyle}>Search</button>
    </div>
  );
}

export default SearchBox;