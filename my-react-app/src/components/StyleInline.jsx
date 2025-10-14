import { useState } from "react";
function StyleInline(){
    const [textColor,setTextColor] = useState('white');
    const styleColor = {
        backgroundColor : 'red'
    }
    return (
        <div>
            <div style={{color:textColor, ...styleColor}}>test</div>
            <button  onClick={() => setTextColor('Blue')}>Change Color</button>
        </div>
    )
}
export default StyleInline