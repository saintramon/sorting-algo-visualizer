import React from 'react';
import {useState, useEffect} from 'react';
import bubbleSort from  '../algorithms/bubbleSort';
import './Visualizer.css';

const Visualizer = ({numBars, speed, algorithm}) => {

    const [array, setArray] = useState([])

    const genInitialArray = () => {
        const arr = []; 
    
        for(let i = 0; i < numBars; i++){
            arr.push(Math.floor(Math.random() * 500) + 1) //Generates a number from 1 to 100
        }

        setArray(arr);
    };

    useEffect(() => {
        genInitialArray();
    }, [numBars]);

    const startSort = async () => {
        switch(algorithm){
            case 'bubbleSort':
                bubbleSort(array, setArray)
                break;
            
            default:
                console.error("There is something wrong");
        }
    }

    

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