import { configureStore } from '@reduxjs/toolkit'
import countHolder from './slices/counterSlice'
import toDoTask from './slices/todosSlice'


export const store = configureStore({
  reducer: {
    isVisible : countHolder,
    toDo : toDoTask   
  }
})