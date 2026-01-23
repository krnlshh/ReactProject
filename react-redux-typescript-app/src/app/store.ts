import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import scoreReducer from '../features/scoreSlice'
import themeReducer from '../features/themeSlice'
import todoReducer from '../features/todoSlice'
import volumeReducer from '../features/volumeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    score: scoreReducer,
    theme: themeReducer,
    todo: todoReducer,
    volume:volumeReducer 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch