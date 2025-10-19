import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'

const CreateTask = ({ onTaskCreated }) => {
    const { currentUser } = useContext(AuthContext)
    const [showForm, setShowForm] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        priority: 'medium',
        status: 'todo',
        dueDate: '',
        assignedTo: ''
    })
    useEffect(() => {
        fetchUsers()
    }, [])
    
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3000/users')
            const data = await response.json()
            setUsers(data)
            if (currentUser) {
                setFormData(prev => ({ ...prev, assignedTo: currentUser.id }))
            }
        } catch (err) {
            console.error('Error fetching users:', err)
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
    
        try {
            const newTask = {
                ...formData,
                assignedTo: parseInt(formData.assignedTo),
                createdBy: currentUser.id,
                createdAt: new Date().toISOString(),
                deadline: formData.dueDate ? new Date(formData.dueDate).toISOString() : null,
                completedAt: null
            }
    
            const response = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            })
    
            if (response.ok) {
                const createdTask = await response.json()
                
                // Reset form
                setFormData({
                    title: '',
                    description: '',
                    priority: 'medium',
                    status: 'todo',
                    dueDate: '',
                    assignedTo: currentUser?.id || ''
                })
                
                setShowForm(false)
                alert('✅ Task created successfully!')
                
                if (onTaskCreated) {
                    onTaskCreated(createdTask)
                }
            }
        } catch (err) {
            alert('❌ Failed to create task')
            console.error('Error creating task:', err)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="mb-4">
            {!showForm && (
                <button 
                    className="btn btn-primary btn-lg w-100"
                    onClick={() => setShowForm(true)}
                >
                    ➕ Create New Task
                </button>
            )}

            {showForm && (
                <div className="card shadow">
                    <div className="card-header bg-primary text-white">
                        <h5 className="mb-0">➕ Create New Task</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            
                            <div className="mb-3">
                                <label className="form-label">Task Title *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter task title"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="Enter task description"
                                />
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Priority *</label>
                                    <select
                                        className="form-select"
                                        name="priority"
                                        value={formData.priority}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="low">🟢 Low</option>
                                        <option value="medium">🟡 Medium</option>
                                        <option value="high">🔴 High</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Status *</label>
                                    <select
                                        className="form-select"
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="todo">📝 To Do</option>
                                        <option value="in-progress">🔄 In Progress</option>
                                        <option value="completed">✅ Completed</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Due Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="dueDate"
                                    value={formData.dueDate}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Assign To *</label>
                                <select
                                    className="form-select"
                                    name="assignedTo"
                                    value={formData.assignedTo}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select User...</option>
                                    {users.map(user => (
                                        <option key={user.id} value={user.id}>
                                            {user.name} {user.id === currentUser?.id ? '(You)' : ''}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="d-flex gap-2">
                                <button 
                                    type="submit" 
                                    className="btn btn-success"
                                    disabled={loading}
                                >
                                    {loading ? '⏳ Creating...' : '✅ Create Task'}
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-secondary"
                                    onClick={() => setShowForm(false)}
                                    disabled={loading}
                                >
                                    ❌ Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
export default CreateTask;