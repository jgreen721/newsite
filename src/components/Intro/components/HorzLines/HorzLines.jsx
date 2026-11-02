import React, { useMemo } from 'react';
import './HorzLines.css'

const HorzLines = () => {

    const horzLines = useMemo(() => {
        return Array.from({ length: 30 }, (_, idx) => {
            let colorPercent = Math.random() * 30 + 10;
            return {
                id: idx + 1,
                delay: `${Math.random()}s`,
                color: `hsl(120,${colorPercent}%,50%)`
            }
        })
    }, []);
    return (
        <div className="horz-lines-container">
            {horzLines.map(line => (
                <div key={line.id} style={{ "--delay": line.delay, background: line.color }} className="horz-line"></div>
            ))}
        </div>
    );
};

export default HorzLines;