import React from 'react';
import './EmployeeFilter.css';

const EmployeeFilter = ({ 
  filterDepartment, 
  setFilterDepartment, 
  searchRole, 
  setSearchRole 
}) => {
  const departments = ['IT', 'HR', 'Finance', 'Marketing', 'Sales'];

  return (
    <div className="employee-filter">
      <h2>Filter & Search</h2>
      
      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="filter-department">Filter by Department:</label>
          <select
            id="filter-department"
            value={filterDepartment}
            onChange={(e) => setFilterDepartment(e.target.value)}
          >
            <option value="">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="search-role">Search by Role:</label>
          <input
            type="text"
            id="search-role"
            value={searchRole}
            onChange={(e) => setSearchRole(e.target.value)}
            placeholder="Enter role to search"
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeFilter;

