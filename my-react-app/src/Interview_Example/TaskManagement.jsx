import { Link } from "react-router-dom";

const TaskManagement = () => {
    console.log("TaskManagement component loaded!");
    
    return(
        <div className="container mt-5">
            <div className="card shadow-lg border-success">
                <div className="card-header bg-success text-white">
                    <h2 className="mb-0">
                        🎯 Task Management Challenge
                    </h2>
                </div>
                <div className="card-body">
                    <div className="alert alert-info">
                        <h5 className="alert-heading">🚀 Ready to Build Your Ultimate React Project?</h5>
                        <p className="mb-0">Start implementing the Task Management System here!</p>
                    </div>
                    
                    <div className="text-center my-4">
                        <Link to="/challenge-details" className="btn btn-success btn-lg">
                            📋 View Complete Challenge Details & Requirements
                        </Link>
                    </div>

                    <div className="alert alert-warning">
                        <strong>💡 Tip:</strong> Click the button above to see the full project requirements, component structure, step-by-step plan, and all features you need to implement!
                    </div>
                    
                    <h3 className="mt-4">Quick Overview:</h3>
                    <ul>
                        <li>✅ 12 Core Features to implement</li>
                        <li>✅ 8-Day step-by-step development plan</li>
                        <li>✅ Complete component structure guidance</li>
                        <li>✅ All React concepts covered (useState, useEffect, Custom Hooks, etc.)</li>
                        <li>✅ Performance optimization tips</li>
                        <li>✅ Bonus challenges for extra practice</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TaskManagement