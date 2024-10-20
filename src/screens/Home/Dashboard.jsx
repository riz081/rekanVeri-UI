import React from 'react';
import {
    OCR,
    SmsAnnounce,
    OTP
} from '../../assets/icon';
import { DashboardImg } from '../../assets/img';

function Dashboard() {

    const wrapperStyle = {
        backgroundColor: '#e2fbea',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#d2d6de',
        borderRadius: '5px',
        padding: '16px',
        marginBottom: '2%'
    };

    const alertStyle = {
        backgroundColor: '#e2fbea',
        padding: '6px 22px 0 0',
        marginBottom: '2%'
      };

    const headingStyle = (fontWeight, color) => ({
        fontWeight: fontWeight,
        color: color,
    });

    const textStyle = {
        fontWeight: 400,
        color: '#212529',
        marginTop: '2vh'
    };

    const cardStyle = {
        border: '0.1px solid gray',
        borderRadius: '2%',
        filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.1))',
    };

    const iconStyle = {
        marginBottom: '3%',
        marginRight: '3%'
    };

    const flexContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    };

    const hitsStyle = {
        fontWeight: 600,
        fontSize: '40px',
        color: '#0542cc',
    };
    
    const percentageStyle = {
        fontWeight: 600,
        fontSize: '40px',
        color: '#0542cc',
    };
    
    const valueContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4%',
        margin: '10% 0 0 0',
    };

    const CardBottomStyle = {
        border: '0.1px solid gray', 
        borderRadius: '2%',        
        filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.1))',
    };

    const contentBottomStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',   
        gap: '10px',
    };

    const paragraphStyle = {
        textAlign: 'left',
        fontWeight: 400,
    };

    const buttonStyle = {
        backgroundColor: '#0542cc',
        borderRadius: '5px',       
        color: 'white',            
        padding: '10px 20px',      
        border: 'none',            
        textAlign: 'center',       
        cursor: 'pointer',         
    };
    
    const cardData = [
        {
          icon: OCR,
          title: 'Optical Character Recognition',
          hits: '0',
          percentage: '0%',
          note: 'From Yesterday',
        },
        {
          icon: SmsAnnounce,
          title: 'SMS Announcement',
          hits: '0',
          percentage: '0%',
          note: 'From Yesterday',
        },
        {
          icon: OTP,
          title: 'SMS OTP',
          hits: '0',
          percentage: '0%',
          note: 'From Yesterday',
        },
    ];
      

  return (
    <div className="container mt-5">
        {/* Check Our Service Status Section */}
        <div style={wrapperStyle}>
            <div className="alert alert-info d-flex justify-content-between align-items-center m-0">
                <div style={alertStyle}>
                    <h5 className="mb-1" style={headingStyle(600, '#0542cc')}>Check Our Service Status</h5>
                    <p className="mb-0" style={textStyle}>
                        Stay updated on the current status of our services in real-time. Easily monitor performance, downtime, and maintenance schedules to ensure seamless integration and uninterrupted usage.
                    </p>
                </div>
                <button className="btn btn-primary">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>

        {/* Your Daily Usage Section */}
        <div className="card shadow-sm p-3 mb-4">
            <h5 className="mb-3">
                <i className="fas fa-info me-2"></i>
                <span style={headingStyle(400, '#212529')}>Your Daily Usage</span>
            </h5>
            
            <div className="row">
            {cardData.map((card, index) => (
                <div className="col-md-4 mb-3" key={index}>
                    <div className="card h-100" style={cardStyle}>
                        <div className="card-body">
                            <div style={flexContainerStyle}>
                                <img src={card.icon} alt={card.title.toLowerCase()} style={iconStyle} />
                                <h6 className="card-title" style={headingStyle(600, '#0542cc')}>{card.title}</h6>
                            </div>

                            <div style={valueContainerStyle}>
                                <p className="card-text" style={hitsStyle}>{card.hits}</p>
                                <p>Hits</p>
                                <p className="text-primary" style={percentageStyle}>
                                    {card.percentage}
                                </p>
                                <p>{card.note}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>

            {/* Subscribe Other Services Section */}
            <div className="row">
                <div className="col-md-12">
                    <div className="card mt-4" style={CardBottomStyle}>
                        <div className="card-body text-center">
                            <div style={flexContainerStyle}>
                                <img src={DashboardImg} alt="dashImg" className="mb-3"/>
                                <div style={contentBottomStyle}>
                                    <h3 style={headingStyle(600, '#000')}>Subscribe Other Services</h3>
                                    <p className="card-text" style={paragraphStyle}>
                                        Unlock access to more features by subscribing to our other services. Once subscribed, you'll gain insights through detailed statistics and data tailored to your needs.
                                    </p>
                                    <button className="btn" style={buttonStyle}>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
