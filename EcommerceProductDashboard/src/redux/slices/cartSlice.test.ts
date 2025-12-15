import { describe, it, expect } from 'vitest'
import cartReducer, { addToCart, removeFromCart, updateQuantity, clearCart } from './cartSlice'

// Mock product
const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 100,
  description: 'Test description',
  category: 'test',
  image: 'test.jpg',
  rating: { rate: 4.5, count: 10 }
}

describe('cartSlice', () => {
  // Test initial state
  it('should return initial state', () => {
    const result = cartReducer(undefined, { type: '' })
    expect(result).toEqual({ items: [] })
  })

  // Test addToCart - new item
  it('should add new item to cart', () => {
    const initialState = { items: [] }
    const result = cartReducer(initialState, addToCart(mockProduct))
    
    expect(result.items).toHaveLength(1)
    expect(result.items[0].id).toBe(1)
    expect(result.items[0].quantity).toBe(1)
  })

  // Test addToCart - existing item (increase quantity)
  it('should increase quantity if item already exists', () => {
    const initialState = { 
      items: [{ ...mockProduct, quantity: 1 }] 
    }
    const result = cartReducer(initialState, addToCart(mockProduct))
    
    expect(result.items).toHaveLength(1)
    expect(result.items[0].quantity).toBe(2)
  })

  // Test removeFromCart
  it('should remove item from cart', () => {
    const initialState = { 
      items: [{ ...mockProduct, quantity: 1 }] 
    }
    const result = cartReducer(initialState, removeFromCart(1))
    
    expect(result.items).toHaveLength(0)
  })

  // Test updateQuantity
  it('should update item quantity', () => {
    const initialState = { 
      items: [{ ...mockProduct, quantity: 1 }] 
    }
    const result = cartReducer(initialState, updateQuantity({ id: 1, quantity: 5 }))
    
    expect(result.items[0].quantity).toBe(5)
  })

  // Test clearCart
  it('should clear all items from cart', () => {
    const initialState = { 
      items: [
        { ...mockProduct, quantity: 1 },
        { ...mockProduct, id: 2, quantity: 2 }
      ] 
    }
    const result = cartReducer(initialState, clearCart())
    
    expect(result.items).toHaveLength(0)
  })

  // Test removeFromCart - item not found
  it('should not change state when removing non-existent item', () => {
    const initialState = { 
      items: [{ ...mockProduct, quantity: 1 }] 
    }
    const result = cartReducer(initialState, removeFromCart(999))
    
    expect(result.items).toHaveLength(1)
  })
})

