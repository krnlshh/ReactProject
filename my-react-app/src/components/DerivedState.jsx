import { useState } from "react";

const DerivedState = () =>{

    const [user,setUser] = useState("");
    const [users,setUsers] = useState([]);

    const addUser = () =>{
        setUsers([...users,user]);
        setUser("");
    } 

    
    return(
    <div>
        <hr/>
        <br/>
        <h5>Total Users: {users.length}</h5>
        <h5>Last User: {users[users.length-1]}</h5>
        <h5>Unique Users: {new Set(users).size}</h5>
        <hr/>
        <br/>
        <input value={user} onChange={(e)=>setUser(e.target.value)} type="text" placeholder="Please enter User"/>
        <button onClick={addUser} className="button button-primary">Add</button>
        <hr/>
        {users.map((data, index) => (
            <li key={index}>{data}</li>  // ✅ Return JSX
        ))}
    </div>
    )


} 
export default DerivedState