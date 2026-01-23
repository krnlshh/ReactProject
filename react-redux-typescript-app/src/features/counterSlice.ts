import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

// Import createSlice: import { createSlice } from '@reduxjs/toolkit'
// Define initialState: Create an object representing the starting state (e.g., { value: 0 }).
// Create the slice: Call createSlice with an object containing:
// name: A unique string for the slice.
// initialState: The initial state.
// reducers: An object of functions that update the state immutably.
// Export actions: Destructure and export the actions from slice.actions.
// Export the reducer: Export slice.reducer (usually as default) to use in the store.