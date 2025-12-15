# 🎯 User Management Dashboard - Project Plan

## 📋 Overview
This project covers 6 critical React interview topics in ONE comprehensive exercise.

---

## 🗂️ Project Structure

```
src/
├── hooks/                    # Custom Hooks
│   ├── useFetch.js          # Data fetching hook
│   ├── useDebounce.js       # Debounce search hook
│   └── useLocalStorage.js   # Persist filters hook
│
├── reducers/                 # useReducer Logic
│   └── userReducer.js       # Complex state management
│
├── components/               # UI Components
│   ├── SearchBar.jsx        # Search with useRef
│   ├── FilterBar.jsx        # Filter buttons
│   ├── UserCard.jsx         # Memoized user card
│   └── UserList.jsx         # Optimized list
│
├── pages/                    # Route Pages
│   ├── UsersPage.jsx        # Main user list page
│   └── UserDetailPage.jsx   # User details page
│
└── App.jsx                   # Router setup
```

---

## 📚 Topics Covered

### 1️⃣ useRef
**Files:** `SearchBar.jsx`
- Auto-focus search input
- Store previous values

### 2️⃣ Data Fetching
**Files:** `useFetch.js`, `UsersPage.jsx`, `UserDetailPage.jsx`
- Fetch from API
- Loading states
- Error handling

### 3️⃣ useReducer
**Files:** `userReducer.js`, `UsersPage.jsx`
- Complex state management
- Actions and dispatch
- State transitions

### 4️⃣ useMemo/useCallback
**Files:** `UsersPage.jsx`, `UserList.jsx`, `UserCard.jsx`
- Memoize filtered users
- Optimize handlers
- Prevent re-renders

### 5️⃣ React Router
**Files:** `App.jsx`, `UsersPage.jsx`, `UserDetailPage.jsx`
- Routes setup
- Navigation
- URL parameters

### 6️⃣ Custom Hooks
**Files:** `hooks/useFetch.js`, `hooks/useDebounce.js`, `hooks/useLocalStorage.js`
- Reusable logic
- Hook patterns
- Best practices

---

## 🚀 Learning Path

### Phase 1: Foundation (Days 1-2)
**Focus:** useRef + Data Fetching
- [ ] Build useFetch hook
- [ ] Create SearchBar with useRef
- [ ] Fetch and display users
- [ ] Add loading/error states

### Phase 2: State Management (Day 3)
**Focus:** useReducer
- [ ] Create userReducer
- [ ] Replace useState with useReducer
- [ ] Handle complex state transitions

### Phase 3: Optimization (Day 4)
**Focus:** useMemo/useCallback
- [ ] Memoize filtered users
- [ ] Optimize event handlers
- [ ] Memoize UserCard component

### Phase 4: Custom Hooks (Day 5)
**Focus:** Advanced patterns
- [ ] Build useDebounce hook
- [ ] Build useLocalStorage hook
- [ ] Integrate all hooks

### Phase 5: Navigation (Day 6)
**Focus:** React Router
- [ ] Setup routes
- [ ] Create UserDetailPage
- [ ] Add navigation

### Phase 6: Polish (Day 7)
**Focus:** Integration & Testing
- [ ] Add styling
- [ ] Test all features
- [ ] Final review

---

## 🎯 Features to Build

### ✅ Must Have (Core)
- [ ] Fetch users from API
- [ ] Display users list
- [ ] Search users (debounced)
- [ ] Filter users
- [ ] Loading spinner
- [ ] Error handling
- [ ] Navigate to user details

### 🌟 Nice to Have (Extra)
- [ ] Persist filters in localStorage
- [ ] Pagination
- [ ] Sort users
- [ ] User avatars
- [ ] Responsive design

---

## 📊 Interview Value

**When interviewer asks:**
- "Optimize React app?" → Show useMemo/useCallback
- "useReducer vs useState?" → Show userReducer
- "Build custom hook?" → Show useFetch/useDebounce
- "Handle API?" → Show data fetching
- "Use useRef?" → Show auto-focus

**ONE project = 10+ interview answers!** 🎉

---

## 🔗 API Used

**JSONPlaceholder (Free fake API)**
- Base URL: `https://jsonplaceholder.typicode.com`
- Endpoints:
  - GET `/users` - All users
  - GET `/users/:id` - Single user

---

## 🎓 Ready to Start?

Follow the phases in order. Each file has detailed TODO comments guiding you!

**Start with Phase 1: useFetch.js** 🚀

