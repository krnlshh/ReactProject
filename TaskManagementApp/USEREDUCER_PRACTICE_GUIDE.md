# 🎓 useReducer Practice Guide

## 🎯 Why Learn useReducer First?

**useReducer is the foundation for Redux!**

Once you master useReducer:
- ✅ Redux will be EASY
- ✅ You'll understand WHY Redux works
- ✅ You'll learn faster (days instead of weeks)

---

## 📚 What is useReducer?

`useReducer` is a React hook for managing **complex state** in a component.

### When to use it:
- Multiple related state values
- Complex state logic
- Next state depends on previous state
- Alternative to useState for complex scenarios

---

## 🔑 Core Concepts

### 1. State
The data you want to manage
```javascript
{ count: 0, name: 'John' }
```

### 2. Action
An object describing WHAT happened
```javascript
{ type: 'INCREMENT' }
{ type: 'SET_NAME', payload: 'Jane' }
```

### 3. Reducer
A pure function that takes (state, action) → returns new state
```javascript
function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}
```

### 4. Dispatch
Function to send actions
```javascript
dispatch({ type: 'INCREMENT' })
```

---

## 🚀 Practice Plan

We'll build 3 examples, each increasing in complexity:

### Example 1: Counter
- Basic useReducer
- Simple actions
- Understanding the flow

### Example 2: Todo List
- Multiple actions
- Array operations
- Complex state updates

### Example 3: Form with Validation
- Multiple state values
- Conditional logic
- Real-world scenario

---

## 📖 Example 1: Counter (Let's Start Here!)

### What we'll build:
A counter with increment, decrement, and reset buttons

### What you'll learn:
- How to set up useReducer
- How to create a reducer function
- How to dispatch actions
- How state updates work

---

## Ready to Start?

Say **"Let's start useReducer Example 1"** and I'll guide you step by step!

Remember: Type the code yourself, don't copy-paste. It helps you learn!

🎯 After mastering useReducer → Redux will be a breeze!

