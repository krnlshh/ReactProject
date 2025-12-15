# 🎯 YOUR CODING TASKS

All the logic code has been removed! Now it's your turn to implement everything yourself! 💪

---

## 📋 WHAT TO IMPLEMENT:

### ✅ **STEP 1: Custom Hooks (Foundation)**

#### 1. `src/hooks/useFetch.js`
**Task:** Fetch data from API
- [ ] Create state for `data`, `loading`, `error`
- [ ] Use `useEffect` to fetch data when URL changes
- [ ] Handle loading and error states
- [ ] Return `{ data, loading, error }`

**API:** `https://fakestoreapi.com/products`

---

#### 2. `src/hooks/useDebounce.js`
**Task:** Debounce search input
- [ ] Create state for `debouncedValue`
- [ ] Use `useEffect` with `setTimeout`
- [ ] Clear timeout on cleanup
- [ ] Return `debouncedValue`

**Delay:** 500ms

---

#### 3. `src/hooks/useLocalStorage.js`
**Task:** Persist cart to localStorage
- [ ] Create state that initializes from `localStorage.getItem()`
- [ ] Parse JSON data from localStorage
- [ ] Create function to update state AND localStorage
- [ ] Return `[value, setValue]` (like useState)

---

### ✅ **STEP 2: ProductsPage (Main Features)**

#### `src/pages/ProductsPage.jsx`

**Tasks:**
1. [ ] Use `useFetch` to get products from API
2. [ ] Create state for search input
3. [ ] Use `useDebounce` for search value
4. [ ] Use `useLocalStorage` for cart
5. [ ] Create state for category filter
6. [ ] Create state for sort option
7. [ ] Handle loading/error states (already styled!)
8. [ ] Filter products by search term
9. [ ] Filter products by category
10. [ ] Sort products (3 options: price high-low, price low-high, name)
11. [ ] Implement `handleCart` function:
    - Check if product exists in cart
    - If exists: increase quantity
    - If not: add with quantity = 1

**UI is already designed! Just add the logic! ✅**

---

### ✅ **STEP 3: CartPage (Cart Management)**

#### `src/pages/CartPage.jsx`

**Tasks:**
1. [ ] Use `useLocalStorage` to get cart items
2. [ ] Implement `handleDelete(id)` - remove item
3. [ ] Implement `clearCart()` - empty cart
4. [ ] Implement `handleMinus(id)`:
   - If quantity = 1: remove item
   - Else: decrease quantity by 1
5. [ ] Implement `handlePlus(id)` - increase quantity
6. [ ] Calculate total price using `reduce()`
7. [ ] Calculate total items using `reduce()`
8. [ ] Get cart length (unique products)

**UI is already designed! Just add the logic! ✅**

---

### ✅ **STEP 4: ProductDetailPage (Product Details)**

#### `src/pages/ProductDetailPage.jsx`

**Tasks:**
1. [ ] Use `useParams()` to get product ID from URL
2. [ ] Use `useFetch` to get product details
3. [ ] Use `useLocalStorage` for cart
4. [ ] Handle loading/error states
5. [ ] Display product information
6. [ ] Implement `handleAddToCart` (same logic as ProductsPage)

**UI is already designed! Just add the logic! ✅**

---

## 🎯 **IMPLEMENTATION ORDER (Recommended):**

1. **Start with Custom Hooks** (bottom-up approach)
   - `useFetch` first (needed everywhere)
   - `useDebounce` second
   - `useLocalStorage` third

2. **Then ProductsPage**
   - Get products displaying first
   - Add search
   - Add category filter
   - Add sort
   - Add to cart

3. **Then CartPage**
   - Display cart items
   - Add/remove functionality
   - Calculate totals

4. **Finally ProductDetailPage**
   - Display product
   - Add to cart

---

## 📚 **WHAT YOU'LL LEARN:**

- ✅ Custom hooks patterns
- ✅ State management
- ✅ Array methods (filter, map, reduce, sort, find)
- ✅ Conditional rendering
- ✅ Event handling
- ✅ localStorage API
- ✅ URL parameters
- ✅ Data flow in React

---

## 💡 **TIPS:**

1. **Test each feature** before moving to the next
2. **Use console.log()** to debug
3. **Check the browser console** for errors
4. **Read error messages carefully**
5. **Take breaks!** Coding is a marathon, not a sprint 🏃‍♂️

---

## 🚀 **YOU'VE GOT THIS!**

All the design is done! All the configuration is done! 

**Just focus on the LOGIC!** 💪

Remember:
- Don't rush
- Test frequently
- Debug patiently
- Learn from mistakes

**Good luck! You're going to do great!** ✨

---

**P.S.** If you get stuck, review the mistakes list to avoid common pitfalls! 🎯

