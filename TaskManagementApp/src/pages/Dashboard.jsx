// Import React hooks and AuthContext
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import CreateTask from '../components/Tasks/CreateTask'
import TaskCard from '../components/Tasks/TaskCard'

const Dashboard = () => {
    // Get current user data from AuthContext (global storage)
    // currentUser = Object with user info (name, email, role, avatar)
    const { currentUser } = useContext(AuthContext)
    
    const [tasks, setTasks] = useState([])
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    
    // Fetch tasks and users on component mount
    useEffect(() => {
        fetchTasksAndUsers()
    }, [])
    
    const fetchTasksAndUsers = async () => {
        try {
            const [tasksRes, usersRes] = await Promise.all([
                fetch('http://localhost:3000/tasks'),
                fetch('http://localhost:3000/users')
            ])
            
            const tasksData = await tasksRes.json()
            const usersData = await usersRes.json()
            
            setTasks(tasksData)
            setUsers(usersData)
        } catch (err) {
            console.error('Error fetching data:', err)
        } finally {
            setLoading(false)
        }
    }
    
    const handleTaskCreated = (newTask) => {
        console.log('New task created:', newTask)
        // Add new task to the list immediately
        setTasks(prevTasks => [...prevTasks, newTask])
    }
    
    // Filter tasks by status
    const todoTasks = tasks.filter(t => t.status === 'todo')
    const inProgressTasks = tasks.filter(t => t.status === 'in-progress')
    const completedTasks = tasks.filter(t => t.status === 'completed')
    
    // Calculate statistics
    const totalTasks = tasks.length
    const inProgressCount = inProgressTasks.length
    const completedCount = completedTasks.length
    
    return(
        <div>
            <div className="container mt-5">
                {/* Main Dashboard Card */}
                <div className="card shadow">
                    
                    {/* Dashboard Header */}
                    <div className="card-header bg-primary text-white">
                        <h2>📊 Dashboard</h2>
                    </div>
                    
                    {/* Dashboard Body */}
                    <div className="card-body">
                        
                        {/* Welcome Alert with User Info */}
                        <div className="alert alert-success">
                            {/* Display user avatar */}
                            <div className="d-flex align-items-center mb-3">
                                <img 
                                    src={currentUser?.avatar} 
                                    alt="User Avatar" 
                                    className="rounded-circle me-3"
                                    width="60"
                                    height="60"
                                />
                                <div>
                                    <h4 className="mb-1">Welcome back, {currentUser?.name}! 👋</h4>
                                    <p className="mb-0">Email: {currentUser?.email}</p>
                                    <p className="mb-0">Role: {currentUser?.role}</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Stats/Info Cards */}
                        <div className="row mb-4">
                            <div className="col-md-4">
                                <div className="card bg-info text-white">
                                    <div className="card-body">
                                        <h5>📝 Total Tasks</h5>
                                        <h2>{loading ? '...' : totalTasks}</h2>
                                        <p className="mb-0">All your tasks</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-warning text-white">
                                    <div className="card-body">
                                        <h5>🔄 In Progress</h5>
                                        <h2>{loading ? '...' : inProgressCount}</h2>
                                        <p className="mb-0">Tasks being worked on</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-success text-white">
                                    <div className="card-body">
                                        <h5>✅ Completed</h5>
                                        <h2>{loading ? '...' : completedCount}</h2>
                                        <p className="mb-0">Tasks finished</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Create Task Component */}
                        <CreateTask onTaskCreated={handleTaskCreated} />
                        
                        {/* Task Board Title */}
                        <h4 className="mt-4 mb-3">Your Task Board</h4>
                        
                        {/* 3 Columns - Kanban Style */}
                        <div className="row mt-4">
                            
                            {/* Column 1: To Do (Blue) */}
                            <div className="col-md-4">
                                <div className="card border-primary" style={{minHeight: '400px'}}>
                                    <div className="card-header bg-primary text-white">
                                        <h5>📝 To Do ({todoTasks.length})</h5>
                                    </div>
                                    <div className="card-body" style={{maxHeight: '500px', overflowY: 'auto'}}>
                                        {loading ? (
                                            <p className="text-muted">Loading tasks...</p>
                                        ) : todoTasks.length === 0 ? (
                                            <>
                                                <p className="text-muted">No tasks yet...</p>
                                                <small>Tasks will appear here when you create them</small>
                                            </>
                                        ) : (
                                            todoTasks.map(task => (
                                                <TaskCard key={task.id} task={task} users={users} />
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Column 2: In Progress (Yellow) */}
                            <div className="col-md-4">
                                <div className="card border-warning" style={{minHeight: '400px'}}>
                                    <div className="card-header bg-warning text-white">
                                        <h5>🔄 In Progress ({inProgressTasks.length})</h5>
                                    </div>
                                    <div className="card-body" style={{maxHeight: '500px', overflowY: 'auto'}}>
                                        {loading ? (
                                            <p className="text-muted">Loading tasks...</p>
                                        ) : inProgressTasks.length === 0 ? (
                                            <>
                                                <p className="text-muted">No tasks yet...</p>
                                                <small>Tasks you're working on will appear here</small>
                                            </>
                                        ) : (
                                            inProgressTasks.map(task => (
                                                <TaskCard key={task.id} task={task} users={users} />
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Column 3: Completed (Green) */}
                            <div className="col-md-4">
                                <div className="card border-success" style={{minHeight: '400px'}}>
                                    <div className="card-header bg-success text-white">
                                        <h5>✅ Completed ({completedTasks.length})</h5>
                                    </div>
                                    <div className="card-body" style={{maxHeight: '500px', overflowY: 'auto'}}>
                                        {loading ? (
                                            <p className="text-muted">Loading tasks...</p>
                                        ) : completedTasks.length === 0 ? (
                                            <>
                                                <p className="text-muted">No tasks yet...</p>
                                                <small>Completed tasks will appear here</small>
                                            </>
                                        ) : (
                                            completedTasks.map(task => (
                                                <TaskCard key={task.id} task={task} users={users} />
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;