const ChallengeDetails = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-12">
                    {/* Header */}
                    <div className="card shadow-lg border-0 mb-4">
                        <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                            <h1 className="mb-0">🎯 Ultimate React Challenge</h1>
                            <p className="mb-0 mt-2 text-center">Build a Task Management System with Real-Time Collaboration</p>
                        </div>
                    </div>

                    {/* Overview */}
                    <div className="card shadow mb-4">
                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0">📋 Project Overview</h3>
                        </div>
                        <div className="card-body">
                            <div className="alert alert-info">
                                <h5 className="alert-heading">🎯 What You'll Build:</h5>
                                <p className="mb-0">A <strong>collaborative task management app</strong> where multiple users can create, update, and manage tasks in real-time. This will test EVERY React concept you've learned!</p>
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="card shadow mb-4">
                        <div className="card-header bg-success text-white">
                            <h3 className="mb-0">🎨 Features to Implement (12 Core Features)</h3>
                        </div>
                        <div className="card-body">
                            <div className="accordion" id="featuresAccordion">
                                
                                {/* Feature 1 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#feature1">
                                            <strong>1. Authentication System 🔐</strong>
                                        </button>
                                    </h2>
                                    <div id="feature1" className="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Login/Register pages</li>
                                                <li>Protected routes (dashboard only for logged-in users)</li>
                                                <li>User profile with avatar</li>
                                                <li><strong>Concepts:</strong> Context API, useNavigate, Error Boundaries</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#feature2">
                                            <strong>2. Task Dashboard 📊</strong>
                                        </button>
                                    </h2>
                                    <div id="feature2" className="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Display tasks in categories: "To Do", "In Progress", "Completed"</li>
                                                <li>Each task shows: title, description, priority, assigned user, deadline</li>
                                                <li>Color-coded priority (High=red, Medium=yellow, Low=green)</li>
                                                <li><strong>Concepts:</strong> useState, useEffect, map(), conditional rendering</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#feature3">
                                            <strong>3. Task CRUD Operations ✏️</strong>
                                        </button>
                                    </h2>
                                    <div id="feature3" className="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Create new task (modal/form)</li>
                                                <li>Edit existing task</li>
                                                <li>Delete task (with confirmation)</li>
                                                <li>Mark task as complete</li>
                                                <li><strong>Concepts:</strong> Controlled forms, useRef, Custom validation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 4 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#feature4">
                                            <strong>4. Advanced Filtering & Search 🔍</strong>
                                        </button>
                                    </h2>
                                    <div id="feature4" className="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Search tasks by title</li>
                                                <li>Filter by: priority, status, assigned user, date range</li>
                                                <li>Sort by: date, priority, alphabetical</li>
                                                <li><strong>Concepts:</strong> useMemo (expensive filtering), useState</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 5 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#feature5">
                                            <strong>5. Real-Time Updates ⚡</strong>
                                        </button>
                                    </h2>
                                    <div id="feature5" className="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Updates appear immediately when added/edited/deleted</li>
                                                <li>Show loading spinner during API calls</li>
                                                <li><strong>Concepts:</strong> useEffect, async/await, loading states</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 6 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#feature6">
                                            <strong>6. Task Comments System 💬</strong>
                                        </button>
                                    </h2>
                                    <div id="feature6" className="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Click on task to open detail view</li>
                                                <li>Add comments to tasks</li>
                                                <li>Show comment history with timestamps</li>
                                                <li><strong>Concepts:</strong> useState, props drilling, lifting state up</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 7 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#feature7">
                                            <strong>7. Dark/Light Theme Toggle 🌓</strong>
                                        </button>
                                    </h2>
                                    <div id="feature7" className="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Switch between dark and light themes</li>
                                                <li>Theme persists after page refresh</li>
                                                <li><strong>Concepts:</strong> Context API, localStorage, useEffect</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 8 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#feature8">
                                            <strong>8. Performance Optimization ⚡</strong>
                                        </button>
                                    </h2>
                                    <div id="feature8" className="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Lazy load task detail page</li>
                                                <li>Memoize expensive calculations (task statistics)</li>
                                                <li>Prevent unnecessary re-renders</li>
                                                <li><strong>Concepts:</strong> React.lazy, Suspense, useMemo, useCallback, React.memo</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 9 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#feature9">
                                            <strong>9. Custom Hooks 🎣</strong>
                                        </button>
                                    </h2>
                                    <div id="feature9" className="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                                        <div className="accordion-body">
                                            <p><strong>Create these custom hooks:</strong></p>
                                            <ul>
                                                <li><code>useFetch</code> - for API calls</li>
                                                <li><code>useLocalStorage</code> - for theme persistence</li>
                                                <li><code>useDebounce</code> - for search input</li>
                                                <li><code>useForm</code> - for form handling</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 10 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#feature10">
                                            <strong>10. Task Statistics Dashboard 📈</strong>
                                        </button>
                                    </h2>
                                    <div id="feature10" className="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Show total tasks, completed %, pending tasks</li>
                                                <li>Visualize with progress bars (using divs, no external library)</li>
                                                <li>Update in real-time</li>
                                                <li><strong>Concepts:</strong> useMemo, derived state, useEffect</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 11 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#feature11">
                                            <strong>11. Error Handling 🛡️</strong>
                                        </button>
                                    </h2>
                                    <div id="feature11" className="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Error boundary for component crashes</li>
                                                <li>API error handling (404, 500, network errors)</li>
                                                <li>Form validation with error messages</li>
                                                <li><strong>Concepts:</strong> Error Boundaries, try-catch, error states</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 12 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#feature12">
                                            <strong>12. Advanced Features 🚀</strong>
                                        </button>
                                    </h2>
                                    <div id="feature12" className="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Task assignment to different users</li>
                                                <li>Due date with countdown timer</li>
                                                <li>Notification badge for pending tasks</li>
                                                <li>Drag and drop tasks between columns (bonus)</li>
                                                <li><strong>Concepts:</strong> useRef, useEffect, DOM manipulation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Component Structure */}
                    <div className="card shadow mb-4">
                        <div className="card-header bg-warning">
                            <h3 className="mb-0">🏗️ Recommended Component Structure</h3>
                        </div>
                        <div className="card-body">
                            <pre className="bg-dark text-light p-4 rounded" style={{fontSize: '0.9rem'}}>
{`src/
├── components/
│   ├── Auth/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── ProtectedRoute.jsx
│   ├── Dashboard/
│   │   ├── TaskBoard.jsx
│   │   ├── TaskColumn.jsx
│   │   ├── TaskCard.jsx
│   │   └── TaskStats.jsx
│   ├── TaskDetails/
│   │   ├── TaskDetailModal.jsx
│   │   ├── CommentList.jsx
│   │   └── CommentForm.jsx
│   ├── Forms/
│   │   ├── TaskForm.jsx
│   │   └── SearchBar.jsx
│   ├── Common/
│   │   ├── Navbar.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── ErrorBoundary.jsx
│   └── Layout/
│       └── Layout.jsx
├── hooks/
│   ├── useFetch.js
│   ├── useLocalStorage.js
│   ├── useDebounce.js
│   └── useForm.js
├── context/
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── TaskDetail.jsx (lazy loaded)
│   └── NotFound.jsx
└── App.jsx`}
                            </pre>
                        </div>
                    </div>

                    {/* React Concepts */}
                    <div className="card shadow mb-4">
                        <div className="card-header bg-info text-white">
                            <h3 className="mb-0">🎯 React Concepts You'll Practice</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className="text-primary">Basic Hooks:</h5>
                                    <ul>
                                        <li>✅ useState</li>
                                        <li>✅ useEffect</li>
                                        <li>✅ useContext</li>
                                        <li>✅ useRef</li>
                                        <li>✅ useMemo</li>
                                        <li>✅ useCallback</li>
                                    </ul>

                                    <h5 className="text-primary mt-3">React Fundamentals:</h5>
                                    <ul>
                                        <li>✅ Props & State management</li>
                                        <li>✅ Lifting state up</li>
                                        <li>✅ Props drilling vs Context</li>
                                        <li>✅ Conditional rendering</li>
                                        <li>✅ Lists & Keys</li>
                                        <li>✅ Event handling</li>
                                        <li>✅ Form handling & validation</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="text-success">Advanced Concepts:</h5>
                                    <ul>
                                        <li>✅ Custom Hooks</li>
                                        <li>✅ Error Boundaries</li>
                                        <li>✅ Code Splitting</li>
                                        <li>✅ React.memo</li>
                                        <li>✅ Controlled Components</li>
                                        <li>✅ Higher-Order Components</li>
                                    </ul>

                                    <h5 className="text-success mt-3">React Router:</h5>
                                    <ul>
                                        <li>✅ Routes & nested routes</li>
                                        <li>✅ Protected routes</li>
                                        <li>✅ useNavigate, useParams</li>
                                        <li>✅ 404 page</li>
                                    </ul>

                                    <h5 className="text-success mt-3">Performance:</h5>
                                    <ul>
                                        <li>✅ Lazy loading</li>
                                        <li>✅ Memoization</li>
                                        <li>✅ Debouncing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step-by-Step Plan */}
                    <div className="card shadow mb-4">
                        <div className="card-header bg-danger text-white">
                            <h3 className="mb-0">📝 8-Day Step-by-Step Plan</h3>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Day</th>
                                            <th>Phase</th>
                                            <th>Tasks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Day 1</strong></td>
                                            <td>Setup</td>
                                            <td>
                                                • Create folder structure<br/>
                                                • Setup routing<br/>
                                                • Install dependencies
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>Day 2-3</strong></td>
                                            <td>Basic Features</td>
                                            <td>
                                                • Task list display<br/>
                                                • Add task form<br/>
                                                • Edit/Delete functionality<br/>
                                                • Setup JSON Server
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>Day 4</strong></td>
                                            <td>Context & State</td>
                                            <td>
                                                • AuthContext<br/>
                                                • ThemeContext<br/>
                                                • Protected routes<br/>
                                                • Theme toggle
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>Day 5-6</strong></td>
                                            <td>Advanced Features</td>
                                            <td>
                                                • Search and filters<br/>
                                                • Custom hooks<br/>
                                                • Task comments<br/>
                                                • Task statistics
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>Day 7</strong></td>
                                            <td>Optimization</td>
                                            <td>
                                                • Lazy loading<br/>
                                                • useMemo for calculations<br/>
                                                • React.memo for components<br/>
                                                • Error boundaries
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>Day 8</strong></td>
                                            <td>Polish</td>
                                            <td>
                                                • Loading spinners<br/>
                                                • Error handling<br/>
                                                • Form validation<br/>
                                                • Responsive design
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Tips */}
                    <div className="card shadow mb-4">
                        <div className="card-header" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
                            <h3 className="mb-0">💡 Important Tips & Hints</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className="text-primary">📦 JSON Server Setup:</h5>
                                    <ul>
                                        <li>Create <code>db.json</code> with: users, tasks, comments</li>
                                        <li>Run on <code>http://localhost:3000</code></li>
                                        <li>Tasks structure: id, title, description, status, priority, assignedTo, createdAt, deadline</li>
                                    </ul>

                                    <h5 className="text-primary mt-3">🎯 State Management:</h5>
                                    <ul>
                                        <li>Use Context for: theme, auth</li>
                                        <li>Use useState for: local state (forms, modals)</li>
                                        <li>Use useMemo for: filtered/sorted lists</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="text-success">⚡ Performance Tips:</h5>
                                    <ul>
                                        <li>Memoize task filtering/sorting (expensive!)</li>
                                        <li>Use useCallback for functions passed to children</li>
                                        <li>Lazy load the task detail modal</li>
                                    </ul>

                                    <h5 className="text-success mt-3">🎣 Custom Hooks Pattern:</h5>
                                    <ul>
                                        <li>useFetch: handle loading, error, data states</li>
                                        <li>useLocalStorage: sync state with localStorage</li>
                                        <li>useDebounce: delay search by 300ms</li>
                                        <li>useForm: handle form state and validation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bonus Challenges */}
                    <div className="card shadow mb-4">
                        <div className="card-header bg-secondary text-white">
                            <h3 className="mb-0">🎖️ Bonus Challenges</h3>
                        </div>
                        <div className="card-body">
                            <div className="alert alert-warning">
                                <strong>⚠️ Only attempt these after completing all core features!</strong>
                            </div>
                            <ul>
                                <li>✨ <strong>Real-time Sync:</strong> Use WebSockets (or fake with setInterval)</li>
                                <li>🎬 <strong>Animations:</strong> Smooth transitions between task columns</li>
                                <li>🔔 <strong>Notifications:</strong> Toast notifications for actions</li>
                                <li>📥 <strong>Export/Import:</strong> Export tasks to JSON/CSV</li>
                                <li>⌨️ <strong>Keyboard Shortcuts:</strong> Ctrl+N = new task</li>
                            </ul>
                        </div>
                    </div>

                    {/* Success Criteria */}
                    <div className="card shadow mb-4">
                        <div className="card-header bg-success text-white">
                            <h3 className="mb-0">✅ Success Criteria</h3>
                        </div>
                        <div className="card-body">
                            <p><strong>You'll know you've mastered React when you can:</strong></p>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul>
                                        <li>✅ Switch theme without page reload</li>
                                        <li>✅ Search 1000+ tasks without lag</li>
                                        <li>✅ Add/edit/delete tasks smoothly</li>
                                        <li>✅ Navigate without breaking</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul>
                                        <li>✅ See loading states during API calls</li>
                                        <li>✅ Handle all errors gracefully</li>
                                        <li>✅ Lazy load heavy components</li>
                                        <li>✅ Create reusable custom hooks</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="card shadow-lg border-0" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                        <div className="card-body text-white text-center p-5">
                            <h2 className="mb-4">🚀 Ready to Start Building?</h2>
                            <p className="lead mb-4">Follow the 8-day plan, start with basic features, and build up gradually!</p>
                            <div className="alert alert-light">
                                <h5 className="alert-heading">📌 Remember:</h5>
                                <p className="mb-0">Start with basic task display → Add CRUD → Add filters → Add optimization → Polish!</p>
                            </div>
                            <h4 className="mt-4">💪 You've got this! Good luck!</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ChallengeDetails

