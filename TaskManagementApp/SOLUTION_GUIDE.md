# 🔒 SOLUTION GUIDE

## ⚠️ DON'T OPEN UNTIL YOU FINISH!

This file contains hints and solutions for the interview exercise.

Try to complete the exercise on your own first!

---

## 🎯 STEP-BY-STEP HINTS

### Step 1: Basic Structure
<details>
<summary>Click to see hint</summary>

```jsx
import React, { useState, useEffect } from 'react';

const InterviewExercise = () => {
  return (
    <div className="container">
      <h1>User Profile Manager</h1>
    </div>
  );
};

export default InterviewExercise;
```
</details>

---

### Step 2: Initial States
<details>
<summary>Click to see hint</summary>

```jsx
const [users, setUsers] = useState([]);
const [formData, setFormData] = useState({
  name: '',
  email: '',
  role: 'Developer'
});
const [filter, setFilter] = useState('all');
```
</details>

---

### Step 3: Form JSX
<details>
<summary>Click to see hint</summary>

```jsx
<form onSubmit={handleSubmit}>
  <input
    type="text"
    name="name"
    placeholder="Name"
    value={formData.name}
    onChange={handleChange}
    required
  />
  
  <input
    type="email"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
    required
  />
  
  <select
    name="role"
    value={formData.role}
    onChange={handleChange}
  >
    <option value="Developer">Developer</option>
    <option value="Designer">Designer</option>
    <option value="Manager">Manager</option>
  </select>
  
  <button type="submit">Add User</button>
</form>
```
</details>

---

### Step 4: Form Handlers
<details>
<summary>Click to see hint</summary>

```jsx
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  
  if (!formData.name || !formData.email) {
    alert('Please fill all fields');
    return;
  }
  
  const newUser = {
    id: Date.now(),
    ...formData,
    isActive: true
  };
  
  setUsers([...users, newUser]);
  
  setFormData({
    name: '',
    email: '',
    role: 'Developer'
  });
};
```
</details>

---

### Step 5: Display Users
<details>
<summary>Click to see hint</summary>

```jsx
{users.length === 0 ? (
  <p>No users added yet. Add your first user!</p>
) : (
  <div className="users-list">
    {filteredUsers.map(user => (
      <UserCard 
        key={user.id}
        user={user}
        onToggle={handleToggleActive}
        onDelete={handleDelete}
      />
    ))}
  </div>
)}
```
</details>

---

### Step 6: UserCard Component
<details>
<summary>Click to see hint</summary>

```jsx
const UserCard = ({ user, onToggle, onDelete }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Status: {user.isActive ? 'Active' : 'Inactive'}</p>
      
      <button onClick={() => onToggle(user.id)}>
        {user.isActive ? 'Deactivate' : 'Activate'}
      </button>
      
      <button onClick={() => onDelete(user.id)}>
        Delete
      </button>
    </div>
  );
};
```
</details>

---

### Step 7: Toggle & Delete Functions
<details>
<summary>Click to see hint</summary>

```jsx
const handleToggleActive = (id) => {
  setUsers(users.map(user => 
    user.id === id 
      ? { ...user, isActive: !user.isActive }
      : user
  ));
};

const handleDelete = (id) => {
  if (window.confirm('Are you sure?')) {
    setUsers(users.filter(user => user.id !== id));
  }
};
```
</details>

---

### Step 8: Filter Logic
<details>
<summary>Click to see hint</summary>

```jsx
const filteredUsers = users.filter(user => {
  if (filter === 'active') return user.isActive;
  if (filter === 'inactive') return !user.isActive;
  return true;
});

// Filter buttons
<div className="filter-buttons">
  <button 
    onClick={() => setFilter('all')}
    className={filter === 'all' ? 'active' : ''}
  >
    All ({users.length})
  </button>
  
  <button 
    onClick={() => setFilter('active')}
    className={filter === 'active' ? 'active' : ''}
  >
    Active ({users.filter(u => u.isActive).length})
  </button>
  
  <button 
    onClick={() => setFilter('inactive')}
    className={filter === 'inactive' ? 'active' : ''}
  >
    Inactive ({users.filter(u => !u.isActive).length})
  </button>
</div>
```
</details>

---

### Step 9: useEffect
<details>
<summary>Click to see hint</summary>

```jsx
useEffect(() => {
  console.log('Component mounted');
  
  return () => {
    console.log('Component will unmount');
  };
}, []);

useEffect(() => {
  console.log('Users updated:', users);
}, [users]);
```
</details>

---

### Step 10: Class Component (UserStats)
<details>
<summary>Click to see hint</summary>

```jsx
class UserStats extends React.Component {
  render() {
    const { users } = this.props;
    const totalUsers = users.length;
    const activeUsers = users.filter(u => u.isActive).length;
    const inactiveUsers = totalUsers - activeUsers;
    
    return (
      <div className="stats">
        <h3>Statistics</h3>
        <p>Total Users: {totalUsers}</p>
        <p>Active: {activeUsers}</p>
        <p>Inactive: {inactiveUsers}</p>
      </div>
    );
  }
}

// Usage
<UserStats users={users} />
```
</details>

---

## 🎨 BONUS: Styling
<details>
<summary>Click to see CSS hints</summary>

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.user-card {
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  background: white;
}

.user-card h3 {
  margin: 0 0 10px 0;
  color: #333;
}

