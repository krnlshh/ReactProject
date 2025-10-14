import { useRef } from "react"

function UserRef(){

    const inputRef = useRef(null);
    function inputHandler(){
        inputRef.current.focus(UserRef);
        inputRef.current.placeholder="";
        inputRef.current.value=null;
        inputRef.current.style.color="red";
    }
    function inputHandlerToggle(){
        if(inputRef.current.style.display === "none"){
            inputRef.current.style.display = "block";
        }else{
            inputRef.current.style.display = "none";
        }
    }
  
    return(
    <div>
        <hr/>
       <input placeholder="Please Enter" ref={inputRef}/>
       <button onClick={inputHandler}>Handle Input</button>
       <button onClick={inputHandlerToggle} >Toggle</button>
    </div>)
}
export default UserRef