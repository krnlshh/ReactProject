import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    value:0
}
const actionCreate = createSlice({
    name:'counter',
    initialState,
    reducers : {
        add : ((state) => {state.value = state.value + 1}),
        decrese : ((state) => {state.value = state.value - 1}),
        reset : ((state) => {state.value = 0})
    }
})
export const {add,decrese,reset} = actionCreate.actions
export default actionCreate.reducer