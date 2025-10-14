import { useState } from "react"
import User from "./User";

function Example1(){
  const [count,setCount] = useState(0);
  function changeCount(){
    setCount(count+1)
  }

  const [display,setDisplay] =useState(true);

  // let userObject = {
  //   name:"TESTING NAME",
  //   age:"00",
  //   email:"test@test.com"
  // }

  let nameArray = ["x","y","z"]

    return(
      <div className="section">
       <h1>{count}</h1>
       <button onClick={changeCount}>Change name will appere here </button>
       <div>{count===0?<h5>Condition is 0</h5>:count===1?<h5>Condition is 1</h5>:count===2?<h5>Condition is 2</h5>:count===3?<h5>Condition is 3</h5>:<h5>No Condition</h5>}</div>
         
       <br/>
       <button onClick={()=>setDisplay(!display)}>Toggle</button>     
       {display?<User user={nameArray} />:null}       
       </div>
    )
}

export default Example1