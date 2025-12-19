
const TaskList = ({ filterData, updateStatus, edit, remove, formatDate }) => {
    return (
        <div className="space-y-4">
            {filterData.map((item) => (
                <div
                    key={item.id}
                    className="bg-white shadow rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 border border-gray-100"
                >
                    <div className="flex-1">
                        <div className="font-semibold text-lg text-gray-800">{item.title}</div>
                        <div className="text-gray-600 text-sm mb-1">{item.description}</div>
                        <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-2">
                            <span className="px-2 py-1 bg-blue-100 rounded">{item.category}</span>
                            <span className="px-2 py-1 bg-yellow-100 rounded">{item.priority}</span>
                            <span className="px-2 py-1 bg-gray-100 rounded">{formatDate(item.createdDate)}</span>
                            <span className="px-2 py-1 bg-green-100 rounded">{item.status}</span>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-2 md:mt-0">
                        <button
                            className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
                            onClick={() => updateStatus(item.id)}
                        >
                            Status Change
                        </button>
                        <button
                            className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                            onClick={() => edit(item.id)}
                        >
                            Edit
                        </button>
                        <button
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                            onClick={() => remove(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default React.memo(TaskList);