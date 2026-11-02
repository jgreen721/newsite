import React, { useRef, useEffect } from 'react';
import { useObserver } from '../../../../hooks/useObserver';
import './Samples.css'

const Samples = () => {
    const testRef = useRef();
    const { inView } = useObserver(testRef);


    return (
        <div className="samples-container">
            <h1>Samples</h1>
            <div ref={testRef} className={inView ? `test-element animate-in` : `test-element`}>
                <h3>SUPRISE! 😊</h3>
            </div>
        </div>
    );
};

export default Samples;