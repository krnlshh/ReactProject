import { useState } from "react";

const useToggle = (defaultValue) => {
    
    const [value,setToggle] = useState(defaultValue);

    const toggleUI = (val) =>{
        if(typeof val != 'boolean'){
            setToggle(!value)
        }else{
            setToggle(val)
        }
    }
    
    
    return [value, toggleUI]
}
export default useToggle;