import { useEffect, useState } from "react";

function MountingStage(){
    
    const [count] = useState(0);
    
    useEffect(() => {
        console.log("one time call only")
    },[]);

    return(
        <h1>its here {count}</h1>

    )
}
export default MountingStage