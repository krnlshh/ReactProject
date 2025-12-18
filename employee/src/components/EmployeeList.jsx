const EmployeeList = ({filterData,handleEdit,handleDelete}) => {

    if (!filterData || filterData.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📋</div>
                <p className="text-xl text-gray-600 font-medium">No employees found</p>
                <p className="text-sm text-gray-500 mt-2">Try adjusting your search or filters</p>
            </div>
        )
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Employee List <span className="text-sm font-normal text-gray-500">({filterData.length} {filterData.length === 1 ? 'employee' : 'employees'})</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterData.map((item) => (
                    <div 
                        key={item.id}
                        className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 
                                   rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-200
                                   transform hover:-translate-y-1"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-gray-800 mb-1">
                                    {item.name}
                                </h3>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full 
                                                     text-xs font-medium bg-blue-100 text-blue-800">
                                        {item.role}
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full 
                                                     text-xs font-medium bg-purple-100 text-purple-800">
                                        {item.department}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="text-gray-400">📞</span>
                                <span>{item.contact}</span>
                            </div>
                        </div>

                        <div className="flex gap-2 pt-3 border-t border-gray-200">
                            <button 
                                onClick={()=>handleEdit(item.id)}
                                className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 
                                           text-white text-sm font-medium rounded-lg 
                                           transition-all duration-200 transform hover:scale-105
                                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                ✏️ Edit
                            </button>
                            <button 
                                onClick={()=>handleDelete(item.id)}
                                className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 
                                           text-white text-sm font-medium rounded-lg 
                                           transition-all duration-200 transform hover:scale-105
                                           focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            >
                                🗑️ Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default EmployeeList
