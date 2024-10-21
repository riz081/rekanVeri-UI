import React, { useState } from 'react';
import {
  CreateApps
} from '../../pages/Create';
import { Link } from 'react-router-dom';

const Applications = () => {
  const data = [
    {
      title: 'HEMAT-SOLUTION',
      applicationId: 'adb60223-d555-46b0-ab12-af4d582fff69',
      dateTime: '26 Jun 2024 14:28:52 GMT+0700',
    },
    {
      title: 'HEMAT-SOLUTION',
      applicationId: 'e1234567-d555-46b0-ab12-af4d582fff70',
      dateTime: '27 Jun 2024 15:28:52 GMT+0700',
    },
  ];

  const [buttonStates, setButtonStates] = useState(data.map(() => ({ isHovered: false, isActive: false })));

  const handleMouseEnter = (index) => {
    setButtonStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].isHovered = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index) => {
    setButtonStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].isHovered = false;
      return newStates;
    });
  };

  const handleMouseDown = (index) => {
    setButtonStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].isActive = true;
      return newStates;
    });
  };

  const handleMouseUp = (index) => {
    setButtonStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].isActive = false;
      return newStates;
    });
  };

  const containerStyle = {
    padding: '20px',
    maxWidth: '1200px',
    margin: '1.7% auto',
  };

  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: '20px',
  };

  const h2Style = {
    color: '#0542cc',
    fontWeight: '600',
    margin: '10px 0',
  };

  const searchInputWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '5px',
    border: '1px solid #ced4ca',
  };

  const searchInputStyle = {
    width: '100%',
    padding: '10px',
    border: 'none',
    outline: 'none',
    borderRadius: '3px 0 0 3px',
  };

  const searchButtonStyle = {
    backgroundColor: '#0542cc',
    border: 'none',
    borderRadius: '0 3px 3px 0',
    padding: '10px 13px',
    cursor: 'pointer',
  };

  const searchIconStyle = {
    color: '#fff',
    fontSize: '20px',
  };

  const wrapperCardStyle = {
    border: '0.2px solid gray',
    borderLeft: '5px solid #0542cc',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    padding: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#0542cc',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    margin: '2% 0 1.7% 0',
  };

  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  };

  const cardHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const cardTitleStyle = {
    fontWeight: '900',
    fontSize: '18px',
    color: '#000',
  };

  const cardContentStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: '10px 0',
  };

  const applicationIdWrapperStyle = {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid #ced4ca',
    borderRadius: '5px 0 0 5px',
    padding: '15px 0 0 10px',
    gap: '5px',
    lineHeight: '1.2',
  };

  const copyButtonStyle = {
    padding: '5px 10px',
    color: '#fff',
    border: 'none',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    height: '6.3vh',
    width: '10vh',
  };


  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={h2Style}>List of Applications</h2>
        <div style={searchInputWrapperStyle}>
          <input
            type="text"
            placeholder="Type your keywords here"
            style={searchInputStyle}
          />
          <button style={searchButtonStyle}>
            <i className="fas fa-search" style={searchIconStyle}></i>
          </button>
        </div>
      </div>

      <div style={wrapperCardStyle}>
        <Link to="/createApps" style={{ textDecoration: 'none' }}>
          <button style={buttonStyle}>
            <i className="fas fa-plus"></i>
            Create New App ID
          </button>
        </Link>
        <div style={cardContainerStyle}>
          {data.map((item, index) => (
            <div key={index} style={cardStyle}>
              <div style={cardHeaderStyle}>
                <span style={cardTitleStyle}>{item.title}</span>
              </div>
              <div style={cardContentStyle}>
                <div style={applicationIdWrapperStyle}>
                  <p><strong>Application ID:</strong></p>
                  <p>{item.applicationId}</p>
                </div>
                <button
                  style={{
                    ...copyButtonStyle,
                    backgroundColor: buttonStates[index].isActive
                      ? '#4BA5E7'
                      : buttonStates[index].isHovered
                      ? '#1A6FD9'
                      : '#0542cc',
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onMouseDown={() => handleMouseDown(index)}
                  onMouseUp={() => handleMouseUp(index)}
                >
                  Copy
                </button>
              </div>
              <div style={cardContentStyle}>
                <div style={applicationIdWrapperStyle}>
                  <p><strong>Date & Time:</strong> {item.dateTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;
