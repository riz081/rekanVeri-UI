import React from 'react';

function Navbar({ toggleSidebar }) {
  const navbarStyle = {
    backgroundColor: '#0542cc', // Blue background
  };

  const textStyle = {
    color: '#fff', // #fff text
  };

  const iconStyle = {
    color: '#fff', // #fff icons
  };

  const indicatorStyle = {
    color: '#fff', // #fff text for indicators
    backgroundColor: 'red', // Red background for notification indicator
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
        onClick={toggleSidebar} 
        style={{ cursor: 'pointer' }}
      >
        <i className="align-self-center" data-feather="menu" style={iconStyle}></i>
      </a>

      <div className="navbar-nav me-auto">
        <a className="nav-link" href="/" style={textStyle}>Home</a>
        <a className="nav-link" href="/" style={textStyle}>Contact</a>
      </div>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">

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
                    <a href="/" className="list-group-item">
                    <div className="row g-0 align-items-center">
                        <div className="col-2">
                        <img src="assets/img/avatars/avatar-2.jpg" className="avatar img-fluid rounded-circle" alt="William Harris" />
                        </div>
                        <div className="col-10 ps-2">
                        <div className="text-dark">William Harris</div>
                        <div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
                        <div className="text-muted small mt-1">2h ago</div>
                        </div>
                    </div>
                    </a>
                    <a href="/" className="list-group-item">
                    <div className="row g-0 align-items-center">
                        <div className="col-2">
                        <img src="assets/img/avatars/avatar-4.jpg" className="avatar img-fluid rounded-circle" alt="Christina Mason" />
                        </div>
                        <div className="col-10 ps-2">
                        <div className="text-dark">Christina Mason</div>
                        <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
                        <div className="text-muted small mt-1">4h ago</div>
                        </div>
                    </div>
                    </a>
                    <a href="/" className="list-group-item">
                    <div className="row g-0 align-items-center">
                        <div className="col-2">
                        <img src="assets/img/avatars/avatar-3.jpg" className="avatar img-fluid rounded-circle" alt="Sharon Lessman" />
                        </div>
                        <div className="col-10 ps-2">
                        <div className="text-dark">Sharon Lessman</div>
                        <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
                        <div className="text-muted small mt-1">5h ago</div>
                        </div>
                    </div>
                    </a>
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
                    <a href="/" className="list-group-item">
                    <div className="row g-0 align-items-center">
                        <div className="col-2">
                        <i className="text-warning" data-feather="bell"></i>
                        </div>
                        <div className="col-10">
                        <div className="text-dark">Lorem ipsum</div>
                        <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                        <div className="text-muted small mt-1">2h ago</div>
                        </div>
                    </div>
                    </a>
                    <a href="/" className="list-group-item">
                    <div className="row g-0 align-items-center">
                        <div className="col-2">
                        <i className="text-primary" data-feather="home"></i>
                        </div>
                        <div className="col-10">
                        <div className="text-dark">Login from 192.186.1.8</div>
                        <div className="text-muted small mt-1">5h ago</div>
                        </div>
                    </div>
                    </a>
                    <a href="/" className="list-group-item">
                    <div className="row g-0 align-items-center">
                        <div className="col-2">
                        <i className="text-success" data-feather="user-plus"></i>
                        </div>
                        <div className="col-10">
                        <div className="text-dark">New connection</div>
                        <div className="text-muted small mt-1">Christina accepted your request.</div>
                        <div className="text-muted small mt-1">14h ago</div>
                        </div>
                    </div>
                    </a>
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



          {/* Profile Dropdown */}
          {/* <li className="nav-item dropdown">
            <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="/" data-bs-toggle="dropdown">
              <i className="align-middle" data-feather="settings" style={iconStyle}></i>
            </a>
            <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="/" data-bs-toggle="dropdown">
              <img src="assets/img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" /> 
              <span style={textStyle}>Charles Hall</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="pages-profile.html"><i className="align-middle me-1" data-feather="user"></i> Profile</a>
              <a className="dropdown-item" href="/"><i className="align-middle me-1" data-feather="pie-chart"></i> Analytics</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="index.html"><i className="align-middle me-1" data-feather="settings"></i> Settings & Privacy</a>
              <a className="dropdown-item" href="/"><i className="align-middle me-1" data-feather="help-circle"></i> Help Center</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">Log out</a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
