import { useRef } from "react"
import RefChild from "./RefChild"

function RefParent(){
    const inputRef = useRef(null)

    function submit(){
        inputRef.current.focus();       
    }

    return(<div>
        <RefChild  ref={inputRef} />
        <button onClick={submit}>Submit</button>
    </div>)
}
export default RefParent