import { useState,useEffect } from "react";


function UpdateStage(){
    const [count, setCount] = useState(0);
    
    // Runs on every render
    useEffect(() => {
        console.log(' Runs on every render - Component updated');
    });
    
    // Runs when count changes
    useEffect(() => {
        console.log('Runs when count changes -  Count changed');
    }, []);

    
    
    return <div><button onClick={() => setCount(count + 1)}>change update</button></div>;
}
export default UpdateStage