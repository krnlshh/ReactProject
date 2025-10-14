import { useState } from 'react';
function Greeting(){
    const [myname,setName] = useState('');
    const [greeting,setGreeting] = useState('Enter name above');
    const sayHello = () => {
        if(myname.trim() === ''){setGreeting("Please enter name ")}
         setGreeting(`Hello, ${myname}! Welcome to our page!`);
        
    }
    return(
        <div className="section">
            <h3>3. Personal Greeting</h3>
            <input type="text" id="nameInput" value={myname} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
            <button onClick={sayHello} >Say Hello</button>
            <div className="result" id="greeting">{greeting}</div>
        </div>
    )
}
export default Greeting