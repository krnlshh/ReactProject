import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

/**
 * 🎯 EXAMPLE 3: Users Slice (Advanced Redux)
 * 
 * This demonstrates:
 * - Async operations with createAsyncThunk
 * - Loading states
 * - Error handling
 * - Normalized state structure
 * 
 * State Shape: {
 *   items: { [id]: user },
 *   ids: [id1, id2, ...],
 *   loading: boolean,
 *   error: string | null
 * }
 */

// Async Thunk: Handles async operations
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!response.ok) {
        throw new Error('Failed to fetch users')
      }
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      )
      if (!response.ok) {
        throw new Error('Failed to fetch user')
      }
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  // Normalized state: easier to update and access
  items: {},
  ids: [],
  loading: false,
  error: null,
  selectedUserId: null,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectedUserId = action.payload
    },
    clearError: (state) => {
      state.error = null
    },
  },
  // Handle async thunk actions
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        // Normalize the data
        const users = action.payload
        users.forEach((user) => {
          state.items[user.id] = user
          if (!state.ids.includes(user.id)) {
            state.ids.push(user.id)
          }
        })
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // Fetch User By ID
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false
        const user = action.payload
        state.items[user.id] = user
        if (!state.ids.includes(user.id)) {
          state.ids.push(user.id)
        }
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { selectUser, clearError } = usersSlice.actions
export default usersSlice.reducer

// Selectors
export const selectUsersLoading = (state) => state.users.loading
export const selectUsersError = (state) => state.users.error
export const selectUserIds = (state) => state.users.ids
export const selectUserById = (state, userId) => state.users.items[userId]
export const selectAllUsers = (state) =>
  state.users.ids.map((id) => state.users.items[id])
export const selectSelectedUserId = (state) => state.users.selectedUserId
export const selectSelectedUser = (state) => {
  const userId = state.users.selectedUserId
  return userId ? state.users.items[userId] : null
}

