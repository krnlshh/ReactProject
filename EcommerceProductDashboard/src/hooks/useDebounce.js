import { useEffect, useState } from "react"

const useDebounce = (value,delay) => {
    const [debounceValue,setText] = useState(value);

    useEffect(()=>{
      const timer  = setTimeout(()=>{
            setText(value)
        },delay);
        return()=>{
            clearTimeout(timer)
        }
    },[value,delay])

    return debounceValue
}

export default useDebounce