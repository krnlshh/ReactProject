# 🚀 QUICK REFERENCE CHEAT SHEET

## For Interview Exercise Tomorrow

---

## 📦 1. FUNCTIONAL vs CLASS COMPONENTS

### Functional (Modern - Use This!)
```jsx
const MyComponent = () => {
  const [count, setCount] = useState(0);
  
  return <div>{count}</div>;
}
```

### Class (Legacy - Know This!)
```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  
  render() {
    return <div>{this.state.count}</div>;
  }
}
```

---

## 🎣 2. useState HOOK

```jsx
// Simple state
const [name, setName] = useState('');

// Array state
const [users, setUsers] = useState([]);

// Object state
const [user, setUser] = useState({ name: '', email: '' });

// Update state
setName('John');
setUsers([...users, newUser]);  // Immutable
setUser({ ...user, name: 'Jane' });  // Immutable
```

---

## ⚡ 3. useEffect HOOK

```jsx
// Run once on mount
useEffect(() => {
  console.log('Component mounted');
}, []);  // Empty dependency array

// Run when state changes
useEffect(() => {
  console.log('Users changed:', users);
}, [users]);  // Dependency array

// Cleanup
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  
  return () => clearInterval(timer);  // Cleanup
}, []);
```

---

## 📝 4. FORM HANDLING

```jsx
const [formData, setFormData] = useState({ name: '', email: '' });

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();  // Prevent reload!
  
  // Validation
  if (!formData.name || !formData.email) {
    alert('Fill all fields');
    return;
  }
  
  // Submit logic
  console.log(formData);
  
  // Reset
  setFormData({ name: '', email: '' });
};

return (
  <form onSubmit={handleSubmit}>
    <input 
      name="name"
      value={formData.name}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
);
```

---

## 🎯 5. PROPS

```jsx
// Parent passing props
<UserCard 
  user={user} 
  onDelete={handleDelete}
  isActive={true}
/>

// Child receiving props
const UserCard = ({ user, onDelete, isActive }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};
```

---

## 📋 6. LISTS & KEYS

```jsx
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

return (
  <div>
    {users.map((user) => (
      <div key={user.id}>  {/* Unique key! */}
        {user.name}
      </div>
    ))}
  </div>
);
```

---

## 🔀 7. CONDITIONAL RENDERING

```jsx
// Method 1: &&
{users.length === 0 && <p>No users found</p>}

// Method 2: Ternary
{users.length > 0 ? (
  <UserList users={users} />
) : (
  <p>No users</p>
)}

// Method 3: Variable
const content = users.length > 0 
  ? <UserList users={users} />
  : <p>No users</p>;

return <div>{content}</div>;
```

---

## 🧩 8. REACT FRAGMENTS

```jsx
// Short syntax
return (
  <>
    <h1>Title</h1>
    <p>Content</p>
  </>
);

// Long syntax (when you need key)
return (
  <React.Fragment>
    <h1>Title</h1>
    <p>Content</p>
  </React.Fragment>
);
```

---

## 🔄 9. STATE UPDATES (IMMUTABILITY)

```jsx
// ❌ WRONG - Mutates state
users.push(newUser);
setUsers(users);

// ✅ CORRECT - Immutable
setUsers([...users, newUser]);

// Update array
setUsers(users.map(u => 
  u.id === id ? { ...u, name: 'Updated' } : u
));

// Delete from array
setUsers(users.filter(u => u.id !== id));

// Update object
setUser({ ...user, name: 'Updated' });
```

---

## 🎨 10. COMMON PATTERNS

### Filter State
```jsx
const [filter, setFilter] = useState('all');

const filteredUsers = users.filter(u => {
  if (filter === 'active') return u.isActive;
  if (filter === 'inactive') return !u.isActive;
  return true;
});
```

### Toggle State
```jsx
const [isActive, setIsActive] = useState(false);

const toggle = () => setIsActive(!isActive);
// OR
const toggle = () => setIsActive(prev => !prev);
```

### Generate ID
```jsx
const newUser = {
  id: Date.now(),  // Simple unique ID
  name: formData.name,
  email: formData.email
};
```

---

## 🐛 COMMON ERRORS TO AVOID

```jsx
// ❌ Missing key
{users.map(u => <div>{u.name}</div>)}

// ✅ Correct
{users.map(u => <div key={u.id}>{u.name}</div>)}

// ❌ Mutating state
users.push(newUser);

// ✅ Correct
setUsers([...users, newUser]);

// ❌ Missing preventDefault
<form onSubmit={handleSubmit}>

// ✅ Correct
const handleSubmit = (e) => {
  e.preventDefault();
  // ...
}

// ❌ Wrong dependency array
useEffect(() => {
  console.log(users);
});  // Runs on every render!

// ✅ Correct
useEffect(() => {
  console.log(users);
}, [users]);  // Runs when users changes
```

---

## 📱 EXAMPLE USER OBJECT

```jsx
{
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  role: 'Developer',
  isActive: true
}
```

---

## 🎯 INTERVIEW TIPS

1. ✅ **Talk while coding** - Explain your thought process
2. ✅ **Start simple** - Get it working, then improve
3. ✅ **Test frequently** - Check browser after each change
4. ✅ **Handle edge cases** - Empty arrays, invalid inputs
5. ✅ **Use console.log** - Debug and show your process
6. ✅ **Ask questions** - Clarify requirements if needed
7. ✅ **Clean code** - Proper naming, formatting
8. ✅ **Show knowledge** - Mention best practices

---

## 🔥 QUICK START TEMPLATE

```jsx
import React, { useState, useEffect } from 'react';

const InterviewExercise = () => {
  // States
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });
  
  // Effects
  useEffect(() => {
    console.log('Component mounted');
  }, []);
  
  // Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add user logic
  };
  
  const handleDelete = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };
  
  // Render
  return (
    <div>
      <h1>User Manager</h1>
      
      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* inputs */}
      </form>
      
      {/* List */}
      {users.length === 0 ? (
        <p>No users</p>
      ) : (
        users.map(user => (
          <div key={user.id}>
            {user.name}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default InterviewExercise;
```

---

## 🎬 READY?

1. Open: `http://localhost:5173/interview-exercise`
2. Read requirements
3. Start coding!

**Good luck! 🚀**

