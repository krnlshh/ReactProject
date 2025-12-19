
const TaskForm = ({ handleSubmit, handleChange, error, formData }) => {
    return (
        <div className="max-w-xl mx-auto bg-white shadow rounded-lg p-6 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        placeholder="Title"
                        name="title"
                        type="text"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    {error.title && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <span>⚠️</span> {error.title}
                        </p>
                    )}
                </div>
                <div>
                    <textarea
                        placeholder="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    {error.description && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <span>⚠️</span> {error.description}
                        </p>
                    )}
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        >
                            <option value="">Select category</option>
                            <option value="Work">Work</option>
                            <option value="Personal">Personal</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Health">Health</option>
                            <option value="Other">Other</option>
                        </select>
                        {error.category && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                <span>⚠️</span> {error.category}
                            </p>
                        )}
                    </div>
                    <div className="flex-1">
                        <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        >
                            <option value="">Select priority</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Urgent">Urgent</option>
                        </select>
                        {error.priority && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                <span>⚠️</span> {error.priority}
                            </p>
                        )}
                    </div>
                    <div className="flex-1">
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        >
                            <option value="">Select status</option>
                            <option value="Todo">Todo</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                        {error.status && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                <span>⚠️</span> {error.status}
                            </p>
                        )}
                    </div>
                </div>
                <button
                    className="w-full py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition font-semibold"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default TaskForm;