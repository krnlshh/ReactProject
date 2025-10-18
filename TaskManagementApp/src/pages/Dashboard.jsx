// Import React hooks and AuthContext
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Dashboard = () => {
    // Get current user data from AuthContext (global storage)
    // currentUser = Object with user info (name, email, role, avatar)
    const { currentUser } = useContext(AuthContext)
    
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
                                        <h2>0</h2>
                                        <p className="mb-0">All your tasks</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-warning text-white">
                                    <div className="card-body">
                                        <h5>🔄 In Progress</h5>
                                        <h2>0</h2>
                                        <p className="mb-0">Tasks being worked on</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-success text-white">
                                    <div className="card-body">
                                        <h5>✅ Completed</h5>
                                        <h2>0</h2>
                                        <p className="mb-0">Tasks finished</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Task Board Title */}
                        <h4 className="mt-4 mb-3">Your Task Board</h4>
                        
                        {/* 3 Columns - Kanban Style */}
                        <div className="row mt-4">
                            
                            {/* Column 1: To Do (Blue) */}
                            <div className="col-md-4">
                                <div className="card border-primary">
                                    <div className="card-header bg-primary text-white">
                                        <h5>📝 To Do</h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-muted">No tasks yet...</p>
                                        <small>Tasks will appear here when you create them</small>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Column 2: In Progress (Yellow) */}
                            <div className="col-md-4">
                                <div className="card border-warning">
                                    <div className="card-header bg-warning text-white">
                                        <h5>🔄 In Progress</h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-muted">No tasks yet...</p>
                                        <small>Tasks you're working on will appear here</small>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Column 3: Completed (Green) */}
                            <div className="col-md-4">
                                <div className="card border-success">
                                    <div className="card-header bg-success text-white">
                                        <h5>✅ Completed</h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-muted">No tasks yet...</p>
                                        <small>Completed tasks will appear here</small>
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