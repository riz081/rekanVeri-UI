import React, { useState } from 'react';

function Navbar({ toggleSidebar }) {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleToggleSidebar = () => {
      toggleSidebar();
      setIsSidebarVisible(!isSidebarVisible); // Toggle the sidebar visibility state
    };
  
    const navbarStyle = {
      backgroundColor: '#0542cc',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      marginLeft: isSidebarVisible ? '0' : '10px', // Adjust margin-left based on sidebar visibility
      transition: 'margin-left 0.3s ease', // Smooth transition when margin changes
    };
  
    const textStyle = {
      color: '#fff',
    };
  
    const iconStyle = {
      color: '#fff',
    };
  
    const indicatorStyle = {
      color: '#fff',
      backgroundColor: 'red',
      borderRadius: '50%',
      padding: '2px 6px',
      position: 'absolute',
      top: '-10px',
      right: '-10px',
      fontSize: '0.75rem',
    };
  

  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg" style={navbarStyle}>
      <a 
        className="sidebar-toggle js-sidebar-toggle" 
        onClick={handleToggleSidebar} 
        style={{ cursor: 'pointer' }}
      >
        <i className="align-self-center" data-feather="menu" style={iconStyle}></i>
      </a>

      <div className="navbar-nav me-auto">
        <a className="nav-link" href="/" style={textStyle}>Home</a>
        <a className="nav-link" href="/" style={textStyle}>Contact</a>
      </div>

      <div className="navbar-collapse collapse">
          <div style={{ position: 'fixed', top: '20px', right: '20px', display: 'flex', alignItems: 'center' }}>
              <ul className="navbar-nav navbar-align" style={{ display: 'flex', flexDirection: 'row' }}>
                  {/* Search Icon */}
                  <li className="nav-item">
                      <a className="nav-icon" href="/" style={{ paddingRight: '15px' }}>
                          <i className="align-middle" data-feather="search" style={iconStyle}></i>
                      </a>
                  </li>

                  {/* Messages Dropdown */}
                  <li className="nav-item dropdown">
                      <a className="nav-icon dropdown-toggle" href="/" id="messagesDropdown" data-bs-toggle="dropdown">
                          <div className="position-relative">
                              <i className="align-middle" data-feather="message-square" style={iconStyle}></i>
                          </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
                          <div className="dropdown-menu-header">
                              <div className="position-relative">
                                  4 New Messages
                              </div>
                          </div>
                          <div className="list-group">
                              {/* Message Items */}
                              <a href="/" className="list-group-item">
                                  <div className="row g-0 align-items-center">
                                      <div className="col-2">
                                          <img src="assets/img/avatars/avatar-5.jpg" className="avatar img-fluid rounded-circle" alt="Vanessa Tucker" />
                                      </div>
                                      <div className="col-10 ps-2">
                                          <div className="text-dark">Vanessa Tucker</div>
                                          <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                                          <div className="text-muted small mt-1">15m ago</div>
                                      </div>
                                  </div>
                              </a>
                              {/* Repeat for other messages */}
                          </div>
                          <div className="dropdown-menu-footer">
                              <a href="/" className="text-muted">Show all messages</a>
                          </div>
                      </div>
                  </li>

                  {/* Notifications Dropdown */}
                  <li className="nav-item dropdown">
                      <a className="nav-icon dropdown-toggle" href="/" id="alertsDropdown" data-bs-toggle="dropdown">
                          <div className="position-relative">
                              <i className="align-middle" data-feather="bell" style={iconStyle}></i>
                              <span className="indicator" style={indicatorStyle}>4</span>
                          </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                          <div className="dropdown-menu-header">
                              4 New Notifications
                          </div>
                          <div className="list-group">
                              {/* Notification Items */}
                              <a href="/" className="list-group-item">
                                  <div className="row g-0 align-items-center">
                                      <div className="col-2">
                                          <i className="text-danger" data-feather="alert-circle"></i>
                                      </div>
                                      <div className="col-10">
                                          <div className="text-dark">Update completed</div>
                                          <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                          <div className="text-muted small mt-1">30m ago</div>
                                      </div>
                                  </div>
                              </a>
                              {/* Repeat for other notifications */}
                          </div>
                          <div className="dropdown-menu-footer">
                              <a href="/" className="text-muted">Show all notifications</a>
                          </div>
                      </div>
                  </li>

                  {/* Expand Icon */}
                  <li className="nav-item">
                      <a className="nav-icon" href="/" style={{ paddingRight: '15px' }}>
                          <i className="align-middle" data-feather="maximize" style={iconStyle}></i>
                      </a>
                  </li>

                  {/* Apps Icon */}
                  <li className="nav-item dropdown">
                      <a className="nav-icon dropdown-toggle" href="/" id="appsDropdown" data-bs-toggle="dropdown" style={{ paddingRight: '15px' }}>
                          <i className="align-middle" data-feather="grid" style={iconStyle}></i>
                      </a>

                      {/* Dropdown Menu */}
                      <div className="dropdown-menu dropdown-menu-end" aria-labelledby="appsDropdown">
                          <a className="dropdown-item" href="pages-profile.html">
                              <i className="align-middle me-1" data-feather="user"></i> Profile
                          </a>
                          <a className="dropdown-item" href="/">
                              <i className="align-middle me-1" data-feather="pie-chart"></i> Analytics
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="index.html">
                              <i className="align-middle me-1" data-feather="settings"></i> Settings & Privacy
                          </a>
                          <a className="dropdown-item" href="/">
                              <i className="align-middle me-1" data-feather="help-circle"></i> Help Center
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="/">Log out</a>
                      </div>
                  </li>
              </ul>
          </div>
      </div>

    </nav>
  );
}

export default Navbar;
