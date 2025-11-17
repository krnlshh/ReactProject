# 🎯 INTERVIEW EXERCISE GUIDE

## User Profile Manager - Step by Step Guide

### 📁 File: `src/pages/InterviewExercise.jsx`

---

## 🚀 GETTING STARTED

1. Open `InterviewExercise.jsx`
2. Read all requirements in comments
3. Start coding step by step
4. Test after each step

---

## 📝 STEP-BY-STEP BREAKDOWN

### **STEP 1: Setup Main Component** (2 min)
```
✅ Create functional component
✅ Import React, useState, useEffect
✅ Return basic JSX structure
```

**What it tests:**
- Functional component syntax
- Import statements


---

### **STEP 2: Create State** (3 min)
```
✅ useState for users array
✅ useState for form inputs (name, email, role)
✅ useState for filter (all/active/inactive)
```

**What it tests:**
- useState hook understanding
- State management
- Multiple state variables


---

### **STEP 3: Build Add User Form** (5 min)
```
✅ Create form with inputs: name, email, role (dropdown)
✅ Controlled inputs (value + onChange)
✅ handleSubmit function
✅ Validation (check empty fields)
✅ Add user to state (with unique ID)
✅ Reset form after submit
```

**What it tests:**
- Form handling in React
- Controlled components
- Event handling
- State updates


---

### **STEP 4: Display User List** (5 min)
```
✅ Map over users array
✅ Create user cards
✅ Add unique key prop
✅ Display: name, email, role, active status
```

**What it tests:**
- List rendering
- Keys in React
- Props usage
- .map() method


---

### **STEP 5: Conditional Rendering** (5 min)
```
✅ Show "No users" message when array empty
✅ Show user count
✅ Filter buttons (All/Active/Inactive)
✅ Conditionally render filtered users
```

**What it tests:**
- Conditional rendering (&&, ternary)
- Array filtering
- Dynamic UI


---

### **STEP 6: Add useEffect** (3 min)
```
✅ useEffect on mount (empty dependency)
✅ useEffect when users change (users dependency)
✅ Console.log messages
✅ Optional: cleanup function
```

**What it tests:**
- useEffect understanding
- Dependency array
- Component lifecycle
- When effects run


---

### **STEP 7: Create UserCard Component** (5 min)
```
✅ New component that receives props
✅ Display user data from props
✅ Add "Toggle Active" button
✅ Add "Delete" button
✅ Pass callback functions from parent
```

**What it tests:**
- Component composition
- Props (passing data down)
- Props (passing functions)
- Parent-child communication


---

### **STEP 8: Add Functionality** (5 min)
```
✅ Toggle user active status
✅ Delete user from list
✅ Filter users (Active/All/Inactive)
✅ Update state immutably
```

**What it tests:**
- State updates (immutability)
- Array methods (.filter, .map)
- Function props
- Event handling


---

### **STEP 9: Use React Fragments** (2 min)
```
✅ Replace unnecessary divs with <>...</>
✅ Use where returning multiple elements
```

**What it tests:**
- React Fragments knowledge
- Clean JSX


---

### **STEP 10: Create Class Component** (5 min)
```
✅ Create "UserStats" class component
✅ Receive props (users array)
✅ Calculate: total, active, inactive
✅ Display stats
```

**What it tests:**
- Class component syntax
- this.props
- Comparison with functional components


---

## 🎯 TOPICS COVERAGE MAP

| Step | Topics Covered |
|------|----------------|
| 1 | Functional Components |
| 2 | useState Hook, State Management |
| 3 | Form Handling, Controlled Components |
| 4 | Lists & Keys, Props |
| 5 | Conditional Rendering |
| 6 | useEffect, Component Lifecycle |
| 7 | Props, Component Communication |
| 8 | State Updates, Re-rendering |
| 9 | React Fragments |
| 10 | Class Components |

---

## 💡 TIPS FOR SUCCESS

1. **Talk while coding** - Explain your thought process
2. **Start simple** - Get basic version working first
3. **Test frequently** - Check in browser after each step
4. **Ask questions** - If requirements unclear
5. **Handle errors** - Add try-catch where needed
6. **Clean code** - Use proper naming, formatting

---

## 🐛 COMMON MISTAKES TO AVOID

❌ Forgetting unique keys in lists
❌ Mutating state directly
❌ Missing dependency array in useEffect
❌ Not preventing form default behavior
❌ Forgetting to bind 'this' in class components
❌ Not validating form inputs

---

## ✅ EVALUATION CRITERIA

### **Code Quality (30%)**
- Clean, readable code
- Proper naming conventions
- Good component structure

### **Functionality (40%)**
- All features working
- No console errors
- Proper error handling

### **React Concepts (30%)**
- Correct use of hooks
- Props flow understanding
- State management
- Component lifecycle

---

## 🎬 READY TO START?

1. Open the project: `npm run dev`
2. Navigate to InterviewExercise component
3. Start with STEP 1
4. Code, test, repeat!

**Good luck! 🚀**

---

## 📞 NEED HELP?

If stuck on any step:
1. Read error messages carefully
2. Check console for logs
3. Review the step requirements
4. Ask for clarification

Remember: The interviewer wants to see your problem-solving process!

