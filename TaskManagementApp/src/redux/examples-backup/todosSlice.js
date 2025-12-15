import { createSlice } from '@reduxjs/toolkit'

/**
 * 🎯 EXAMPLE 2: Todos Slice (Intermediate Redux)
 * 
 * This demonstrates:
 * - Complex state structure
 * - Multiple actions
 * - Updating arrays immutably
 * - Filtering logic in reducers
 * 
 * State Shape: {
 *   items: [{ id, text, completed }],
 *   filter: 'all' | 'active' | 'completed'
 * }
 */

const initialState = {
  items: [
    { id: 1, text: 'Learn Redux basics', completed: false },
    { id: 2, text: 'Build a todo app', completed: true },
    { id: 3, text: 'Master Redux Toolkit', completed: false },
  ],
  filter: 'all', // 'all', 'active', 'completed'
  nextId: 4,
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Add new todo to the array
      state.items.push({
        id: state.nextId++,
        text: action.payload,
        completed: false,
      })
    },
    toggleTodo: (state, action) => {
      // Find and update specific todo
      const todo = state.items.find((item) => item.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action) => {
      // Remove todo from array
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    editTodo: (state, action) => {
      // Update todo text
      const { id, text } = action.payload
      const todo = state.items.find((item) => item.id === id)
      if (todo) {
        todo.text = text
      }
    },
    setFilter: (state, action) => {
      // Update filter
      state.filter = action.payload
    },
    clearCompleted: (state) => {
      // Remove all completed todos
      state.items = state.items.filter((item) => !item.completed)
    },
  },
})

// Export action creators
export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  setFilter,
  clearCompleted,
} = todosSlice.actions

// Export reducer
export default todosSlice.reducer

// Selectors: Memoized selectors for better performance
export const selectAllTodos = (state) => state.todos.items
export const selectFilter = (state) => state.todos.filter

// Computed selector (derived state)
export const selectFilteredTodos = (state) => {
  const todos = selectAllTodos(state)
  const filter = selectFilter(state)

  switch (filter) {
    case 'active':
      return todos.filter((todo) => !todo.completed)
    case 'completed':
      return todos.filter((todo) => todo.completed)
    default:
      return todos
  }
}

export const selectTodosCount = (state) => ({
  total: state.todos.items.length,
  active: state.todos.items.filter((todo) => !todo.completed).length,
  completed: state.todos.items.filter((todo) => todo.completed).length,
})

