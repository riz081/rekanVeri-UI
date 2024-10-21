import React, { useEffect, useState } from 'react';
import feather from 'feather-icons';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faChevronDown, 
    faChevronLeft,
    faTachometerAlt, 
    faUser, 
    faPhone, 
    faIdCard, 
    faList, 
    faFile,
} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar';
import {
    ProfileImage,
    Logo
} from '../assets/img';

function Sidebar({ isSidebarVisible }) {
    const location = useLocation();
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [deepExpandedIndex, setDeepExpandedIndex] = useState(null);

    useEffect(() => {
        if (isSidebarVisible) {
            feather.replace();
        }
    }, [isSidebarVisible]);

    const iconMap = {
        tachometer: faTachometerAlt,
        user: faUser,
        phone: faPhone,
        'id-card': faIdCard,
        list: faList,
        file: faFile,
    };

    const menuItems = [
        {
            href: '/started',
            icon: 'tachometer',
            text: 'Home',
            subItems: [
                { href: '/started', text: 'Getting Started' },
                { href: '/dashboard', text: 'Dashboard' },
                { href: '/application', text: 'Application' },
            ],
        },
        {
            href: '/faceRecognition',
            icon: 'user',
            text: 'Biometric',
            subItems: [
                {
                    href: '/faceRecognition',
                    text: 'Face Recognition',
                    subItems: [
                        { href: '/faceRecognition/demo', text: 'Demo' },
                        { href: '/faceRecognition/summary', text: 'Summary' },
                        { href: '/faceRecognition/transaction', text: 'Transaction' },
                    ],
                },
                { 
                    href: '/ocrKtp', 
                    text: 'OCR KTP',
                    subItems: [
                        { href: '/ocrKtp/demo', text: 'Demo' },
                        { href: '/ocrKtp/summary', text: 'Summary' },
                        { href: '/ocrKtp/transaction', text: 'Transaction' },
                    ],
                },
                { 
                    href: '/ocrNpwp', 
                    text: 'OCR NPWP',
                    subItems: [
                        { href: '/ocrNpwp/demo', text: 'Demo' },
                        { href: '/ocrNpwp/summary', text: 'Summary' },
                        { href: '/ocrNpwp/transaction', text: 'Transaction' },
                    ],
                },
                { 
                    href: '/ocrSim', 
                    text: 'OCR SIM',
                    subItems: [
                        { href: '/ocrSim/demo', text: 'Demo' },
                        { href: '/ocrSim/summary', text: 'Summary' },
                        { href: '/ocrSim/transaction', text: 'Transaction' },
                    ],
                },
            ],
        },
        {
            href: '/phone',
            icon: 'phone',
            text: 'Phone Number',
            subItems: [],
        },
        {
            href: '/identity',
            icon: 'id-card',
            text: 'Identity',
            subItems: [],
        },
        {
            href: '/watchlist',
            icon: 'list',
            text: 'Watchlist',
            subItems: [],
        },
        {
            href: '/file',
            icon: 'file',
            text: 'File',
            subItems: [],
        },
    ];

    const isActive = (href) => location.pathname === href || 
        (href === '/application' && location.pathname === '/createApps');
    const toggleDropdown = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    const toggleDeepDropdown = (itemIndex, subItemIndex) => {
        setDeepExpandedIndex(deepExpandedIndex === `${itemIndex}-${subItemIndex}` ? null : `${itemIndex}-${subItemIndex}`);
    };
    
    const sidebarStyle = {
        backgroundColor: '#ffffff',
        color: '#000000',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        width: '250px',
        boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.1)',
    };

    const menuItemStyle = (active) => ({
        color: active ? '#ffffff' : '#000000',
        backgroundColor: active ? '#0542CC' : '#8be8ab',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 10px',
    });
     
    const subMenuItemStyle = (active) => ({
        color: active ? '#0542CC' : '#000000',
        backgroundColor: active ? '#e6f7ff' : 'transparent',
        padding: '8px 15px',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        fontWeight: active ? '600' : 'normal',
    });
    
    const sidebarBrandStyle = {
        padding: '10px 20px',
        margin: '0 10px',
        fontWeight: 'bold',
        fontSize: '18px',
        color: '#0542CC',
        justifyContent: 'center',
    };

    const logoStyle = {
        width: '40px',
        height: 'auto',
        marginRight: '10px',
    };

    const dividerStyle = (width = '100%', color = '#000') => ({
        height: '1px',
        backgroundColor: color,
        width: width,
        margin: '10px auto',
    });

    const profileContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', 
        padding: '3px',
        width: '100%',
        justifyContent: 'start',
        margin: '0 0 0 10%',
    };
    
    
    const profileImageStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '10px',
    };
    
    const profileNameStyle = {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '14px',
    };
    
    

    return (
        isSidebarVisible && (
            <nav id="sidebar" className="sidebar" style={sidebarStyle}>
                <div className="sidebar-content" style={{ flexGrow: 1 }}>
                    <Link className="sidebar-brand" to="/dashboard" style={sidebarBrandStyle}>
                        <img src={Logo} alt="Logo" style={logoStyle} />
                        <span className="align-middle">RekanVeri</span>
                    </Link>

                    <div style={dividerStyle('100%', '#000')}></div>

                    <div style={profileContainerStyle}>
                        <img src={ProfileImage} alt="Profile" style={profileImageStyle} />
                        <span style={profileNameStyle}>John Doe</span>
                    </div>


                    <div style={dividerStyle('95%', 'blue')}></div>

                    <SearchBar />

                    <ul className="sidebar-nav">
                        {/* Menu Item */}
                        {menuItems.map((item, index) => {
                            const isItemActive = isActive(item.href) || item.subItems.some(subItem =>
                                isActive(subItem.href) || subItem.subItems?.some(deepSubItem => isActive(deepSubItem.href))
                            );
                            return (
                                <li key={index} className="sidebar-item">
                                    <div
                                        onClick={() => toggleDropdown(index)}
                                        style={menuItemStyle(isItemActive)}
                                        className="sidebar-link"
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <FontAwesomeIcon 
                                                icon={iconMap[item.icon]}
                                                style={{ color: isItemActive ? '#fff' : '#63806E' }} 
                                                className="align-middle" 
                                            />
                                            <span className="align-middle">{item.text}</span>
                                        </div>
                                        {item.subItems.length > 0 && (
                                            <FontAwesomeIcon
                                                icon={expandedIndex === index ? faChevronDown : faChevronLeft}
                                                style={{ marginLeft: 'auto', color: isItemActive ? '#ffffff' : '#000000' }}
                                            />
                                        )}
                                    </div>
                                    {/* Sub Menu Item */}
                                    {expandedIndex === index && item.subItems.length > 0 && (
                                        <ul className="sidebar-dropdown" style={{ marginLeft: '20px' }}>
                                            {item.subItems.map((subItem, subIndex) => {
                                                const isSubItemActive = isActive(subItem.href) || subItem.subItems?.some(deepSubItem => isActive(deepSubItem.href));
                                                return (
                                                    <li key={subIndex} className="sidebar-subitem" style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => toggleDeepDropdown(index, subIndex)}>
                                                            <div style={{
                                                                width: '10px',
                                                                height: '10px',
                                                                borderRadius: '50%',
                                                                border: isSubItemActive ? 'none' : '2px solid #0542CC',
                                                                backgroundColor: isSubItemActive ? '#0542CC' : 'transparent',
                                                                marginRight: '10px',
                                                            }}></div>
                                                            <Link className="sidebar-link" to={subItem.href} style={subMenuItemStyle(isSubItemActive)}>
                                                                {subItem.text}
                                                            </Link>
                                                            {subItem.subItems && subItem.subItems.length > 0 && (
                                                                <FontAwesomeIcon 
                                                                    icon={deepExpandedIndex === `${index}-${subIndex}` ? faChevronDown : faChevronLeft}
                                                                    style={{ marginLeft: 'auto', marginRight: '3vh' }}
                                                                />
                                                            )}
                                                        </div>
                                                        {/* Deep Sub Menu Item */}
                                                        {deepExpandedIndex === `${index}-${subIndex}` && subItem.subItems?.length > 0 && (
                                                            <ul className="deep-sidebar-dropdown" style={{ marginLeft: '20px' }}>
                                                                {subItem.subItems.map((deepSubItem, deepSubIndex) => {
                                                                    const isDeepSubItemActive = isActive(deepSubItem.href);
                                                                    return (
                                                                        <li key={deepSubIndex} className="sidebar-deep-subitem" style={{ display: 'flex', alignItems: 'center' }}>
                                                                            <div style={{
                                                                                width: '10px',
                                                                                height: '10px',
                                                                                borderRadius: '50%',
                                                                                border: isDeepSubItemActive ? '2px solid #0542CC' : '2px solid #38453D',
                                                                                backgroundColor: isDeepSubItemActive ? '#ffffff' : 'transparent',
                                                                                marginRight: '10px',
                                                                            }}></div>
                                                                            <Link className="sidebar-link" to={deepSubItem.href} style={subMenuItemStyle(isDeepSubItemActive)}>
                                                                                {deepSubItem.text}
                                                                            </Link>
                                                                        </li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        )
    );
}

export default Sidebar;
