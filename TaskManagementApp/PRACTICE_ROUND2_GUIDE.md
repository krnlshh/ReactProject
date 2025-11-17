# 🔥 PRACTICE ROUND 2 - Quick Reference

## 🎯 YOUR CHALLENGE

Build the **SAME** User Profile Manager app **FROM SCRATCH** without looking at your first version!

---

## 📍 NEW FILE LOCATION

**File:** `src/components/TaskDetails/UserProfileManagerPractice.jsx`  
**URL:** `http://localhost:5173/practice-round2`

---

## ✅ **10 STEPS CHECKLIST**

### **STEP 1: States**
```javascript
const [users, setUsers] = useState([]);
const [filter, setFilter] = useState('ALL');
```

---

### **STEP 2: handleSubmit**
- Get values: `e.target.name.value`, etc.
- Validate
- Create newUser object
- Add to array with spread
- Reset form

---

### **STEP 3: Form**
- Input: name (type="text", name="name")
- Input: email (type="email", name="email")
- Select: role (name="role")
- Button: submit
- NO value or onChange (uncontrolled!)

---

### **STEP 4: Display Users**
- Map through users
- Add key={user.id}
- Display: name, email, role, status
- Conditional: "No users" when empty

---

### **STEP 5: useEffects**
```javascript
// On mount
useEffect(() => {
    console.log('Mounted');
}, []);

// When users change
useEffect(() => {
    console.log('Users updated:', users);
}, [users]);
```

---

### **STEP 6: Delete & Toggle**
```javascript
// Delete
const handleDelete = (id) => {
    setUsers(users.filter(u => u.id !== id));
};

// Toggle
const handleToggle = (id) => {
    setUsers(users.map(u => 
        u.id === id ? { ...u, isActive: !u.isActive } : u
    ));
};
```

---

### **STEP 7: Filter**
```javascript
const filteredUsers = users.filter(user => {
    if (filter === 'ALL') return true;
    if (filter === 'ACTIVE') return user.isActive;
    if (filter === 'INACTIVE') return !user.isActive;
});
```

Buttons:
```javascript
<button onClick={() => setFilter('ALL')}>All</button>
<button onClick={() => setFilter('ACTIVE')}>Active</button>
<button onClick={() => setFilter('INACTIVE')}>Inactive</button>
```

---

### **STEP 8: UserCard Component**
```javascript
const UserCard = ({ user, onDelete, onToggle }) => {
    return (
        <div>
            {/* Display user */}
            <button onClick={() => onDelete(user.id)}>Delete</button>
            <button onClick={() => onToggle(user.id)}>Toggle</button>
        </div>
    );
};
```

Usage:
```javascript
<UserCard 
    key={user.id}
    user={user}
    onDelete={handleDelete}
    onToggle={handleToggle}
/>
```

---

### **STEP 9: Fragments**
```javascript
return <>
    {/* content */}
</>
```

---

### **STEP 10: Class vs Functional**
Know the difference theoretically!

---

## 🎯 KEY POINTS TO REMEMBER

1. ✅ **Uncontrolled form** - No value/onChange on inputs
2. ✅ **Keys in lists** - Always add key when mapping
3. ✅ **Immutable updates** - Use spread operator
4. ✅ **Props destructuring** - `({ user, onDelete })`
5. ✅ **Filter before map** - filteredUsers.map()
6. ✅ **e.preventDefault()** - Prevent form reload
7. ✅ **e.target.reset()** - Clear form after submit
8. ✅ **Date.now()** - Simple unique ID
9. ✅ **Arrow functions in onClick** - `() => func(id)`
10. ✅ **Ternary for status** - `user.isActive ? 'Active' : 'Inactive'`

---

## 🚀 **READY?**

1. Open: `http://localhost:5173/practice-round2`
2. Open file: `UserProfileManagerPractice.jsx`
3. **DON'T LOOK** at `UserProfileManager.jsx`!
4. Build from scratch!
5. If stuck, check this guide ONLY!

---

## 💪 **BENEFITS OF ROUND 2:**

- ✅ Reinforce learning
- ✅ Build muscle memory
- ✅ Find weak spots
- ✅ Increase speed
- ✅ Build confidence
- ✅ Interview ready!

---

## 🎯 **CHALLENGE YOURSELF:**

Try to complete it **FASTER** than first time!

**Good luck! You got this!** 🔥

