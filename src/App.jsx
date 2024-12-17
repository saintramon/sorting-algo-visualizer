import React, { useState } from 'react';
import Visualizer from './visualizer/Visualizer';
import Controls from './controls/Controls';

const App = () => {
    const [numBars, setNumBars] = useState(5);
    const [speed, setSpeed] = useState(1);

    const startVisualization = (numBars, speed) => {
        setNumBars(numBars);
        setSpeed(speed);
    }

    return(
        <>
            <Visualizer numBars={numBars} speed={speed}/>
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
