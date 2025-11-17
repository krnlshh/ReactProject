# 🎯 Task Management System

A comprehensive **Collaborative Task Management Application** built with React 19 to master every React concept through hands-on practice.

---

## 📋 Project Overview

This is a real-world task management system where teams can create, update, and manage tasks collaboratively. Perfect for learning React, building portfolio projects, and interview preparation.

---

## 🚀 Complete User Workflow

### **📱 PHASE 1: Landing & Authentication**

#### **Step 1: User Arrives**
- Lands on **Home/Landing Page**
- Sees:
  - App name and tagline
  - Brief description of features
  - "Login" and "Register" buttons
  - Screenshots/demo

#### **Step 2: Registration (New User)**
- Clicks "Register"
- Fills form:
  - Name
  - Email
  - Password
  - (Optional) Avatar upload or default avatar
- Submits → Account created
- Redirected to Login or directly to Dashboard

#### **Step 3: Login (Existing User)**
- Clicks "Login"
- Enters:
  - Email
  - Password
- Submits → Authenticated
- Redirected to **Dashboard**

---

### **🏠 PHASE 2: Main Dashboard (After Login)**

#### **What User Sees:**

**Navbar** at top:
- Logo/App name
- Dashboard link
- User profile (avatar + name)
- Theme toggle (dark/light)
- Logout button

**Statistics Section:**
- Total tasks: 25
- Completed: 10 (40%)
- In Progress: 8
- Pending: 7
- Progress bar showing completion %

**Search & Filter Bar:**
- Search by task title
- Filter by:
  - Status (All, To Do, In Progress, Completed)
  - Priority (All, High, Medium, Low)
  - Assigned user
  - Date range
- Sort by:
  - Date (newest/oldest)
  - Priority (high to low / low to high)
  - Alphabetical (A-Z / Z-A)

**Task Board (3 Columns):**
```
┌─────────────┬─────────────┬─────────────┐
│   TO DO     │ IN PROGRESS │  COMPLETED  │
│   (7 tasks) │   (8 tasks) │  (10 tasks) │
└─────────────┴─────────────┴─────────────┘
```

**"+ Add New Task" Button** (floating or top-right)

---

### **📝 PHASE 3: Creating a Task**

**User Clicks "Add New Task":**
- Modal or form appears
- User fills:
  - **Task Title** (required)
  - **Description** (optional)
  - **Priority**: High / Medium / Low
  - **Status**: To Do / In Progress / Completed
  - **Assign To**: Select from user list
  - **Deadline**: Date picker
- Clicks "Save"
- Task appears in appropriate column
- Success message: "Task created successfully!"
- Modal closes

---

### **👁️ PHASE 4: Viewing Task Details**

**User Clicks on a Task Card:**
- Task detail modal/page opens
- Shows:
  - Title
  - Full description
  - Status
  - Priority (with color indicator)
  - Assigned to (user name + avatar)
  - Created date
  - Deadline date
  - Countdown timer (if deadline approaching)
  
**Comments Section:**
- List of all comments
- Each comment shows:
  - User name + avatar
  - Comment text
  - Timestamp
- **Add Comment** box at bottom
  
**Action Buttons:**
- Edit Task
- Delete Task
- Mark as Complete
- Close

---

### **✏️ PHASE 5: Editing a Task**

**From Task Detail, User Clicks "Edit":**
- Edit form appears (pre-filled with current data)
- User can change:
  - Title
  - Description
  - Priority
  - Status
  - Assigned user
  - Deadline
- Clicks "Update"
- Task updated in real-time
- If status changed → moves to different column
- Success message: "Task updated successfully!"

---

### **🗑️ PHASE 6: Deleting a Task**

**User Clicks "Delete" Button:**
- Confirmation dialog appears:
  - "Are you sure you want to delete this task?"
  - "Delete" button (red)
  - "Cancel" button
- If confirms:
  - Task removed from board
  - Success message: "Task deleted successfully!"
- If cancels:
  - Nothing happens

---

### **💬 PHASE 7: Adding Comments**

**From Task Detail Page:**
- User scrolls to comments section
- Types comment in text box
- Clicks "Add Comment"
- Comment appears instantly
- Shows:
  - Current user's name + avatar
  - Comment text
  - "Just now" timestamp
- Other users can see this comment (real-time collaboration)

---

### **🔍 PHASE 8: Search & Filter**

**Scenario A: Searching**
- User types in search box: "API"
- Board filters in real-time
- Shows only tasks with "API" in title
- Other tasks hide

**Scenario B: Filtering by Priority**
- User selects "High Priority" from filter
- Board shows only high-priority tasks
- All columns update

**Scenario C: Filtering by Status**
- User selects "In Progress" from filter
- Only "In Progress" column visible
- Other columns hide

**Scenario D: Combining Filters**
- User selects:
  - Priority: High
  - Assigned to: John Doe
- Shows only high-priority tasks assigned to John

---

### **✅ PHASE 9: Completing Tasks**

**User Marks Task as Complete:**
- Either:
  - Drag task to "Completed" column (bonus feature)
  - Click "Mark Complete" button
  - Change status to "Completed" in edit form
- Task moves to "Completed" column
- Completion percentage updates
- Visual celebration (maybe confetti animation - bonus!)

---

### **🎨 PHASE 10: Theme Toggle**

