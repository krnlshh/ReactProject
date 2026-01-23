import { createSlice } from "@reduxjs/toolkit"

interface ScoreState { point : number}

const initialState : ScoreState = {  point : 0 }

export const scoreSlice = createSlice({
  name : 'score',
  initialState,
  reducers : {
    addPoint : (state) =>  {
      state.point = state.point + 1 
    },
    subtractPoint: (state) => {
      state.point = state.point - 1
    },
    resetScore: (state) => {
      state.point = 0
    } 
  }
})

export const { addPoint,subtractPoint,resetScore} = scoreSlice.actions
export default scoreSlice.reducer