import React from "react";
import { useState } from "react";
import './Controls.css'

const Controls = ({ numBars, setNumBars, speed, setSpeed, onStart }) => {

    const handleSetNumBars = (e) => {
        setNumBars(e.target.value);
    }

    const handleSetSpeed = (e) => {
        setSpeed(e.target.value);
    }

    return(
        <div className="controls-container">
            <div className="bars-slider">
                <label>Number of Bars: {numBars}</label>
                <input 
                type="range"
                min="5"
                max="100"
                value={numBars}
                onChange={handleSetNumBars}
                />
            </div>

            <div className="speed-slider">
                <label>Animation Speed: {speed} ms</label>
                <input 
                type="range"
                min="1"
                max="100"
                value={speed}
                onChange={handleSetSpeed} 
                />
            </div>

            <div className="start-button">
                <button onClick={() => onStart(numBars, speed)}>Start</button>
            </div>
        </div>
    );
}

export default Controls;