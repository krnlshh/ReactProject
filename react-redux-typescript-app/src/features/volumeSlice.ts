import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Volume  { volume : number; muted:boolean}
const initialState : Volume = { volume:50, muted:false}
export const volumeSlice = createSlice({
    name:"volume",
    initialState,
    reducers : {
        increaseVolume : (state) => {
            if(state.volume < 100) state.volume = state.volume + 10  
        }, 
        decreaseVolume : (state) => {
            if(state.volume > 0) state.volume = state.volume - 10
        },
        setVolume : (state,action: PayloadAction<number>) => {
            state.volume = Math.max(0,Math.min(100,action.payload))
        },
        toggleVolume : (state) => {
            state.muted = !state.muted 
        }
    }
})
export const {increaseVolume,decreaseVolume,setVolume,toggleVolume} = volumeSlice.actions
export default volumeSlice.reducer