// Product type from FakeStore API
export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

// Cart item extends Product with quantity
export interface CartItem extends Product {
  quantity: number
}


// Cart state for Redux
export interface CartState {
  items: CartItem[]
}

// useFetch return type
export interface UseFetchReturn<T> {
  loading: boolean
  error: string | null
  data: T | undefined
}

