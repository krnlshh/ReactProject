const TaskCard = ({ task, users }) => {
    // Find the assigned user
    const assignedUser = users.find(u => u.id === task.assignedTo)
    
    // Priority badge colors
    const priorityColors = {
        low: 'success',
        medium: 'warning',
        high: 'danger'
    }
    
    // Priority icons
    const priorityIcons = {
        low: '🟢',
        medium: '🟡',
        high: '🔴'
    }
    
    // Format date
    const formatDate = (dateString) => {
        if (!dateString) return 'No deadline'
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }
    
    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                {/* Title */}
                <h6 className="card-title mb-2">{task.title}</h6>
                
                {/* Description */}
                {task.description && (
                    <p className="card-text text-muted small mb-2">
                        {task.description.length > 80 
                            ? task.description.substring(0, 80) + '...' 
                            : task.description}
                    </p>
                )}
                
                {/* Priority Badge */}
                <span className={`badge bg-${priorityColors[task.priority]} me-2`}>
                    {priorityIcons[task.priority]} {task.priority.toUpperCase()}
                </span>
                
                {/* Due Date */}
                {task.deadline && (
                    <div className="text-muted small mt-2">
                        📅 {formatDate(task.deadline)}
                    </div>
                )}
                
                {/* Assigned User */}
                {assignedUser && (
                    <div className="d-flex align-items-center mt-2">
                        <img 
                            src={assignedUser.avatar} 
                            alt={assignedUser.name}
                            className="rounded-circle me-2"
                            width="24"
                            height="24"
                        />
                        <small className="text-muted">{assignedUser.name}</small>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TaskCard

