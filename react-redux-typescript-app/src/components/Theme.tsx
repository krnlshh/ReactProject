import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../app/store"
import { toggleTheme } from "../features/themeSlice"

const Theme = () => {
    const theme = useSelector((state:RootState)=>state.theme.theme)
    const dispatch = useDispatch<AppDispatch>()
    return(
        <div className="card">
            <button onClick={()=>dispatch(toggleTheme())}>Toggle Theme</button>
            <h2>Theme : {theme}</h2>
        </div>       
    )
}

export default Theme