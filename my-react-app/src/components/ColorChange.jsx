import { useState } from 'react';
function ColorChange(){

    const[backgroundColor,setBackgroundColor] = useState("white");

    const changeColor = (color) => {setBackgroundColor(color); };
    return(
        <div className="section" style={{backgroundColor:backgroundColor}}>
            <h3>4. Background Color Changer</h3>
            <button onClick={() => changeColor('lightblue')}>Light Blue</button>
            <button onClick={() => changeColor('lightgreen')}>Light Green</button>
            <button onClick={() => changeColor('lightcoral')}>Light Coral</button>
            <button onClick={() => changeColor('lightyellow')}>Light Yellow</button>
            <button onClick={() => changeColor('white')}>Reset</button>
        </div>
    );

}
export default ColorChange;