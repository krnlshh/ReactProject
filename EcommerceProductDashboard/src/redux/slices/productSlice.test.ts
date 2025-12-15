import { describe, it, expect, vi } from 'vitest'
import productReducer, { fetchProducts } from './productSlice'

describe('productSlice', () => {
  // Test initial state
  it('should return initial state', () => {
    const result = productReducer(undefined, { type: '' })
    expect(result).toEqual({
      items: [],
      loading: false,
      error: null
    })
  })

  // Test pending state
  it('should set loading true when fetchProducts is pending', () => {
    const initialState = { items: [], loading: false, error: null }
    const action = { type: fetchProducts.pending.type }
    const result = productReducer(initialState, action)    
    expect(result.loading).toBe(true)
  })

  // Test fulfilled state
  it('should set items and loading false when fetchProducts is fulfilled', () => {
    const initialState = { items: [], loading: true, error: null }
    const mockProducts = [
      { id: 1, title: 'Product 1', price: 100 },
      { id: 2, title: 'Product 2', price: 200 }
    ]
    const action = { 
      type: fetchProducts.fulfilled.type, 
      payload: mockProducts 
    }
    const result = productReducer(initialState, action)
    
    expect(result.loading).toBe(false)
    expect(result.items).toEqual(mockProducts)
  })

  // Test rejected state
  it('should set error and loading false when fetchProducts is rejected', () => {
    const initialState = { items: [], loading: true, error: null }
    const action = { 
      type: fetchProducts.rejected.type, 
      error: { message: 'Failed to fetch' }
    }
    const result = productReducer(initialState, action)
    
    expect(result.loading).toBe(false)
    expect(result.error).toBe('Failed to fetch')
  })
})

