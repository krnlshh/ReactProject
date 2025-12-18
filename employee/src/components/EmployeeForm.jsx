const EmployeeForm = ({ handleChange, handleSubmit, formData, error, editingId }) => {

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                        className={`w-full px-4 py-2.5 border rounded-lg
                                   focus:outline-none focus:ring-2 transition-all duration-200
                                   ${error.name ? 'border-red-300 focus:ring-red-500 bg-red-50' : 'border-gray-300 focus:ring-blue-500 focus:border-transparent'}`}
                        placeholder="Enter employee name" 
                        type='text' 
                        value={formData.name} 
                        onChange={handleChange} 
                        name="name" 
                    />
                    {error.name && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <span>⚠</span> {error.name}
                        </p>
                    )}
                </div>

                {/* Role Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Role <span className="text-red-500">*</span>
                    </label>
                    <input 
                        className={`w-full px-4 py-2.5 border rounded-lg
                                   focus:outline-none focus:ring-2 transition-all duration-200
                                   ${error.role ? 'border-red-300 focus:ring-red-500 bg-red-50' : 'border-gray-300 focus:ring-blue-500 focus:border-transparent'}`}
                        placeholder="Enter role" 
                        type='text' 
                        value={formData.role} 
                        onChange={handleChange} 
                        name="role" 
                    />
                    {error.role && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <span>⚠</span> {error.role}
                        </p>
                    )}
                </div>

                {/* Department Select */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Department <span className="text-red-500">*</span>
                    </label>
                    <select 
                        className={`w-full px-4 py-2.5 border rounded-lg bg-white
                                   focus:outline-none focus:ring-2 transition-all duration-200 cursor-pointer
                                   ${error.department ? 'border-red-300 focus:ring-red-500 bg-red-50' : 'border-gray-300 focus:ring-blue-500 focus:border-transparent'}`}
                        value={formData.department} 
                        onChange={handleChange} 
                        name='department'
                    >
                        <option value=''>Select Department</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                        <option value="Manufacturing">Manufacturing</option>
                    </select>
                    {error.department && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <span>⚠</span> {error.department}
                        </p>
                    )}
                </div>

                {/* Contact Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contact <span className="text-red-500">*</span>
                    </label>
                    <input 
                        className={`w-full px-4 py-2.5 border rounded-lg
                                   focus:outline-none focus:ring-2 transition-all duration-200
                                   ${error.contact ? 'border-red-300 focus:ring-red-500 bg-red-50' : 'border-gray-300 focus:ring-blue-500 focus:border-transparent'}`}
                        placeholder="Enter 10-digit contact" 
                        type='text' 
                        value={formData.contact} 
                        onChange={handleChange} 
                        name="contact" 
                    />
                    {error.contact && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <span>⚠</span> {error.contact}
                        </p>
                    )}
                </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
                <button 
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 
                               text-white font-semibold rounded-lg shadow-md 
                               transition-all duration-200 transform hover:scale-105
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    {editingId ? 'Update Employee' : 'Add Employee'}
                </button>
            </div>
        </form>
    )
}

export default EmployeeForm