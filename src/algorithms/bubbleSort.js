const bubbleSort = (array, setArray) => {
    const arr = [...array];

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            
                setArray([...arr]);
            }
        }
    }


}

export default bubbleSort;