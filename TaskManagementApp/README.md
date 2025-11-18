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

📚 CORE FUNDAMENTALS (Must Know)
1. Components
✅ Functional Components
✅ Class Components (legacy, but understand for maintenance)
✅ Component Composition
✅ HOCs (Higher-Order Components)
✅ Render Props Pattern
✅ Compound Components
✅ Controlled vs Uncontrolled Components
2. JSX & Rendering
✅ JSX Syntax & Transpilation (Babel)
✅ Virtual DOM & Reconciliation
✅ React.createElement() under the hood
✅ Conditional Rendering (&&, ternary, early return)
✅ Lists & Keys (why keys matter)
✅ Fragments (<></>, <React.Fragment>)
3. State Management
✅ useState
✅ useReducer
✅ State lifting
✅ Immutable state updates
✅ Batching updates (automatic in React 18)
✅ Concurrent features (React 18+)
4. Props
✅ Props drilling
✅ Children prop
✅ Render props
✅ Prop types validation (PropTypes, TypeScript)
✅ Default props
✅ Spreading props
🎣 HOOKS MASTERY (Essential)
Built-in Hooks:
✅ useState - State management
✅ useEffect - Side effects, cleanup, dependencies
✅ useContext - Context API consumption
✅ useReducer - Complex state logic
✅ useCallback - Memoize functions
✅ useMemo - Memoize values
✅ useRef - DOM refs, persisting values
✅ useLayoutEffect - Synchronous effects
✅ useImperativeHandle - Customize ref exposure
✅ useDebugValue - Custom hook debugging
React 18+ Hooks:
✅ useId - Unique IDs for accessibility
✅ useTransition - Non-blocking updates
✅ useDeferredValue - Defer expensive renders
✅ useSyncExternalStore - Subscribe to external stores
✅ useInsertionEffect - CSS-in-JS libraries
Custom Hooks:
✅ Building reusable hooks
✅ Hook composition
✅ Hook naming conventions (use prefix)
✅ Common patterns (useDebounce, useThrottle, useFetch, useLocalStorage)
🚀 PERFORMANCE OPTIMIZATION (Senior Must-Know)
Optimization Techniques:
✅ React.memo - Prevent unnecessary re-renders
✅ useMemo - Memoize expensive calculations
✅ useCallback - Prevent function recreation
✅ Code splitting - React.lazy(), Suspense
✅ Dynamic imports - Route-based splitting
✅ Virtualization - react-window, react-virtualized
✅ Debouncing & Throttling - Input optimization
✅ Web Workers - Offload heavy computations
Profiling & Debugging:
✅ React DevTools Profiler
✅ Chrome Performance tab
✅ Why Did You Render
✅ Identifying re-render causes
✅ Bundle size analysis (webpack-bundle-analyzer)
🏗️ ADVANCED PATTERNS (Expert Level)
Design Patterns:
✅ Container/Presentational - Separation of concerns
✅ Compound Components - Implicit state sharing
✅ Render Props - Flexible rendering
✅ HOCs - Cross-cutting concerns
✅ Provider Pattern - Context API
✅ Hooks Pattern - Modern state logic
✅ State Reducer Pattern - Inversion of control
✅ Control Props Pattern - Parent control
Architecture:
✅ Feature-based folder structure
✅ Atomic Design (atoms, molecules, organisms)
✅ Clean Architecture principles
✅ Separation of concerns
✅ Dependency injection
🌐 ROUTING (Essential)
React Router (v6+):
✅ BrowserRouter, Routes, Route
✅ Nested routes
✅ Dynamic routes (:id)
✅ useNavigate, useParams, useLocation, useSearchParams
✅ Protected routes
✅ Lazy loading routes
✅ Route transitions
✅ Programmatic navigation
✅ Route guards
🗂️ STATE MANAGEMENT (Senior Must-Know)
Context API:
✅ createContext, Provider, Consumer
✅ useContext hook
✅ Multiple contexts
✅ Context performance issues
Redux (Still relevant):
✅ Redux Toolkit (modern approach)
✅ Store, Reducers, Actions
✅ useSelector, useDispatch
✅ Redux Thunk / Redux Saga
✅ Redux DevTools
✅ Immutable updates (Immer)
Modern Alternatives:
✅ Zustand - Lightweight state
✅ Jotai - Atomic state
✅ Recoil - Facebook's solution
✅ MobX - Observable state
✅ TanStack Query (React Query) - Server state
✅ SWR - Data fetching
🌐 DATA FETCHING (Modern Approach)
Patterns:
✅ fetch() / axios
✅ useEffect for fetching
✅ TanStack Query (React Query) - Industry standard
✅ SWR
✅ Suspense for Data Fetching
✅ Error boundaries
✅ Loading states
✅ Caching strategies
✅ Optimistic updates
✅ Polling & Real-time updates
📝 FORMS (Essential)
Form Management:
✅ Controlled components
✅ Uncontrolled components (useRef)
✅ React Hook Form - Modern, performant
✅ Formik - Legacy but still used
✅ Validation (Yup, Zod)
✅ Form state management
✅ Field arrays
✅ Form submission
✅ Error handling
🎨 STYLING (Must Know Multiple Approaches)
CSS Approaches:
✅ CSS Modules - Scoped styles
✅ Styled-components - CSS-in-JS
✅ Emotion - CSS-in-JS
✅ Tailwind CSS - Utility-first (trending)
✅ SCSS/SASS - Preprocessors
✅ CSS-in-JS (pros/cons)
✅ Vanilla Extract - Zero-runtime CSS
UI Libraries:
✅ Material-UI (MUI)
✅ Ant Design
✅ Chakra UI
✅ Shadcn/ui (trending)
✅ Radix UI (headless)
🧪 TESTING (Senior Must-Know)
Testing Tools:
✅ Jest - Unit testing
✅ React Testing Library - Component testing
✅ Vitest - Modern Jest alternative
✅ Cypress - E2E testing
✅ Playwright - Modern E2E
✅ MSW (Mock Service Worker) - API mocking
Testing Concepts:
✅ Unit tests
✅ Integration tests
✅ E2E tests
✅ Snapshot testing
✅ Test coverage
✅ TDD approach
✅ Testing hooks
✅ Testing async code
🔒 TYPESCRIPT (Modern Must-Have)
TypeScript with React:
✅ Component typing (FC, ReactNode, ReactElement)
✅ Props interfaces/types
✅ useState typing
✅ useRef typing
✅ Event types (ChangeEvent, FormEvent, MouseEvent)
✅ Custom hook typing
✅ Generic components
✅ Utility types (Partial, Pick, Omit, Record)
✅ forwardRef typing
⚡ REACT 18+ FEATURES (Must Know)
New in React 18:
✅ Concurrent Rendering - Non-blocking updates
✅ Automatic Batching - Better performance
✅ useTransition - Mark updates as non-urgent
✅ useDeferredValue - Defer expensive updates
✅ Suspense - Data fetching & code splitting
✅ Streaming SSR - Faster server rendering
✅ Selective Hydration - Prioritize interactive parts
🏢 SERVER-SIDE RENDERING (SSR) (Senior Level)
Frameworks:
✅ Next.js - Full-stack React (Industry standard)
App Router (React Server Components)
Pages Router (traditional)
Static Generation (SSG)
Server-Side Rendering (SSR)
Incremental Static Regeneration (ISR)
API Routes
Middleware
Image optimization
✅ Remix - Modern full-stack
✅ Gatsby - Static sites
Concepts:
✅ Hydration
✅ SEO optimization
✅ Meta tags management
✅ Server Components vs Client Components
✅ Streaming
🔐 SECURITY (Must Know)
Security Practices:
✅ XSS prevention
✅ CSRF protection
✅ Sanitizing user input
✅ dangerouslySetInnerHTML (when/why to avoid)
✅ JWT authentication
✅ OAuth/OAuth2
✅ Environment variables
✅ HTTPS/SSL
✅ Content Security Policy
🛠️ BUILD TOOLS & ECOSYSTEM (Must Know)
Build Tools:
✅ Vite - Modern, fast (recommended)
✅ Webpack - Traditional bundler
✅ Create React App (deprecated, know alternatives)
✅ Turbopack - Next.js bundler
✅ esbuild - Fast bundler
Package Managers:
✅ npm
✅ yarn
✅ pnpm (faster, space-efficient)
Development Tools:
✅ ESLint - Code linting
✅ Prettier - Code formatting
✅ Husky - Git hooks
✅ TypeScript - Type safety
✅ Babel - JavaScript compiler
🎯 REAL-WORLD SKILLS (Expert Level)
Architecture Decisions:
✅ When to use Context vs State Management library
✅ Component library vs custom components
✅ SSR vs CSR vs SSG tradeoffs
✅ Monorepo vs multi-repo
✅ Micro-frontends
Performance:
✅ Core Web Vitals (LCP, FID, CLS)
✅ Lighthouse audits
✅ Bundle size optimization
✅ Tree shaking
✅ Code splitting strategies
✅ Image optimization
✅ Font optimization
Accessibility (A11y):
✅ ARIA attributes
✅ Keyboard navigation
✅ Screen reader support
✅ Focus management
✅ Semantic HTML
✅ Color contrast
✅ WCAG guidelines
Best Practices:
✅ Component design principles
✅ Error boundaries
✅ Portals (Modals, Tooltips)
✅ forwardRef
✅ Refs and DOM manipulation
✅ Event handling best practices
✅ Naming conventions
✅ File/folder structure
🔄 DEPLOYMENT & CI/CD (Must Know)
Deployment:
✅ Vercel (easiest for Next.js)
✅ Netlify
✅ AWS (S3, CloudFront, Amplify)
✅ Docker containerization
✅ Kubernetes orchestration
CI/CD:
✅ GitHub Actions
✅ GitLab CI
✅ Jenkins
✅ CircleCI
📊 MONITORING & ANALYTICS (Production Skills)
Tools:
✅ Sentry - Error tracking
✅ LogRocket - Session replay
✅ Google Analytics
✅ Mixpanel
✅ New Relic / Datadog - APM
🎓 SOFT SKILLS & LEADERSHIP (10 Years Experience)
Technical Leadership:
✅ Code reviews
✅ Architecture decisions
✅ Mentoring junior developers
✅ Technical documentation
✅ System design
✅ Performance audits
✅ Migration strategies (Class → Functional, CRA → Vite)
✅ Interviewing candidates
🔥 CURRENT TRENDS (2024-2025)
✅ React Server Components (Next.js App Router)
✅ Server Actions (Next.js 14+)
✅ Tailwind CSS - Utility-first styling
✅ Shadcn/ui - Copy-paste components
✅ TanStack Query - Server state management
✅ Zod - Schema validation
✅ tRPC - End-to-end type safety
✅ Turbopack - Next-gen bundler
✅ Bun - Fast runtime
✅ CHECKLIST FOR 10 YEARS EXPERIENCE:
You should be able to:
✅ Build scalable React applications from scratch
✅ Make architecture decisions (SSR vs CSR, state management)
✅ Optimize performance (Core Web Vitals, bundle size)
✅ Implement complex state management
✅ Write clean, maintainable, testable code
✅ Lead code reviews and mentor juniors
✅ Design component APIs
✅ Handle production issues and debugging
✅ Stay current with React ecosystem
✅ Make technology choices for projects
