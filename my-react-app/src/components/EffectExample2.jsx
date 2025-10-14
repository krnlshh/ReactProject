import { useEffect } from "react"

const EffectExample2 = ({count,ucount}) => {  // Fixed destructuring
    function oneCall(){
        console.log("calling from function");
    }

    function uoneCall(){
        console.log("calling from function");
    }

    useEffect(() => {
        oneCall();
    }, []); // Empty array = runs once on mount

    useEffect(() => {uoneCall()},[ucount]);

    return(
        <h5>Here is counter : {count}{ucount}</h5>
    )
}
export default EffectExample2