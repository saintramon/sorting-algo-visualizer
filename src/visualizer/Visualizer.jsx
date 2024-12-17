import React from 'react';
import {useState, useEffect} from 'react';
import './Visualizer.css'

const Visualizer = ({numBars, speed, algorithm}) => {

    const [array, setArray] = useState([])

    const genInitialArray = () => {
        const arr = []; 
    
        for(let i = 0; i < numBars; i++){
            arr.push(Math.floor(Math.random() * 100) + 1) //Generates a number from 1 to 100
        }

        setArray(arr);
    };

    useEffect(() => {
        genInitialArray();
    }, [numBars]);
    

    return(
        <div className='array-container'>
            {array.map((value, index) => (
                <div key={index} className='array-bar' style={{
                    height: `${value}px`
                }}>
                </div>
            ))}
        </div>
    );
}

export default Visualizer;