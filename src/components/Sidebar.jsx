import React, { useEffect, useState } from 'react';
import feather from 'feather-icons';

function Sidebar({ isSidebarVisible }) {
    useEffect(() => {
        if (isSidebarVisible) {
            feather.replace();
        }
    }, [isSidebarVisible]);

    const sidebarStyle = {
        backgroundColor: '#ffffff',
        color: '#000000',
        height: '100vh', // Full height of viewport
        overflow: 'hidden', // Prevent scrolling
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        width: '250px', // Set a fixed width for the sidebar
        left: 0, // Align to the left
        top: 0,
        zIndex: 1000, // Ensure it stays above other content
    };

    const contentStyle = {
        overflowY: 'auto',
        flexGrow: 1,
        paddingLeft: '15px', // Adjust padding to prevent overlap with sidebar
    };

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const menuItemStyle = (isHovered) => ({
        color: isHovered ? '#ffffff' : '#000000',
        backgroundColor: isHovered ? '#0542CC' : 'transparent',
        padding: '10px',
        borderRadius: '5px',
    });

    const iconStyle = (isHovered) => ({
        color: isHovered ? '#ffffff' : '#000000',
        marginRight: '10px',
    });

    const menuItems = [
        { href: 'index.html', icon: 'sliders', text: 'Dashboard' },
        { href: 'pages-profile.html', icon: 'user', text: 'Profile' },
        { href: 'pages-sign-in.html', icon: 'log-in', text: 'Sign In' },
        { href: 'pages-sign-up.html', icon: 'user-plus', text: 'Sign Up' },
        { href: 'pages-blank.html', icon: 'book', text: 'Blank' },
        { href: 'ui-buttons.html', icon: 'square', text: 'Buttons' },
        { href: 'ui-forms.html', icon: 'check-square', text: 'Forms' },
        { href: 'ui-cards.html', icon: 'grid', text: 'Cards' },
        { href: 'ui-typography.html', icon: 'align-left', text: 'Typography' },
        { href: 'icons-feather.html', icon: 'coffee', text: 'Icons' },
        { href: 'charts-chartjs.html', icon: 'bar-chart-2', text: 'Charts' },
        { href: 'maps-google.html', icon: 'map', text: 'Maps' },
    ];

    return (
        <>
            {isSidebarVisible && (
                <nav id="sidebar" className="sidebar js-sidebar" style={sidebarStyle}>
                    <div className="sidebar-content js-simplebar" style={{ flexGrow: 1 }}>
                        <a className="sidebar-brand" href="index.html" style={menuItemStyle(false)}>
                            <span className="align-middle">AdminKit</span>
                        </a>

                        <ul className="sidebar-nav">
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="sidebar-item"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <a
                                        className="sidebar-link"
                                        href={item.href}
                                        style={menuItemStyle(hoveredIndex === index)}
                                    >
                                        <i
                                            className="align-middle"
                                            data-feather={item.icon}
                                            style={iconStyle(hoveredIndex === index)}
                                        ></i>
                                        <span className="align-middle">{item.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="sidebar-cta">
                            <div className="sidebar-cta-content" style={menuItemStyle(false)}>
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
