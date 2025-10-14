import { useEffect, useState } from "react"

function EffectExample(){

    const [dataCount,setDataCount] = useState(0)
    const [userCount,setUserCount] = useState(0)
    
    useEffect(() => {
       onceCall();
    }, [userCount]);


    function onceCall(){
        console.log("one time call only");
    }
    
 
    return(
        <div>
        <button className="heading" onClick={() => setDataCount(dataCount + 1)}>add DataCount</button>
        <button onClick={() => setUserCount(userCount + 1)}>add UserCount</button>
        {dataCount}
        {userCount}
        
        </div>
    )


}
export default EffectExample