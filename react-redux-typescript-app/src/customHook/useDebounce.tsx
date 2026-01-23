import { useEffect, useState } from "react";


export function useDebounce<T>(value: T, delay: number): T {
    const [data, setData] = useState<T>(value);
    useEffect(() => {
        const Timer = setTimeout(() => {
            setData(value)
        }, delay)
        return () => {
            clearTimeout(Timer)
        }
    }, [value, delay])

    return data
}
export default useDebounce
