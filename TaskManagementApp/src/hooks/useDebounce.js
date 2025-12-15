/**
 * 🎯 CUSTOM HOOK: useDebounce
 * 
 * PURPOSE: Delay execution of search/filter operations
 * 
 * WHAT YOU'LL BUILD:
 * - Accept value and delay parameters
 * - Return debounced value
 * - Update value only after delay
 * - Clear timeout on cleanup
 * 
 * CONCEPTS COVERED:
 * - Custom Hooks
 * - useState
 * - useEffect
 * - Cleanup functions
 * - Performance optimization
 */

import { useEffect, useState } from "react";



const  useDebounce = (value,delay) => {
    
    const [debouncedValue ,setDebouncedValue ] = useState(value);

    useEffect(()=> {

        const timer = setTimeout(()=>{
            setDebouncedValue(value);
        },delay)

        return () => {
            clearTimeout(timer)
        }
        
    },[value,delay]);
    return debouncedValue
}



export default useDebounce;

