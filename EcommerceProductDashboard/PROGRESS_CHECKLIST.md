# ✅ Progress Checklist

Track your progress as you build the E-Commerce Dashboard!

---

## 📦 Phase 1: Setup & Configuration

### Main Setup:
- [ ] Install dependencies (`npm install` - already done ✅)
- [ ] Update `main.jsx` with all providers (Redux, Router, Theme)
- [ ] Import Bootstrap CSS in `main.jsx`

### Redux Setup:
- [ ] Create cart slice (`redux/slices/cartSlice.js`)
  - [ ] Initial state with `items` array
  - [ ] `addToCart` action
  - [ ] `removeFromCart` action
  - [ ] `updateQuantity` action
  - [ ] `clearCart` action
  - [ ] Export actions and reducer
- [ ] Configure store (`redux/store.js`)
  - [ ] Import cartReducer
  - [ ] Add to configureStore
  - [ ] Export store

### Context Setup:
- [ ] Create ThemeContext (`context/ThemeContext.jsx`)
  - [ ] Create context with `createContext()`
  - [ ] Create ThemeProvider component
  - [ ] Add theme state (useState)
  - [ ] Add toggleTheme function
  - [ ] Persist theme in localStorage
  - [ ] Export provider and custom hook

---

## 🎣 Phase 2: Custom Hooks

- [ ] **useFetch** (`hooks/useFetch.js`)
  - [ ] Accept URL parameter
  - [ ] State: data, loading, error
  - [ ] useEffect to fetch data
  - [ ] Handle async/await
  - [ ] Handle errors with try/catch
  - [ ] Return { data, loading, error }

- [ ] **useDebounce** (`hooks/useDebounce.js`)
  - [ ] Accept value and delay parameters
  - [ ] State: debouncedValue
  - [ ] useEffect with setTimeout
  - [ ] Cleanup with clearTimeout
  - [ ] Return debouncedValue

- [ ] **useLocalStorage** (`hooks/useLocalStorage.js`)
  - [ ] Accept key and initialValue
  - [ ] Get initial value from localStorage
  - [ ] State: value
  - [ ] Update localStorage when value changes
  - [ ] Return [value, setValue]

---

## 🧩 Phase 3: Components

### Navbar (`components/Navbar.jsx`):
- [ ] Import Link from react-router-dom
- [ ] Brand name/logo
- [ ] Navigation links (Products, Cart)
- [ ] Cart icon with badge
  - [ ] Get cart items count from Redux (useSelector)
  - [ ] Show count in badge
- [ ] Theme toggle button
  - [ ] Use theme context
  - [ ] Call toggleTheme on click
- [ ] Bootstrap navbar classes
- [ ] Apply theme colors based on context

### SearchBar (`components/SearchBar.jsx`):
- [ ] Accept value and onChange props
- [ ] Create input with form-control class
- [ ] useRef for input
- [ ] Auto-focus on mount (useEffect + ref.current.focus())
- [ ] Search icon (can use emoji 🔍)
- [ ] Controlled input (value prop)

### FilterBar (`components/FilterBar.jsx`):
- [ ] Accept category, onCategoryChange, sort, onSortChange props
- [ ] Category buttons (All, Electronics, Jewelery, Men's, Women's)
- [ ] Active state on selected category
- [ ] Sort dropdown (Price: Low to High, High to Low)
- [ ] Bootstrap button group
- [ ] Bootstrap select for sort

### ProductCard (`components/ProductCard.jsx`):
- [ ] Accept product prop
- [ ] Display product image
- [ ] Display title, price, category
- [ ] Link to product detail page
- [ ] Add to Cart button
  - [ ] Get dispatch from useDispatch
  - [ ] Dispatch addToCart action with product
- [ ] Bootstrap card styling
- [ ] Optional: Wrap with React.memo

### CartItem (`components/CartItem.jsx`):
- [ ] Accept item, onIncrease, onDecrease, onRemove props
- [ ] Display item image (small)
- [ ] Display title, price, quantity
- [ ] Calculate item total (price × quantity)
- [ ] Increase button (+)
- [ ] Decrease button (-)
- [ ] Remove button (🗑️ or X)
- [ ] Bootstrap styling
- [ ] Wrap with React.memo
- [ ] Use memoized handlers from parent (useCallback)

---

## 📄 Phase 4: Pages

### ProductsPage (`pages/ProductsPage.jsx`):
- [ ] Fetch products with useFetch
  - [ ] URL: 'https://fakestoreapi.com/products'
- [ ] State: searchTerm, category, sort
- [ ] Use useDebounce for search
- [ ] Render SearchBar component
- [ ] Render FilterBar component
- [ ] Filter logic:
  - [ ] Filter by search term (debounced)
  - [ ] Filter by category
  - [ ] Sort by price
- [ ] useMemo for filtered products (optimization)
- [ ] Display products in grid (Bootstrap row/col)
- [ ] Map through products and render ProductCard
- [ ] Loading state (show "Loading...")
- [ ] Error state (show error message)
- [ ] Empty state (no products found)

