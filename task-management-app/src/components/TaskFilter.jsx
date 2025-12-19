
const TaskFilter = ({ filter, setFilter }) => {
    return (
        <div className="flex flex-wrap gap-4 bg-white p-4 rounded-lg shadow border border-gray-100 mb-4">
            <select
                value={filter.sortByTime}
                onChange={(e) => setFilter(prev => ({ ...prev, sortByTime: e.target.value }))}
                className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
                <option value="">Sort by Time</option>
                <option value="NEWEST">NEWEST</option>
                <option value="OLDEST">OLDEST</option>
            </select>
            <select
                value={filter.sorting}
                onChange={(e) => setFilter(prev => ({...prev,sorting:e.target.value}))}
                className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
                <option value="">Sort by Name</option>
                <option value="A-Z ORDER">A-Z ORDER</option>
                <option value="Z-A ORDER">Z-A ORDER</option>
            </select>
            <select
                value={filter.category}
                onChange={(e) => setFilter(prev => ({...prev,category:e.target.value}))}
                className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
                <option value="">Select category</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Shopping">Shopping</option>
                <option value="Health">Health</option>
                <option value="Other">Other</option>
            </select>
            <select
                value={filter.priority}
                onChange={(e) => setFilter(prev=>({...prev,priority:e.target.value}))}
                className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
                <option value="">Select priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
            </select>
            <select
                value={filter.status}
                onChange={(e) => setFilter(prev=>({...prev,status:e.target.value}))}
                className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
                <option value="">Select status</option>
                <option value="Todo">Todo</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
        </div>
    );
};

export default TaskFilter;