import { useState } from 'react';
function Calculator(){

    const [num1,setNum1] = useState('');
    const [num2,setNum2] = useState('');
    const [result,setResult] = useState('result is here');

    const add = () => {
        const sum = parseFloat(num1) + parseFloat(num2);       
        setResult(`${num1} + ${num2} = ${sum}`);
    };

    const subtract = () => {
        const sum = parseFloat(num1) - parseFloat(num2);       
        setResult(`${num1} - ${num2} = ${sum}`);
    };

    const multiply = () => {
        const sum = parseFloat(num1) * parseFloat(num2);       
        setResult(`${num1} * ${num2} = ${sum}`);
    };

    const divide = () => {
        if(parseFloat (num2) === 0){
            setResult("can not devide by zero");
        }else{
            const quotient = parseFloat(num1) / parseFloat(num2); 
            setResult(`${num1} ÷ ${num2} = ${quotient}`);    
        }
    };

    return(
        <div className="section">
            <h3>2. Simple Calculator</h3>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} id="num1" placeholder="First number"/>
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} id="num2" placeholder="Second number"/>
            <br/>
            <button onClick={add}>Add</button>
            <button onClick={subtract}>Subtract</button>
            <button onClick={multiply}>Multiply</button>
            <button onClick={divide}>Divide</button>
            <div className="result" id="calcResult">Result will appear here</div>
            <div className='result'>{result}</div>
        </div>
    )


}

export default Calculator