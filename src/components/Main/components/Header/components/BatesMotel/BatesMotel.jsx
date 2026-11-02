import React, { useMemo } from 'react';
import { Hotel } from "./components"
import './BatesMotel.css'

const BatesMotel = () => {

    const grass = useMemo(() => {
        let colors = ["rgb(10, 61, 10)", "rgb(104, 103, 21)", "rgb(111, 81, 29)"]
        return Array.from({ length: 50 }, (_, idx) => {
            return {
                id: idx + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                border: Math.random() > .5 ? "grass-blade-left" : "grass-blade-right",
                height: `${Math.random() * 225 + 155}px`,
                width: `${Math.random() * 165 + 35}px`,
                color: colors[Math.floor(Math.random() * 4)]
            }
        })
    }, []);
    return (
        <div className="bates-motel-scene">
            <div className="mansion-layer">
                <Hotel />
            </div>
            <div className="ground-layer">
                <div className="lamp left-side-lamp lamp-1">
                    <div className="lamp-top left-lamp-top">
                        <div className="lamp-shade-container">
                            <div className="lamp-shade"></div>
                            <div className="lamp-bulb"></div>
                        </div>
                    </div>
                    <div className="lamp-post"></div>
                </div>
                <div className="lamp left-side-lamp lamp-2">
                    <div className="lamp-top left-lamp-top">
                        <div className="lamp-shade-container">
                            <div className="lamp-shade"></div>
                            <div className="lamp-bulb"></div>
                        </div>
                    </div>
                    <div className="lamp-post"></div>
                </div>
                <div className="lamp left-side-lamp lamp-3">
                    <div className="lamp-top left-lamp-top">
                        <div className="lamp-shade-container">
                            <div className="lamp-shade"></div>
                            <div className="lamp-bulb"></div>
                        </div>
                    </div>
                    <div className="lamp-post"></div>
                </div>
                <div className="stairs">
                    <div className="staircase staircase-1">
                        <div style={{ "--offset-x": "-50px" }} className="stair-container">
                            <div className="stair"></div>
                        </div>
                        <div style={{ "--offset-x": "-40px" }} className="stair-container">
                            <div className="stair"></div>
                        </div>
                        <div style={{ "--offset-x": "-30px" }} className="stair-container">
                            <div className="stair"></div>
                        </div>
                        <div style={{ "--offset-x": "-20px" }} className="stair-container">
                            <div className="stair"></div>
                        </div>
                        <div style={{ "--offset-x": "-10px" }} className="stair-container">
                            <div className="stair"></div>
                        </div>
                        <div style={{ "--offset-x": "-0px" }} className="stair-container">
                            <div className="stair"></div>
                        </div>
                        <div style={{ "--offset-x": "10px" }} className="stair-container">
                            <div className="stair"></div>
                        </div>
                        <div style={{ "--offset-x": "15px" }} className="stair-container">
                            <div className="stair"></div>
                        </div>
                        <div style={{ "--offset-x": "0px" }} className="stair-container">
                            <div className="stair"></div>
                        </div>
                        <div style={{ "--offset-x": "-10px" }} className="stair-container">
                            <div className="stair"></div>
                        </div>
                        <div style={{ "--offset-x": "-15px" }} className="stair-container">
                            <div className="stair"></div>
                        </div>
                        <div style={{ "--offset-x": "-20px" }} className="stair-container">
                            <div className="stair"></div>
                        </div>
                        <div style={{ "--offset-x": "-25px" }} className="stair-container">
                            <div className="stair"></div>
                        </div>
                        <div style={{ "--offset-x": "-30px" }} className="stair-container">
                            <div className="stair"></div>
                        </div>
                        <div style={{ "--offset-x": "-35px" }} className="stair-container">
                            <div className="stair"></div>
                        </div>
                        <div style={{ "--offset-x": "-40px" }} className="stair-container">
                            <div className="stair"></div>
                        </div>
                    </div>
                </div>
                <div className="ground ground-1"></div>
                {grass.map(grassBlade => (
                    <div key={grassBlade.id} className={`grass-blade ${grassBlade.border}`} style={{ height: grassBlade.height, width: grassBlade.width, left: grassBlade.left, top: grassBlade.top, "--color": grassBlade.color }}></div>
                ))}
                <div className="dirt-hill"></div>

            </div>
        </div>
    );
};

export default BatesMotel;