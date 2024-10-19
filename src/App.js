import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

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
                                <Route path="/" element={<Dashboard />} />
                            </Routes>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
