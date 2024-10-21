import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const CreateApps = () => {
  const location = useLocation();
  const [buttonState, setButtonState] = useState({
    isHovered: false,
    isActive: false,
  });

  const Breadcrumb = ({ path }) => {
    return (
      <nav style={{ marginBottom: '1rem', fontSize: '14px' }}>
        {path.map((item, index) => (
          <span key={index}>
            {index > 0 && ' > '}
            <a
              href={item.link}
              style={{
                color: location.pathname === item.link ? '#007bff' : '#000',
                textDecoration: 'none',
                fontWeight: location.pathname === item.link ? 'bold' : 'normal',
              }}
            >
              {item.name}
            </a>
          </span>
        ))}
      </nav>
    );
  };

  const breadcrumbPath = [
    { name: 'Application', link: '/application' },
    { name: 'Create Application ID', link: '/createApps' },
  ];

  const containerStyle = {
    padding: '1rem', 
    maxWidth: '100%', 
    margin: '3vh auto',
  };

  const wrapperStyle = {
    border: '1px solid #ddd', 
    borderRadius: '4px', 
    padding: '1.5rem', 
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    borderLeft: '5px solid #0542cc'
  };

  const headerStyle = {
    marginBottom: '1rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    margin: '3px 0 21px 0',
    fontStyle: 'italic',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: buttonState.isActive
      ? '#4BA5E7'
      : buttonState.isHovered
      ? '#1A6FD9'
      : '#0542cc',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const spanStyle = {
    color: '#fff',
    fontWeight: '400'
  };

  const handleMouseEnter = () => setButtonState({ ...buttonState, isHovered: true });
  const handleMouseLeave = () => setButtonState({ ...buttonState, isHovered: false, isActive: false });
  const handleMouseDown = () => setButtonState({ ...buttonState, isActive: true });
  const handleMouseUp = () => setButtonState({ ...buttonState, isActive: false });

  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        <Breadcrumb path={breadcrumbPath} />
        <h2 style={headerStyle}>Create Application ID</h2>
        <input
          type="text"
          placeholder="Input your application name"
          style={inputStyle}
          className="italic-placeholder"
        />
        <button
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <span style={spanStyle}>Create App ID</span>
        </button>
      </div>
      <style>
        {`
          input::placeholder {
            font-style: italic;
          }
        `}
      </style>
    </div>
  );
};

export default CreateApps;
