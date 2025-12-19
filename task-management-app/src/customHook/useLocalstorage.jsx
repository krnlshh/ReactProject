import { useState } from "react";

const useLocalstorage = (key,value) => {

    const [localData,setLocalData] = useState(()=>{
        const getData = localStorage.getItem(key);
        try {
            return getData ? JSON.parse(getData) : value;
        } catch {
            return value;
        }
    })

    const setValue = (newValue) =>{
        setLocalData(newValue)
        localStorage.setItem(key,JSON.stringify(newValue))
    }

    return [localData,setValue]

}
export default useLocalstorage