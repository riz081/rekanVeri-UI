import React from 'react';

function Dashboard() {
  const cardData = [
    {
      title: 'Watchlist Screening',
      badge: 'New',
      description:
        'Receive detailed insights into potential matches against a list of known or suspected individuals and entities. Our service analyzes the provided full name and other key information to help you assess risks effectively and make informed decisions.',
      buttonText: 'Get Started',
    },
    // Tambahkan objek lain jika diperlukan
  ];

  return (
    <div className="container">
      {/* Welcome Message */}
      <div className="row-card bg-white border-left border-primary shadow mb-4">
        <div className="d-flex flex-column justify-content-start align-items-start p-4">
          <div>
            <h4 className="mb-3 text-start">
            <i className="fas fa-book-open me-1"></i>
              Welcome Back, Murtadi</h4>
            <p className="mb-0 text-start">
              Get started now by creating an Application ID and explore all the demo services available on the dashboard. 
              Experience the ease and flexibility of trying out all our features firsthand.
            </p>
          </div>
          {/* Tombol di bawah teks */}
          <div className="d-flex flex-row mt-3"> {/* Menggunakan flex-row untuk tombol */}
            <button className="btn btn-primary me-2">+ Create New App ID</button>
            <button className="btn btn-outline-secondary">Read Our API Docs</button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body text-start"> {/* Tambahkan text-start di sini */}
                <h5 className="card-title d-flex justify-content-between align-items-center">
                  {card.title}
                  <span className="badge bg-success">{card.badge}</span>
                </h5>
                <p className="card-text">{card.description}</p>
                <a href="/" className="btn btn-link p-0">
                  {card.buttonText}
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
