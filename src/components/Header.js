import React from 'react';

function Header() {
  // 内联样式对象
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const inputStyle = {
    padding: '10px',
    width: '70%',
    border: 'none',
    borderRadius: '5px',
    marginRight: '10px',
    fontSize: '18px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
  };

  return (
    <header style={headerStyle}>
      <div>
        <h1 style={titleStyle}>Medical Question and Answer System</h1>
        <div>
          <input type="text" placeholder="Enter your question" style={inputStyle} />
          <button style={buttonStyle}>Search</button>
        </div>
      </div>
    </header>
  );
}

export default Header;