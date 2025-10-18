const Home = () => {
    return(
        <div className="container mt-5">
            <div className="card shadow-lg border-0">
                <div className="card-body text-center p-5">
                    <h1 className="display-4 mb-4">🎯 Task Management System</h1>
                    <p className="lead mb-4">
                        Collaborate with your team, manage tasks efficiently, and boost productivity!
                    </p>
                    
                    <div className="row mt-5">
                        {/* Card 1 */}
                        <div className="col-md-4 mb-3">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h3>📋 Organize Tasks</h3>
                                    <p>Keep track of all your tasks in one place with easy-to-use boards</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Card 2 */}
                        <div className="col-md-4 mb-3">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h3>👥 Team Collaboration</h3>
                                    <p>Work together with your team members and stay updated in real-time</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Card 3 */}
                        <div className="col-md-4 mb-3">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h3>⚡ Boost Productivity</h3>
                                    <p>Prioritize tasks, set deadlines, and track your progress efficiently</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;