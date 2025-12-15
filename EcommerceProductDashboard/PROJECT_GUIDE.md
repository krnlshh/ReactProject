# 🛒 E-Commerce Product Dashboard - Interview Exercise

## 🎯 Project Goal
Build a complete e-commerce product dashboard to practice all React interview concepts you've learned.

---

## 📁 Project Structure

```
src/
├── hooks/
│   ├── useFetch.js          ← Fetch products from API
│   ├── useDebounce.js       ← Debounce search input
│   └── useLocalStorage.js   ← Persist data in localStorage
│
├── context/
│   └── ThemeContext.jsx     ← Light/Dark theme with Context API
│
├── redux/
│   ├── store.js             ← Configure Redux store
│   └── slices/
│       └── cartSlice.js     ← Shopping cart state (add/remove/update)
│
├── pages/
│   ├── ProductsPage.jsx     ← Main page: list all products
│   ├── CartPage.jsx         ← Cart page: manage cart items
│   └── ProductDetailPage.jsx ← Single product details
│
├── components/
│   ├── Navbar.jsx           ← Navigation + theme toggle + cart count
│   ├── ProductCard.jsx      ← Single product display
│   ├── CartItem.jsx         ← Single cart item (memoized)
│   ├── SearchBar.jsx        ← Search with auto-focus (useRef)
│   └── FilterBar.jsx        ← Category filters + sort
│
├── App.jsx                  ← Routes setup
└── main.jsx                 ← Providers setup (Redux, Router, Theme)
```

---

## 📝 Implementation Order

### ✅ Phase 1: Foundation (Day 1)
1. **main.jsx** - Setup all providers (Redux, Router, Theme, Bootstrap CSS)
2. **redux/store.js** - Configure store
3. **redux/slices/cartSlice.js** - Create cart slice with actions
4. **context/ThemeContext.jsx** - Create theme context
5. **App.jsx** - Setup basic routes

### ✅ Phase 2: Custom Hooks (Day 1)
6. **hooks/useFetch.js** - Fetch data from API
7. **hooks/useDebounce.js** - Debounce values
8. **hooks/useLocalStorage.js** - Persist in localStorage

### ✅ Phase 3: Components (Day 2)
9. **components/Navbar.jsx** - Navigation bar
10. **components/SearchBar.jsx** - Search input with useRef
11. **components/FilterBar.jsx** - Category filter + sort
12. **components/ProductCard.jsx** - Product display
13. **components/CartItem.jsx** - Cart item (with React.memo)

### ✅ Phase 4: Pages (Day 3)
14. **pages/ProductsPage.jsx** - Main products page
15. **pages/CartPage.jsx** - Shopping cart
16. **pages/ProductDetailPage.jsx** - Product details

---

## 🌐 API to Use

**Base URL:** `https://fakestoreapi.com`

### Endpoints:
- Get all products: `GET /products`
- Get single product: `GET /products/{id}`
- Get categories: `GET /products/categories`
- Get products by category: `GET /products/category/{categoryName}`

### Sample Product Response:
```json
{
  "id": 1,
  "title": "Fjallraven Backpack",
  "price": 109.95,
  "description": "Your perfect pack...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

---

## 🎯 Concepts You'll Practice

### ✅ React Hooks:
- ✅ useState (search, filter, sort, theme)
- ✅ useEffect (data fetching)
- ✅ useContext (theme)
- ✅ useRef (auto-focus input)
- ✅ useMemo (cart calculations)
- ✅ useCallback (memoize handlers)

### ✅ Redux Toolkit:
- ✅ configureStore
- ✅ createSlice
- ✅ useSelector
- ✅ useDispatch
- ✅ Immutable updates

### ✅ Custom Hooks:
- ✅ useFetch
- ✅ useDebounce
- ✅ useLocalStorage

### ✅ Performance:
- ✅ React.memo
- ✅ useMemo
- ✅ useCallback

### ✅ React Router:
- ✅ BrowserRouter
- ✅ Routes, Route
- ✅ Link

### ✅ Bootstrap:
- ✅ Cards, Buttons, Forms
- ✅ Navbar, Grid system
- ✅ Badge, List groups

---

## 🚀 How to Start

1. Open `src/main.jsx` and setup providers
2. Follow the implementation order above
3. Test each feature before moving to the next
4. Run: `npm run dev` to start the dev server

---

## 🎯 Features Checklist

### Core Features:
- [ ] Fetch and display products
- [ ] Search products with debounce
- [ ] Filter by category
- [ ] Sort by price
- [ ] Add to cart (Redux)
- [ ] Remove from cart
- [ ] Update quantity
- [ ] View cart with totals
- [ ] Product detail page
- [ ] Theme toggle (light/dark)
- [ ] Responsive navbar with cart count

### Performance Features:
- [ ] Memoize cart calculations (useMemo)
- [ ] Memoize CartItem component (React.memo)
- [ ] Memoize event handlers (useCallback)
- [ ] Debounce search (useDebounce)

### Advanced Features (Bonus):
- [ ] Persist cart in localStorage
- [ ] Empty cart message
- [ ] Loading states
- [ ] Error handling
- [ ] Product image carousel

---

## 💡 Tips

1. **Start Simple**: Get basic functionality working first
2. **Test Often**: Check each feature in the browser
3. **Use Console**: `console.log()` is your friend
4. **Bootstrap Classes**: Use `className="container"`, `className="card"`, etc.
5. **Redux DevTools**: Install Redux DevTools browser extension

---

## 🎉 When You're Done

This project demonstrates:
- ✅ 7 React Hooks
- ✅ Redux Toolkit
- ✅ 3 Custom Hooks
- ✅ Performance Optimization
- ✅ Context API
- ✅ React Router
- ✅ API Integration
- ✅ Professional UI with Bootstrap

**You'll be interview-ready!** 🚀

---

Good luck! Start with `main.jsx` and work through each file. 💪

