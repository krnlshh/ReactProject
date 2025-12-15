import { useDispatch,useSelector } from "react-redux";  
import {add,decrese,reset} from '../redux/slices/counterSlice'

const ReduxCounterPage = () => {
    const count = useSelector((state) => state.count.value);
    const dispatch = useDispatch();  
    return<>
        <h5>Count : {count}</h5>
        <button onClick={()=>dispatch(add())}>Add</button>
        <button onClick={()=>dispatch(decrese())}>decrese</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
    </>

}
export default ReduxCounterPage