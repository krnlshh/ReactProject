import { useEffect, useState } from "react"


function Clock(){
    
    const [currentTime,setCurrentTime] = useState(0);
    const [color,setColor] = useState("black");



    useEffect(() =>{
        setInterval(() => { 
        setCurrentTime(new Date().toLocaleTimeString())
    },1000); [] })

    return(
    <div>
    <h4>Select color</h4>    
    <select onChange={(e)=>setColor(e.target.value)} defaultValue={"black"}>
        <option>Red</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Yellow</option>
    </select>

<h5 style={{color: color}}>{currentTime}</h5>

        <h5>here is color : {color}</h5>
    
    </div>)
}
export default Clock