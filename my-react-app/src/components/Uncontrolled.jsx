import { useRef } from "react";

function Uncontrolled(){
    const inputNameRef = useRef(null);
    const inputEmailRef = useRef(null);
    const inputPasswordRef = useRef(null);
    
    function handleSubmit(event){
        event.preventDefault();
        const UserRef = inputNameRef.current.value;
        const EmailRef = inputEmailRef.current.value;
        const passwordRef= inputPasswordRef.current.value;
        console.log("handleSubmit",UserRef,EmailRef,passwordRef);
    }
    
    return(
        <div>
            <hr/>
            <br/>
            <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" ref={inputNameRef}/>
                    <input type="email" placeholder="Email" ref={inputEmailRef}/>
                    <input type="password" placeholder="Password" ref={inputPasswordRef}/>
                    <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Uncontrolled