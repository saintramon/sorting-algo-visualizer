import React, { useState, useEffect } from 'react';
import Visualizer from './visualizer/Visualizer';
import Controls from './controls/Controls';
import bubbleSort from './algorithms/bubbleSort'
import './App.css'

const App = () => {
    const [numBars, setNumBars] = useState(5);
    const [speed, setSpeed] = useState(1);
    const [algorithm, setAlgorithm] = useState('bubbleSort');
    const [array, setArray] = useState([]);

    const title = useEffect(() => {
        document.title = "Sorting Visualizer"
    }, [] );

    const genInitialArray = () => {
        const arr = []; 
    
        for(let i = 0; i < numBars; i++){
            arr.push(Math.floor(Math.random() * 500) + 1) //Generates a number from 1 to 100
        }

        setArray(arr);
    };

    useEffect(() => {
        genInitialArray();
    }, [numBars])

    const startVisualization = () => {
        switch (algorithm) {
            case 'bubbleSort':
                bubbleSort(array, setArray, speed);
                break;
            default:
                console.error("There is something wrong");
        }
    };

    return(
        <>
            <Visualizer numBars={numBars} speed={speed} algorithm="bubbleSort" array={array} setArray={setArray}/>
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
