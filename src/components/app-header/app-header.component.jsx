import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './app-header.styles.css';

const AppHeader = () => {
    return (
        <header className="app-header">
            <Link to="/">
                <Logo className="app-logo" />
            </Link>
            <span className="app-title">All Things React!</span>
        </header>
    );
};

export default AppHeader;
