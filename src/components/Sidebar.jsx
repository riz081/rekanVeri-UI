import React, { useEffect, useState } from 'react';
import feather from 'feather-icons';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ isSidebarVisible }) {
    const location = useLocation(); // Get current path

    useEffect(() => {
        if (isSidebarVisible) {
            feather.replace();
        }
    }, [isSidebarVisible]);

    const sidebarStyle = {
        backgroundColor: '#ffffff',
        color: '#000000',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        width: '250px',
        left: 0,
        top: 0,
        zIndex: 1000,
    };

    const contentStyle = {
        overflowY: 'auto',
        flexGrow: 1,
        paddingLeft: '15px',
    };

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const menuItems = [
        { href: '/', icon: 'sliders', text: 'Dashboard' },
        { href: '/profile', icon: 'user', text: 'Profile' },
        { href: '/signin', icon: 'log-in', text: 'Sign In' },
        { href: '/signup', icon: 'user-plus', text: 'Sign Up' },
        { href: '/blank', icon: 'book', text: 'Blank' },
        { href: '/buttons', icon: 'square', text: 'Buttons' },
        { href: '/forms', icon: 'check-square', text: 'Forms' },
        { href: '/cards', icon: 'grid', text: 'Cards' },
        { href: '/typography', icon: 'align-left', text: 'Typography' },
        { href: '/icons', icon: 'coffee', text: 'Icons' },
        { href: '/charts', icon: 'bar-chart-2', text: 'Charts' },
        { href: '/maps', icon: 'map', text: 'Maps' },
    ];

    const isActive = (href) => location.pathname === href; // Check if the link is active

    const menuItemStyle = (isHovered, active) => ({
        color: active ? '#ffffff' : isHovered ? '#ffffff' : '#000000',
        backgroundColor: active ? '#0542CC' : isHovered ? '#0542CC' : 'transparent',
        padding: '10px',
        borderRadius: '5px',
    });

    const iconStyle = (isHovered, active) => ({
        color: active ? '#ffffff' : isHovered ? '#ffffff' : '#000000',
        marginRight: '10px',
    });

    return (
        <>
            {isSidebarVisible && (
                <nav id="sidebar" className="sidebar js-sidebar" style={sidebarStyle}>
                    <div className="sidebar-content js-simplebar" style={{ flexGrow: 1 }}>
                        <Link className="sidebar-brand" to="/" style={menuItemStyle(false, false)}>
                            <span className="align-middle">AdminKit</span>
                        </Link>

                        <ul className="sidebar-nav">
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="sidebar-item"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <Link
                                        className="sidebar-link"
                                        to={item.href}
                                        style={menuItemStyle(hoveredIndex === index, isActive(item.href))}
                                    >
                                        <i
                                            className="align-middle"
                                            data-feather={item.icon}
                                            style={iconStyle(hoveredIndex === index, isActive(item.href))}
                                        ></i>
                                        <span className="align-middle">{item.text}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="sidebar-cta">
                            <div className="sidebar-cta-content" style={menuItemStyle(false, false)}>
                                <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
                                <div className="mb-3 text-sm">
                                    Are you looking for more components? Check out our premium version.
                                </div>
                                <div className="d-grid">
                                    <a href="upgrade-to-pro.html" className="btn btn-primary">Upgrade to Pro</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
}

export default Sidebar;
    