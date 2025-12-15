# 🚀 Quick Reference Guide

## 📦 Installed Packages

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.28.0",
  "@reduxjs/toolkit": "^2.5.0",
  "react-redux": "^9.2.0",
  "bootstrap": "^5.3.3"
}
```

---

## 🎯 Common Imports You'll Need

### React & Hooks:
```javascript
import { useState, useEffect, useContext, useRef, useMemo, useCallback } from 'react';
```

### React Router:
```javascript
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
```

### Redux:
```javascript
// In slice file:
import { createSlice } from '@reduxjs/toolkit';

// In store file:
import { configureStore } from '@reduxjs/toolkit';

// In components:
import { useSelector, useDispatch } from 'react-redux';
```

### Bootstrap:
```javascript
// In main.jsx:
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## 🔥 Code Patterns You've Already Learned

### 1. Custom Hook Pattern (useFetch):
```javascript
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
```

### 2. Debounce Hook Pattern:
```javascript
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return debouncedValue;
};
```

### 3. Redux Slice Pattern:
```javascript
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
```

### 4. Redux Store Setup:
```javascript
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});
```

### 5. Context Pattern:
```javascript
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```

### 6. React.memo Pattern:
```javascript
const CartItem = React.memo(({ item, onUpdate, onRemove }) => {
  return (
    <div>
      {/* Your JSX */}
    </div>
  );
});
```

### 7. useMemo Pattern:
```javascript
const total = useMemo(() => {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}, [items]);
```

### 8. useCallback Pattern:
```javascript
const handleRemove = useCallback((id) => {
  dispatch(removeFromCart(id));
}, [dispatch]);
```

---

## 🎨 Common Bootstrap Classes

### Layout:
- `container` - Centered container
- `row` - Grid row
- `col`, `col-md-6`, `col-lg-4` - Grid columns

### Cards:
- `card` - Card container
- `card-img-top` - Card image
- `card-body` - Card content
- `card-title` - Card title
- `card-text` - Card text

### Buttons:
- `btn btn-primary` - Primary button
- `btn btn-danger` - Delete button
- `btn btn-success` - Success button
- `btn btn-outline-secondary` - Outline button

### Forms:
- `form-control` - Input styling
- `input-group` - Input group
- `form-select` - Select dropdown

### Navbar:
- `navbar navbar-expand-lg navbar-light bg-light`
- `navbar-brand` - Brand/logo
- `nav-link` - Navigation links

### Utilities:
- `d-flex` - Display flex
- `justify-content-between` - Space between
- `align-items-center` - Center items
- `mt-3`, `mb-3`, `p-3` - Margin/Padding
- `text-center` - Center text
- `badge bg-danger` - Badge

---

## 🌐 API Endpoints Reference

```javascript
// All products
fetch('https://fakestoreapi.com/products')

// Single product
fetch(`https://fakestoreapi.com/products/${id}`)

// All categories
fetch('https://fakestoreapi.com/products/categories')

// Products by category
fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
```

---

## 🎯 Common Interview Questions This Covers

1. **"How do you manage global state?"**
   → Redux Toolkit with useSelector/useDispatch

2. **"How do you optimize React performance?"**
   → React.memo, useMemo, useCallback

3. **"How do you handle API calls?"**
   → Custom useFetch hook with loading/error states

4. **"How do you implement search with debouncing?"**
   → useDebounce custom hook

5. **"How do you implement theme toggling?"**
   → Context API with useContext

6. **"How do you access DOM elements?"**
   → useRef hook

7. **"How do you handle routing?"**
   → React Router with Routes/Route

8. **"How do you persist data?"**
   → localStorage with custom hook

---

## 💡 Tips While Coding

1. **Always destructure props**: `const { item, onRemove } = props;`
2. **Use optional chaining**: `user?.name` instead of `user && user.name`
3. **Use template literals**: `` `Product: ${product.name}` ``
4. **Check arrays before mapping**: `items && items.map(...)`
5. **Use meaningful variable names**: `isLoading` not `flag`
6. **Console.log early and often**: Debug as you go
7. **Test each feature before moving on**: Don't code everything at once

---

## 🚀 Start Here

**Order of Implementation:**
1. `main.jsx` → Setup providers
2. `redux/store.js` + `redux/slices/cartSlice.js` → Redux setup
3. `hooks/*.js` → Custom hooks
4. `context/ThemeContext.jsx` → Theme context
5. `components/Navbar.jsx` → Navigation
6. `pages/ProductsPage.jsx` → Main page
7. `pages/CartPage.jsx` → Cart page
8. `App.jsx` → Routes

---

Good luck! You got this! 💪🚀