.user-card button {
  margin-right: 10px;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.filter-buttons button {
  margin-right: 10px;
  padding: 10px 20px;
  border: 2px solid #007bff;
  background: white;
  color: #007bff;
  border-radius: 5px;
  cursor: pointer;
}

.filter-buttons button.active {
  background: #007bff;
  color: white;
}

form {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

form input,
form select {
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

form button {
  padding: 10px 20px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```
</details>

---

## 🔥 COMPLETE SOLUTION

**⚠️ ONLY LOOK AT THIS AFTER YOU'VE TRIED EVERYTHING!**

<details>
<summary>Click to see FULL SOLUTION</summary>

```jsx
import React, { useState, useEffect } from 'react';
import './InterviewExercise.css';

// Child Component - UserCard
const UserCard = ({ user, onToggle, onDelete }) => {
  return (
    <div className="user-card">
      <div className="user-info">
        <h3>{user.name}</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p>
          <strong>Status:</strong> 
          <span className={user.isActive ? 'active-badge' : 'inactive-badge'}>
            {user.isActive ? '🟢 Active' : '🔴 Inactive'}
          </span>
        </p>
      </div>
      
      <div className="user-actions">
        <button 
          className="toggle-btn"
          onClick={() => onToggle(user.id)}
        >
          {user.isActive ? 'Deactivate' : 'Activate'}
        </button>
        
        <button 
          className="delete-btn"
          onClick={() => onDelete(user.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

// Class Component - UserStats
class UserStats extends React.Component {
  render() {
    const { users } = this.props;
    const totalUsers = users.length;
    const activeUsers = users.filter(u => u.isActive).length;
    const inactiveUsers = totalUsers - activeUsers;
    
    return (
      <div className="stats-container">
        <h3>📊 User Statistics</h3>
        <div className="stats-grid">
          <div className="stat-card">
            <h4>{totalUsers}</h4>
            <p>Total Users</p>
          </div>
          <div className="stat-card active">
            <h4>{activeUsers}</h4>
            <p>Active</p>
          </div>
          <div className="stat-card inactive">
            <h4>{inactiveUsers}</h4>
            <p>Inactive</p>
          </div>
        </div>
      </div>
    );
  }
}

// Main Functional Component
const InterviewExercise = () => {
  // States
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Developer'
  });
  const [filter, setFilter] = useState('all');
  
  // useEffect - Component lifecycle
  useEffect(() => {
    console.log('✅ Component mounted');
    
    return () => {
      console.log('❌ Component will unmount');
    };
  }, []);
  
  useEffect(() => {
    console.log('👥 Users updated:', users);
  }, [users]);
  
  // Form handlers
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('⚠️ Please fill in all fields!');
      return;
    }
    
    // Create new user
    const newUser = {
      id: Date.now(),
      ...formData,
      isActive: true
    };
    
    // Add to state (immutable)
    setUsers([...users, newUser]);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      role: 'Developer'
    });
    
    console.log('✅ User added:', newUser);
  };
  
  // Toggle active status
  const handleToggleActive = (id) => {
    setUsers(users.map(user => 
      user.id === id 
        ? { ...user, isActive: !user.isActive }
        : user
    ));
  };
  
  // Delete user
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
      console.log('🗑️ User deleted:', id);
    }
  };
  
  // Filter users
  const filteredUsers = users.filter(user => {
    if (filter === 'active') return user.isActive;
    if (filter === 'inactive') return !user.isActive;
    return true;
  });
  
  // Render
  return (
    <div className="interview-exercise-container">
      <h1>🎯 User Profile Manager</h1>
      
      {/* Stats - Class Component */}
      <UserStats users={users} />
      
      {/* Add User Form */}
      <div className="form-container">
        <h2>➕ Add New User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
            <option value="Tester">Tester</option>
          </select>
          
          <button type="submit" className="submit-btn">
            Add User
          </button>
        </form>
      </div>
      
      {/* Filter Buttons */}
      <div className="filter-section">
        <h3>Filter Users:</h3>
        <div className="filter-buttons">
          <button 
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'active' : ''}
          >
            All ({users.length})
          </button>
          
          <button 
            onClick={() => setFilter('active')}
            className={filter === 'active' ? 'active' : ''}
          >
            Active ({users.filter(u => u.isActive).length})
          </button>
          
          <button 
            onClick={() => setFilter('inactive')}
            className={filter === 'inactive' ? 'active' : ''}
          >
            Inactive ({users.filter(u => !u.isActive).length})
          </button>
        </div>
      </div>
      
      {/* Users List - Conditional Rendering */}
      <div className="users-section">
        <h2>👥 Users List</h2>
        
        {/* React Fragment Example */}
        <>
          {filteredUsers.length === 0 ? (
            <div className="empty-state">
              <p>📭 No users found!</p>
              {users.length === 0 ? (
                <p>Add your first user using the form above.</p>
              ) : (
                <p>Try changing the filter.</p>
              )}
            </div>
          ) : (
            <div className="users-grid">
              {filteredUsers.map(user => (
                <UserCard 
                  key={user.id}
                  user={user}
                  onToggle={handleToggleActive}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default InterviewExercise;
```
</details>

---

## 💡 KEY TAKEAWAYS

1. ✅ **Functional components** are modern React
2. ✅ **useState** manages component state
3. ✅ **useEffect** handles side effects and lifecycle
4. ✅ **Props** pass data from parent to child
5. ✅ **Keys** are required in lists
6. ✅ **Immutability** is crucial for state updates
7. ✅ **Conditional rendering** controls what displays
8. ✅ **Form handling** requires controlled components
9. ✅ **Class components** are legacy but still used
10. ✅ **React Fragments** avoid unnecessary divs

---

## 🎯 INTERVIEW TALKING POINTS

When explaining your code, mention:

- "I'm using functional components because they're the modern React approach"
- "useState manages the component state immutably"
- "useEffect runs on mount and when dependencies change"
- "I'm passing props down to child components for reusability"
- "Keys help React identify which items changed"
- "Conditional rendering shows different UI based on state"
- "Form is controlled - React manages the input state"
- "I'm using spread operator for immutable updates"

---

Good luck! 🚀