**User Clicks Theme Toggle:**
- Switches between:
  - Light mode (white background)
  - Dark mode (dark background)
- Entire app changes color scheme
- Preference saved (persists after refresh)

---

### **👤 PHASE 11: User Profile**

**User Clicks on Profile:**
- Dropdown or page shows:
  - User info (name, email, avatar)
  - "Edit Profile" option
  - "Logout" button

**Edit Profile:**
- Change name
- Change email
- Upload new avatar
- Change password

---

### **🚪 PHASE 12: Logout**

**User Clicks Logout:**
- Session ends
- Redirected to Login page
- Cannot access Dashboard without login

---

### **🔒 PHASE 13: Protected Routes**

**If User Tries to Access Dashboard Without Login:**
- Automatically redirected to Login page
- Message: "Please login to continue"

---

## 📊 Complete User Journey Map

```
Landing Page
    ↓
[New User]        [Existing User]
    ↓                  ↓
 Register           Login
    ↓                  ↓
    └─────→ Dashboard ←┘
            ↓
    ┌───────┴───────┬───────────┬──────────┐
    ↓               ↓           ↓          ↓
View Tasks    Create Task   Edit Task   Delete Task
    ↓               ↓           ↓          ↓
Task Details → Add Comments → Update → Complete
    ↓
Search/Filter
    ↓
View Statistics
    ↓
Toggle Theme
    ↓
Logout
```

---

## 🎯 Key User Actions

1. ✅ **Register/Login** - Access the app
2. ✅ **View Dashboard** - See all tasks
3. ✅ **Create Task** - Add new tasks
4. ✅ **View Task Details** - See full task info
5. ✅ **Edit Task** - Update task info
6. ✅ **Delete Task** - Remove tasks
7. ✅ **Add Comments** - Collaborate on tasks
8. ✅ **Search Tasks** - Find specific tasks
9. ✅ **Filter Tasks** - View by criteria
10. ✅ **Complete Tasks** - Mark as done
11. ✅ **Toggle Theme** - Dark/Light mode
12. ✅ **View Profile** - Manage account
13. ✅ **Logout** - End session

---

## 🛠️ Tech Stack

- **React 19** - UI library
- **React Router v7** - Navigation
- **Bootstrap 5** - Styling
- **React Icons** - Icons
- **Vite** - Build tool
- **JSON Server** - Mock API

---

## 📁 Project Structure

```
TaskManagementApp/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── Dashboard/
│   │   │   ├── TaskBoard.jsx
│   │   │   ├── TaskColumn.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   └── TaskStats.jsx
│   │   ├── TaskDetails/
│   │   │   ├── TaskDetailModal.jsx
│   │   │   ├── CommentList.jsx
│   │   │   └── CommentForm.jsx
│   │   ├── Forms/
│   │   │   ├── TaskForm.jsx
│   │   │   └── SearchBar.jsx
│   │   └── Common/
│   │       ├── Navbar.jsx
│   │       ├── ThemeToggle.jsx
│   │       ├── LoadingSpinner.jsx
│   │       └── ErrorBoundary.jsx
│   ├── hooks/
│   │   ├── useFetch.js
│   │   ├── useLocalStorage.js
│   │   ├── useDebounce.js
│   │   └── useForm.js
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   └── NotFound.jsx
│   └── App.jsx
├── server/
│   └── db.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start JSON Server (in separate terminal):**
```bash
cd server
json-server --watch db.json --port 3000
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:5173
```

---

## 📚 React Concepts Covered

### Hooks
- ✅ useState - State management
- ✅ useEffect - Side effects
- ✅ useContext - Global state
- ✅ useRef - DOM references
- ✅ useMemo - Performance optimization
- ✅ useCallback - Function memoization

### Advanced Concepts
- ✅ Custom Hooks
- ✅ Context API
- ✅ Protected Routes
- ✅ Error Boundaries
- ✅ Lazy Loading
- ✅ Code Splitting

### React Router
- ✅ Routing & Navigation
- ✅ Nested Routes
- ✅ URL Parameters
- ✅ Protected Routes

---

## 🎨 Features

- 🔐 Authentication (Login/Register)
- 📊 Task Dashboard with 3 columns
- ✏️ CRUD Operations (Create, Read, Update, Delete)
- 🔍 Search & Advanced Filtering
- 💬 Task Comments System
- 📈 Task Statistics Dashboard
- 🌓 Dark/Light Theme Toggle
- ⚡ Real-time Updates
- 🎯 Priority Color Coding
- ⏰ Deadline Countdown
- 👤 User Profile Management

---

## 📝 Development Plan

### Day 1: Setup
- ✅ Folder structure
- ✅ Dependencies installed
- ⏳ JSON Server setup
- ⏳ Basic routing

### Day 2-3: Core Features
- Task list display
- Add task form
- Edit/Delete functionality

### Day 4: State Management
- AuthContext
- ThemeContext
- Protected routes

### Day 5-6: Advanced Features
- Search & filters
- Custom hooks
- Comments system

### Day 7: Optimization
- Lazy loading
- Memoization
- Error boundaries

### Day 8: Polish
- Loading states
- Error handling
- Responsive design

---

## 🤝 Contributing

This is a learning project. Feel free to:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

This project is for educational purposes.

---

**Built with ❤️ for learning React 19**
