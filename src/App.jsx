import React, { useState, useEffect } from 'react';
import Visualizer from './visualizer/Visualizer';
import Controls from './controls/Controls';
import './App.css'

const App = () => {
    const [numBars, setNumBars] = useState(5);
    const [speed, setSpeed] = useState(1);
    const [algorithm, setAlgorithm] = useState('bubbleSort');

    const title = useEffect(() => {
        document.title = "Sorting Visualizer"
    }, [] );

    const startVisualization = (numBars, speed, algorithm) => {
        setNumBars(numBars);
        setSpeed(speed);
        setAlgorithm(algorithm)
    }

    return(
        <>
            <Visualizer numBars={numBars} speed={speed} algorithm="bubbleSort"/>
            <Controls 
                numBars={numBars} 
                setNumBars={setNumBars}
                speed={speed} 
                setSpeed={setSpeed}      
                onStart={startVisualization} 
            />
        </>
    );
}

export default App;
