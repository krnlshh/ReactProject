import { useState } from "react"
function Autogenerate(){
    const [inputValue,setInputValue] = useState("");


    return(<div>
    <h5>Get Input field value</h5>
    <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="enter here"/>   
    <div>{inputValue}</div> 
    <button onClick={() => setInputValue("")}>Reset </button>
    </div>)
}
export default Autogenerate