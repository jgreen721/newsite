import React from 'react';
import { BatesMotel } from "./components"
import './Header.css'

const Header = () => {
    return (
        <div className="page-container header-container">
            {/* <div className="house-cutout"></div>
            <h1>The Main Site</h1>
            <svg></svg> */}
            <BatesMotel />
        </div>
    );
};

export default Header;