### CartPage (`pages/CartPage.jsx`):
- [ ] Get cart items from Redux (useSelector)
- [ ] Get dispatch (useDispatch)
- [ ] Handler functions:
  - [ ] handleIncrease (useCallback)
  - [ ] handleDecrease (useCallback)
  - [ ] handleRemove (useCallback)
- [ ] Calculate totals with useMemo:
  - [ ] Subtotal (sum of all items)
  - [ ] Tax (18% of subtotal)
  - [ ] Discount (if subtotal > $1000, 10% off)
  - [ ] Final total
- [ ] Render cart items (map through items)
  - [ ] Pass memoized handlers to CartItem
- [ ] Cart summary section
  - [ ] Show subtotal
  - [ ] Show tax
  - [ ] Show discount (if applicable)
  - [ ] Show final total
- [ ] Clear cart button
- [ ] Empty cart message (if no items)
- [ ] Bootstrap styling

### ProductDetailPage (`pages/ProductDetailPage.jsx`):
- [ ] Get product ID (from URL or simple approach)
- [ ] Fetch single product with useFetch
  - [ ] URL: `https://fakestoreapi.com/products/${id}`
- [ ] State: quantity (useState)
- [ ] useRef for quantity input (auto-focus)
- [ ] Display:
  - [ ] Large product image
  - [ ] Title
  - [ ] Description (full)
  - [ ] Price
  - [ ] Category
  - [ ] Rating (optional)
- [ ] Quantity selector
  - [ ] Number input with ref
  - [ ] Auto-focus on mount
- [ ] Add to Cart button
  - [ ] Dispatch addToCart with product and quantity
- [ ] Back to Products link
- [ ] Loading state
- [ ] Error state
- [ ] Bootstrap styling

---

## 🛣️ Phase 5: Routing

### App.jsx:
- [ ] Import BrowserRouter, Routes, Route
- [ ] Import all pages
- [ ] Import Navbar
- [ ] Render Navbar (outside Routes)
- [ ] Setup Routes:
  - [ ] `/` → ProductsPage
  - [ ] `/products` → ProductsPage
  - [ ] `/cart` → CartPage
  - [ ] `/product/:id` → ProductDetailPage
- [ ] Apply theme classes to App div

---

## 🎨 Phase 6: Polish & Optimization

### Performance Optimization:
- [ ] Memoize CartItem with React.memo
- [ ] Memoize cart calculations with useMemo
- [ ] Memoize cart handlers with useCallback
- [ ] Memoize filtered products with useMemo
- [ ] Optional: Memoize ProductCard with React.memo

### UI Polish:
- [ ] Add loading skeletons
- [ ] Add error messages
- [ ] Add empty states
- [ ] Add success messages (when adding to cart)
- [ ] Smooth transitions
- [ ] Responsive design (Bootstrap handles most)
- [ ] Dark theme styling

### Testing:
- [ ] Test product fetching
- [ ] Test search functionality
- [ ] Test category filter
- [ ] Test sort functionality
- [ ] Test add to cart
- [ ] Test remove from cart
- [ ] Test quantity update
- [ ] Test cart calculations
- [ ] Test theme toggle
- [ ] Test routing (navigation)
- [ ] Test empty states
- [ ] Test error states

---

## 🏆 Bonus Features (Optional):

- [ ] Persist cart in localStorage
- [ ] Add product to wishlist
- [ ] Implement pagination
- [ ] Add product rating display
- [ ] Add image carousel in detail page
- [ ] Add toast notifications
- [ ] Add loading spinners
- [ ] Add animations
- [ ] Implement search suggestions
- [ ] Add filter by price range
- [ ] Add total items count in navbar
- [ ] Add checkout page

---

## 🎯 Final Checks:

- [ ] All features working
- [ ] No console errors
- [ ] No warnings
- [ ] Responsive on mobile
- [ ] Theme toggle working
- [ ] Redux state updating correctly
- [ ] Cart calculations correct
- [ ] All hooks implemented correctly
- [ ] Performance optimized
- [ ] Code is clean and readable

---

## 🚀 When Complete:

**You've successfully demonstrated:**
- ✅ All 7 React Hooks (useState, useEffect, useContext, useRef, useMemo, useCallback, useReducer)
- ✅ Redux Toolkit (store, slices, actions, selectors)
- ✅ Custom Hooks (3)
- ✅ Performance Optimization (React.memo, useMemo, useCallback)
- ✅ Context API
- ✅ React Router
- ✅ API Integration
- ✅ Bootstrap Styling

**Congratulations! You're interview-ready!** 🎉🚀

---

**Tips:**
- Check off items as you complete them
- Don't rush - understand each concept
- Test each feature before moving on
- Use console.log to debug
- Refer to QUICK_REFERENCE.md for code patterns
- Ask for help if stuck!

You got this! 💪

