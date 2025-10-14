
import {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }; 
    const decrement = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    };
    function callOnce(){
        console.log("callOnce");
    }    
    return(
        <div className="section">
            <h3>1. Counter Example</h3>
            <div className="counter" id="counter">{count}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );


}


export default Counter
