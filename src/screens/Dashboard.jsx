import React from 'react';

function Dashboard() {
  const cardData = [
    {
      title: "Watchlist Screening",
      subtitle: "Assess Potential Risk",
      description: "Receive detailed insights into potential matches against a list of known or suspected individuals and entities. Our service analyzes the provided full name and other key information to help you assess risks effectively and make informed decisions.",
      badge: "New",
      buttonText: "Get Started",
    },
    {
      title: "Watchlist Screening",
      subtitle: "Assess Potential Risk",
      description: "Receive detailed insights into potential matches against a list of known or suspected individuals and entities. Our service analyzes the provided full name and other key information to help you assess risks effectively and make informed decisions.",
      badge: "New",
      buttonText: "Get Started",
    },
    {
      title: "Watchlist Screening",
      subtitle: "Assess Potential Risk",
      description: "Receive detailed insights into potential matches against a list of known or suspected individuals and entities. Our service analyzes the provided full name and other key information to help you assess risks effectively and make informed decisions.",
      badge: "New",
      buttonText: "Get Started",
    },
    {
      title: "Watchlist Screening",
      subtitle: "Assess Potential Risk",
      description: "Receive detailed insights into potential matches against a list of known or suspected individuals and entities. Our service analyzes the provided full name and other key information to help you assess risks effectively and make informed decisions.",
      badge: "New",
      buttonText: "Get Started",
    },
    {
      title: "Watchlist Screening",
      subtitle: "Assess Potential Risk",
      description: "Receive detailed insights into potential matches against a list of known or suspected individuals and entities. Our service analyzes the provided full name and other key information to help you assess risks effectively and make informed decisions.",
      badge: "New",
      buttonText: "Get Started",
    },
    {
      title: "Watchlist Screening",
      subtitle: "Assess Potential Risk",
      description: "Receive detailed insights into potential matches against a list of known or suspected individuals and entities. Our service analyzes the provided full name and other key information to help you assess risks effectively and make informed decisions.",
      badge: "New",
      buttonText: "Get Started",
    },
  ];
  

  return (
    <div className="container" style={{ marginTop: '3%' }}>
      {/* Welcome Message */}
      <div className="row-card bg-white border-left border-primary shadow mb-4">
        <div className="d-flex flex-column justify-content-start align-items-start p-4">
          <div>
            <h4 className="mb-3 text-start">
            <i className="fas fa-info fa-bold me-3"></i>
              Welcome Back, Murtadi</h4>
            <p className="mb-0 text-start">
              Get started now by creating an Application ID and explore all the demo services available on the dashboard. 
              Experience the ease and flexibility of trying out all our features firsthand.
            </p>
          </div>
          {/* Tombol di bawah teks */}
          <div className="d-flex flex-row mt-3">
            <button className="btn d-flex justify-content-center align-items-center me-2" style={{ backgroundColor: '#0542CC' }}>
                <i className="fas fa-plus text-white me-2"></i>
                <p className='text-white mb-0'>Create New App ID</p>
            </button>

            <button className="btn d-flex justify-content-center align-items-center me-2" style={{ backgroundColor: '#E2FBEA' }}>
                <p className='text-primary mb-0 fw-bold'>Read Our API Docs</p>
            </button>

          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm"> {/* Add shadow to the card */}
              <div className="card-body text-start">
                <h5 className="card-title d-flex justify-content-between align-items-center">
                  <span className="text-primary">{card.title}</span> {/* Make the title blue */}
                  <span className="badge bg-success">{card.badge}</span> {/* Green 'New' badge */}
                </h5>
                <h6 className="mb-3">{card.subtitle}</h6> {/* Subtitle below the title */}
                <p className="card-text">{card.description}</p> {/* Card description */}
                <a href="/" className="btn btn-link text-primary p-0 fw-bold">
                  {card.buttonText} {/* Link styled as a button */}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>

  );
}

export default Dashboard;
