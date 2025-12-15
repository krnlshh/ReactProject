import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Product } from '../../types'


// State type
interface ProductState {
  items: Product[]
  loading: boolean
  error: string | null
}

// Initial state
const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
}

// TODO: Create async thunk for fetching products
// Hint: Use createAsyncThunk('products/fetchProducts', async () => { ... })
// API: https://fakestoreapi.com/products

// 🔹 THUNK - async action for API call
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    return data.products
  }
)


// TODO: Create slice with extraReducers to handle pending, fulfilled, rejected
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending,(state)=>{
      state.loading = true
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
      state.loading = false
      state.items = action.payload
    })
    .addCase(fetchProducts.rejected,(state,action)=>{
      state.loading = false
      state.error= action.error.message || 'Failed'
    })
  }
})

export default productSlice.reducer
