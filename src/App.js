import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import { Applications, Dashboard, Started } from './screens/Home';
import { CreateApps } from './pages/Create';

function App() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <Router>
            <div className="wrapper" style={{ display: 'flex', minHeight: '100vh' }}>
                <Sidebar isSidebarVisible={isSidebarVisible} />
                <div className="main" style={{ marginLeft: isSidebarVisible ? '250px' : '0', transition: 'margin-left 0.3s' }}>
                    <Navbar toggleSidebar={toggleSidebar} />
                    <main className="content">
                        <div className="container-fluid p-0">
                            <Routes>
                                <Route path="/" element={<Navigate to="/started" />} />
                                <Route path="/started" element={<Started />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/application" element={<Applications />} />
                                <Route path="/createApps" element={<CreateApps />} />
                            </Routes>
                        </div>
                    </main>
                    {/* <Footer /> */}
                </div>
            </div>
        </Router>
    );
}

export default App;
