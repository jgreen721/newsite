import React from 'react';
import { Navbar, Header, Carousel, Samples } from "./components"
import './Main.css'

const Main = () => {
    return (
        <div className="main-container">
            <div className="main-animate-container">
                <Navbar />
                <Header />
                <div className="main-container-content">
                    <Carousel />
                    <Samples />
                </div>
            </div>
        </div>
    );
};

export default Main;