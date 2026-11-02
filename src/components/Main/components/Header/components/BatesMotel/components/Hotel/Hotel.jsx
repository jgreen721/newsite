import React from 'react';
import './Hotel.css'

const Hotel = () => {
    return (
        <div>
            <div className="mansion-container">
                {/* LEFT SIDE  */}
                <div className="mansion-side left-mansion-side">
                    <div className="left-mansion-side-roof">
                        <div className="roof-shadow"></div>
                    </div>
                    <div className="left-mansion-side-house">
                        <div className="left-house-shadow"></div>
                        <div className="window left-side-window">
                            <div className="center-window-pane"></div>
                        </div>
                        <div className="window left-side-window">
                            <div className="center-window-pane"></div>
                        </div>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="mansion-side right-mansion-side">
                    <div className="right-mansion-side-roof">
                        <div className="roof-shadow"></div>
                    </div>
                    <div className="right-mansion-side-house">
                        <div className="right-house-shadow"></div>
                        <div className="window left-side-window">
                            <div className="center-window-pane"></div>
                        </div>
                        <div className="window left-side-window">
                            <div className="center-window-pane"></div>
                        </div>
                    </div>
                </div>

                {/* FRONT SIDE  */}

                <div className="mansion-side mansion-front">
                    <div className="mansion-front-roof">
                        <div className="roof-shadow"></div>
                    </div>
                    <div className="mansion-front-house">
                        <div className="front-house-shadow"></div>
                        {/* FRONT HOUSE WINDOWS  */}
                        <div className="windows">
                            <div className="window left-side-window">
                                <div className="center-window-pane"></div>
                            </div>
                            <div className="window left-side-window">
                                <div className="center-window-pane"></div>
                            </div>
                        </div>
                        <div className="windows">
                            <div className="window left-side-window">
                                <div className="center-window-pane"></div>
                            </div>
                            <div className="window left-side-window">
                                <div className="center-window-pane"></div>
                            </div>
                        </div>

                        {/* FRONT-HOUSE-NOSE */}
                        <div className="nose-section">
                            {/* <div className="nose-side nose-side-left">
                                <div className="nose-roof"></div>
                                <div className="tan-trim"></div>
                                <div className="nose-house"></div>
                                <div className="nose-small-roof"></div> 
                                <div className="nose-house"></div>
                            </div> */}
                            {/* <div className="nose-side nose-side-right">
                                <div className="nose-roof"></div>
                                <div className="tan-trim"></div>
                                <div className="nose-house"></div>
                                <div className="nose-small-roof"></div>
                                <div className="nose-house"></div>
                            </div> */}
                            <div className="nose-side nose-side-front">
                                <div className="front-side-roof-container">
                                    <div className="front-side-roof-top"></div>
                                    <div className="front-side-roof">
                                        <div className="center-window">
                                            <div className="vert-frame"></div>
                                            <div className="horz-frame"></div>
                                        </div>
                                    </div>
                                    <div className="front-side-roof-trim"></div>
                                </div>
                                <div className="nose-side-front-trim-container">
                                    <div className="front-trim-section">
                                        <div className="trim-column"></div>
                                        <div className="trim-column"></div>
                                    </div>
                                    <div className="front-trim-section">
                                        <div className="trim-column"></div>
                                        <div className="trim-column"></div>
                                    </div>
                                </div>
                                {/* <div className="nose-house"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;