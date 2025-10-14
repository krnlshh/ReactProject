import { useState } from "react";

function EventPlan(){
    const [task,setTask] = useState([]);
    const handleEvent = (event) =>{
        console.log(event.target.value )
        if(event.target.checked){
            setTask([...task,event.target.value])
        }else{
            setTask(task.filter(task => task !== event.target.value))
        }
    }

    return(
        <div className="section">
            <hr/>
            <h5>Please select your events</h5>
            <input id="music" onChange={handleEvent} type="checkbox" value="music" /><label htmlFor="music">music</label><br></br>
            <input id="Food" onChange={handleEvent} type="checkbox" value="Food" /><label htmlFor="Food">Food</label><br></br>
            <input id="photography" onChange={handleEvent} type="checkbox" value="photography" /><label htmlFor="photography">photography</label><br></br>
            <input id="games"onChange={handleEvent} type="checkbox" value="games" /><label htmlFor="games">games</label><br></br>
            <input id="decorations" onChange={handleEvent} type="checkbox" value="decorations" /><label htmlFor="decorations">decorations</label><br></br>
            <ul>
                {task.map((task, index) => (<li key={index}>{task}</li>))}
            </ul>
        </div>



    )
}
export default EventPlan;