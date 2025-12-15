import { createSlice } from '@reduxjs/toolkit'

/**
 * 🎯 EXAMPLE 1: Counter Slice (Basic Redux)
 * 
 * This demonstrates:
 * - createSlice: Modern way to create reducers and actions
 * - Immer: Allows "mutations" that are actually immutable
 * - Action creators: Automatically generated
 * - Initial state: Starting point for this slice
 * 
 * State Shape: { value: 0 }
 */

const initialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter', // Used in action types: 'counter/increment'
  initialState,
  reducers: {
    // Reducer functions automatically create action creators
    increment: (state) => {
      // Immer allows us to write "mutations" that are actually immutable
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      // action.payload contains the data passed when dispatching
      state.value += action.payload
    },
    reset: (state) => {
      state.value = 0
    },
  },
})

// Export action creators (automatically generated)
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

// Export reducer to be used in store
export default counterSlice.reducer

// Selectors: Functions to extract specific pieces of state
export const selectCount = (state) => state.counter.value

