import React from 'react';
import {useState, useEffect} from 'react';
import bubbleSort from  '../algorithms/bubbleSort';
import './Visualizer.css';

const Visualizer = ({numBars, speed, algorithm, array, setArray}) => {

    const startSort = async () => {
        switch(algorithm){
            case 'bubbleSort':
                setArray(await bubbleSort(speed, setArray, speed))
                break
            default:
                console.error('There is an error!')
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