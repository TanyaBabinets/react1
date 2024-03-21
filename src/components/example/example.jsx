import React, { useState } from 'react';

const Example = () => {
    ///счетчик видимый-невидимый
    const [visibleCounter, setVisibleCounter] = useState(true);
    const [i, setI] = useState(1);
    const [inputValue, setInputValue] = useState(2);
    const decrement = () => {
        setI(i - 1)
    }
    const toggleVisibleCounter = () => setVisibleCounter(!visibleCounter);
    const [arr, setArr] = useState([1, 2, 3]);
    const AddElement = () => {
       
        
      setArr([...arr, 4])
        console.log(arr);
    }
    return (
        <div>
            <div>
                <button onClick={AddElement}>ADD</button>
                {arr.join(', ')}
            </div>
            <button onClick={toggleVisibleCounter}>{visibleCounter ? "Hide" : "Show"}</button>

            {visibleCounter && (<div>
                <button onClick={decrement}>-</button>
                {i}
                <input type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={() => setI(i + +inputValue)}>+{inputValue}</button>
            </div>)}
        </div>
    );
}

export default Example;
