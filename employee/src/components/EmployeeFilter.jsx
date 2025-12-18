const EmployeeFilter = ({searchRole,setRole,searchDepartment,setDepartment,sortBy,setSortBy}) => {

 return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Search & Filter</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search Role Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search by Role
          </label>
          <input 
            type="text" 
            onChange={(e) => setRole(e.target.value)} 
            value={searchRole} 
            placeholder="Search role..." 
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent transition-all duration-200
                       placeholder-gray-400"
          />
        </div>

        {/* Department Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Department
          </label>
          <select 
            value={searchDepartment} 
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent transition-all duration-200 cursor-pointer"
          >
            <option value=''>All Departments</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="Manufacturing">Manufacturing</option>
          </select>
        </div>

        {/* Sort Select */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sort By
          </label>
          <select 
            value={sortBy} 
            onChange={(e)=>setSortBy(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent transition-all duration-200 cursor-pointer"
          >
            <option value=''>Default Order</option>
            <option value='A-Z ORDER'>A-Z Order</option>
            <option value='Z-A ORDER'>Z-A Order</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default EmployeeFilter