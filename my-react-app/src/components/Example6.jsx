import { useState } from "react"

function Example6(){

    const [name, setInputValue1] = useState("");
    const [password, setInputValue2] = useState("");
    const [email, setInputValue3] = useState("");
    const handleReset = () =>{
        setInputValue1(""),
        setInputValue2(""),
        setInputValue3("")
    }

    return(
        <div>
        <input type="text" placeholder="name" onChange={(e) => {setInputValue1(e.target.value);console.log("Input 1:", e.target.value);}} value={name}/>
        <input type="text" placeholder="password" onChange={(e) => {setInputValue2(e.target.value);console.log("Input 2:", e.target.value);}} value={password}/>
        <input type="text" placeholder="email" onChange={(e) => {setInputValue3(e.target.value);console.log("Input 3:", e.target.value);}} value={email}/>
        {name}
        {password}
        {email}
        <button onClick={handleReset}>Reset</button>
        
        
        </div>
    )

}
export default Example6