import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../app/store"
import { decreaseVolume, increaseVolume, setVolume, toggleVolume } from "../features/volumeSlice"

const Volume = () => {
    const volume = useSelector((state:RootState)=>state.volume.volume)
    const muted = useSelector((state:RootState)=>state.volume.muted)
    const dispatch = useDispatch<AppDispatch>()
    const handleAdd = () => {
        dispatch(increaseVolume())
    }
    const handleMinus = () => {
        dispatch(decreaseVolume())
    }
    const handleToggle = () => {
        dispatch(toggleVolume())
    }
    const adjustVolume = (value:number) => {
        dispatch(setVolume(value)) 
    }

    return(
    <div className="card">
        <button onClick={handleAdd}>ADD</button>
        <button onClick={handleMinus}>SUBTRACT</button>
        <button onClick={handleToggle}>TOGGLE VOLUME</button>       
        <input type="number" min="0" max="100" onChange={(e) => adjustVolume(Number(e.target.value))}/>
        <progress value={muted ? 0 : volume} max={100} />
        <span>{muted ? 0 : volume}%</span>
    </div>)

}
export default Volume