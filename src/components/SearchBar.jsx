import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
   
    const searchWrapperStyle = {
        backgroundColor: '#000',
        padding: '5px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        width: '90%',
        margin: '0 auto',
        marginBottom: '10px',
    };

    const inputContainerStyle = {
        display: 'flex',
        width: '100%',
        borderRadius: '5%',
        overflow: 'hidden',
    };

    const searchInputStyle = {
        flex: 7,
        padding: '5px',
        border: 'none',
        borderRadius: '5%',
        outline: 'none',
        color: '#fff',
        width: '100%',
        backgroundColor: '#000',
    };

    const searchButtonStyle = {
        flex: 3,
        backgroundColor: '#000',
        border: 'none',
        borderRadius: '5%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px',
    };

    return (
        <div style={searchWrapperStyle}>
            <div style={inputContainerStyle}>
                {/* Added className here */}
                <input type="text" placeholder="Search..." style={searchInputStyle} className="search-input" />
                <button style={searchButtonStyle}>
                    <FontAwesomeIcon icon={faSearch} style={{ color: '#fff' }} />
                </button>
            </div>
            <style>
                {`
                    .search-input::placeholder {
                        color: #fff; /* White placeholder color */
                        opacity: 1; /* Firefox */
                    }

                    .search-input::-ms-input-placeholder { /* Edge 12 -18 */
                        color: #fff; /* White placeholder color */
                    }
                `}
            </style>
        </div>
    );
};

export default SearchBar;
