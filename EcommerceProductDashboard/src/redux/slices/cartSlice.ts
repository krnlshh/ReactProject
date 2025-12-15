import { createSlice } from '@reduxjs/toolkit'
import { CartItem } from '../../types'

interface CartState {
  items:CartItem[]
}
const initialState: CartState = {
  items:[],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.items.find((item)=>item.id === action.payload.id)
      if(existingProduct){
       existingProduct.quantity = existingProduct.quantity + 1
      }else{
        state.items.push({...action.payload,quantity:1})
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item)=> item.id !== action.payload)  // TODO: Your logic here - remove product from cart by id
    },
    updateQuantity: (state, action) => {
      const existingProduct = state.items.find((item)=>item.id === action.payload.id)
      if(existingProduct){
       existingProduct.quantity = action.payload.quantity  
      }
    },
    clearCart: (state) => {
      state.items = []  // TODO: Your logic here - empty the cart
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
