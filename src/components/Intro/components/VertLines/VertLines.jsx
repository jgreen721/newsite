import React, { useMemo } from 'react';
import './VertLines.css'

const VertLines = () => {

    const delays = ["1.4s", "1.2s", "1s", ".8s", ".6s", ".4s", ".2s", ".2s", ".4s", ".6s", ".8s", "1s", "1.2s", "1.4s"];


    const topVertLines = useMemo(() => {
        return Array.from({ length: 14 }, (_, idx) => {
            let colorPercent = Math.random() * 30 + 10;
            return {
                id: idx + 1,
                delay: delays[idx],
                color: `hsl(120,${colorPercent}%,50%)`
            }
        })
    }, []);


    const bottomVertLines = useMemo(() => {
        return Array.from({ length: 14 }, (_, idx) => {
            let colorPercent = Math.random() * 30 + 10;
            return {
                id: idx + 1,
                delay: delays[idx],
                color: `hsl(120,${colorPercent}%,50%)`
            }
        })
    }, []);

    return (
        <div className="vert-lines-container page-container">
            <div className="vert-lines-row top-vert-lines-row">
                {topVertLines.map(line => (
                    <div key={line.id} style={{ background: line.color, "--delay": line.delay }} className="vert-line"></div>
                ))}
            </div>
            <div className="vert-lines-row bottom-vert-lines-row">
                {bottomVertLines.map(line => (
                    <div key={line.id} style={{ background: line.color, "--delay": line.delay }} className="vert-line"></div>
                ))}
            </div>
        </div >
    );
};

export default VertLines;