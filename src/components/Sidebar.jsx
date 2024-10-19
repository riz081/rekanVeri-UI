import React, { useEffect, useState } from 'react';
import feather from 'feather-icons';

function Sidebar({ isSidebarVisible }) {
    useEffect(() => {
        // Initialize Feather Icons only if the sidebar is visible
        if (isSidebarVisible) {
            feather.replace();
        }
    }, [isSidebarVisible]);

    // Inline style for the sidebar
    const sidebarStyle = {
        backgroundColor: '#ffffff', // White background
        color: '#000000',
    };

    // Function to handle hover
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const menuItemStyle = (isHovered) => ({
        color: isHovered ? '#ffffff' : '#000000', // Change text color on hover
        backgroundColor: isHovered ? '#0542CC' : 'transparent', // Background change on hover
        padding: '10px',
        borderRadius: '5px', // Smooth button-like effect
    });

    const iconStyle = (isHovered) => ({
        color: isHovered ? '#ffffff' : '#000000',
        marginRight: '10px', // Space between icon and text
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
                    <div className="sidebar-content js-simplebar">
                        <a className="sidebar-brand" href="index.html" style={menuItemStyle(false)}>
                            <span className="align-middle">AdminKit</span>
                        </a>

                        <ul className="sidebar-nav">
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="sidebar-item"
                                    onMouseEnter={() => setHoveredIndex(index)} // Change state on hover
                                    onMouseLeave={() => setHoveredIndex(null)} // Reset state after hover
                                >
                                    <a
                                        className="sidebar-link"
                                        href={item.href}
                                        style={menuItemStyle(hoveredIndex === index)}
                                    >
                                        <i
                                            className="align-middle"
                                            data-feather={item.icon}
                                            style={iconStyle(hoveredIndex === index)} // Apply hover style to icon
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
