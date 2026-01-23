import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../app/store"
import { addPoint, resetScore, subtractPoint } from "../features/scoreSlice"

function Score() {
  const score = useSelector((state: RootState) => state.score.point)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="card">
        <button onClick={() => dispatch(addPoint())}>Add Point</button>
        <button onClick={() => dispatch(subtractPoint())}>Subtract Point</button>
        <button onClick={() => dispatch(resetScore())}>Reset Score</button>
        <h2>Score: {score}</h2>
    </div>
  )
}

export default Score