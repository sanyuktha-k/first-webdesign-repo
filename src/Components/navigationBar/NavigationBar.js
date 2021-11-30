import React from 'react';
import './NavigationBar.scss';

const NavigationBar = () => {
    return (
        <nav>
            Navigation Bar
            <button className="login-button">LOGIN</button>
            <button className="signup-button">SIGNUP</button>
        </nav>
    )
}

export default NavigationBar;