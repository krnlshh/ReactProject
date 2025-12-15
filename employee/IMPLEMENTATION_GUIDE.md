# Employee Directory - Implementation Guide

## 🎯 Your Task

Complete the TODO sections in the following components to build a fully functional Employee Directory application.

## 📝 Requirements Checklist

### Initial State ✓ (Already Done)
- [ ] Empty input fields
- [ ] "Select a Department" dropdown default
- [ ] "No Employees Added." message when no employees exist

### 1. EmployeeForm.js - Add Employees
**What you need to implement:**

- [ ] Create state variables for: `name`, `role`, `department`, `contact` (all start as empty strings)
- [ ] Connect input fields to state using `value` and `onChange`
- [ ] In `handleSubmit`:
  - [ ] Validate all fields are filled (show alert "All fields are required!" if empty)
  - [ ] Create employee object: `{ name, role, department, contact }`
  - [ ] Call `onAddEmployee(newEmployee)`
  - [ ] Reset all form fields to empty strings

**Hints:**
```javascript
// State example
const [name, setName] = useState('');

// Input example
<input value={name} onChange={(e) => setName(e.target.value)} />

// Validation example
if (!name.trim() || !role.trim() || !department || !contact.trim()) {
  alert('All fields are required!');
  return;
}
```

---

### 2. EmployeeList.js - Display Employees
**What you need to implement:**

- [ ] Check if `employees.length === 0`
- [ ] If empty, return the "No Employees Added." message
- [ ] Map through employees array and display each employee card
- [ ] Show: name, role, department, contact
- [ ] Add Remove button that calls `onRemoveEmployee(employee.contact)`
- [ ] Use `employee.contact` as the key (it's unique)

**Hints:**
```javascript
// Empty check
if (employees.length === 0) {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <p className="no-employees">No Employees Added.</p>
    </div>
  );
}

// Mapping employees
{employees.map((employee) => (
  <div key={employee.contact} className="employee-card">
    {/* Display employee info here */}
  </div>
))}
```

---

### 3. EmployeeDirectory.js - Main Logic
**What you need to implement:**

- [ ] Create state: `const [employees, setEmployees] = useState([]);`
- [ ] Create state: `const [filterDepartment, setFilterDepartment] = useState('');`
- [ ] Create state: `const [searchRole, setSearchRole] = useState('');`

- [ ] **addEmployee function:**
  - Add new employee to the employees array
  - Hint: `setEmployees([...employees, employee])`

- [ ] **removeEmployee function:**
  - Remove employee by email (contact)
  - Hint: `setEmployees(employees.filter(emp => emp.contact !== email))`

- [ ] **getFilteredEmployees function:**
  - Start with all employees
  - Filter by department if `filterDepartment` is set
  - Filter by role if `searchRole` is set (case-insensitive)
  - Both filters should work together!
  - Return filtered array

- [ ] Pass state and functions to child components (replace the placeholder values)

**Hints:**
```javascript
// Filter by department
if (filterDepartment && filterDepartment !== '') {
  filtered = filtered.filter(emp => emp.department === filterDepartment);
}

// Search by role (case-insensitive)
if (searchRole.trim()) {
  filtered = filtered.filter(emp => 
    emp.role.toLowerCase().includes(searchRole.toLowerCase())
  );
}
```

---

## 🧪 Testing Your Implementation

### Test Case 1: Add Employees
1. Add "John Smith" as "Developer" in "IT" with "john@company.com"
2. Add "Sarah Johnson" as "Manager" in "HR" with "sarah@company.com"
3. Both should appear in the list

### Test Case 2: Filter by Department
1. Select "IT" from filter dropdown
2. Only John Smith should be displayed

### Test Case 3: Search by Role
1. Clear department filter (select "All Departments")
2. Type "Manager" in search box
3. Only Sarah Johnson should be displayed

### Test Case 4: Combined Filter & Search
1. Select "IT" department
2. Type "Developer" in search
3. Only John Smith should be displayed

### Test Case 5: Remove Employee
1. Click Remove button on John Smith
2. John Smith should disappear
3. Only Sarah Johnson should remain

### Test Case 6: Empty State
1. Remove all employees
2. "No Employees Added." message should appear

### Test Case 7: Validation
1. Try to submit form with empty fields
2. Alert "All fields are required!" should appear

---

## 🎨 CSS Files (Already Complete)

All styling is already done! You don't need to modify:
- EmployeeDirectory.css
- EmployeeForm.css
- EmployeeFilter.css
- EmployeeList.css

---

## 📁 Files You Need to Edit

1. **src/components/EmployeeForm.js** - Add employee form logic
2. **src/components/EmployeeList.js** - Display employees
3. **src/components/EmployeeDirectory.js** - Main state and filtering logic

## 📁 Files You DON'T Need to Edit

- EmployeeFilter.js (already complete - just UI)
- All CSS files (styling is done)
- App.js, index.js (setup files)

---

## 🚀 Running the Application

```bash
npm start
```

Open http://localhost:3000 in your browser.

---

## ✅ Success Criteria

Your implementation is complete when:
- ✅ You can add employees with all required fields
- ✅ Alert shows when trying to add with empty fields
- ✅ Employees display in the order they were created
- ✅ You can filter by department
- ✅ You can search by role
- ✅ Both filters work together simultaneously
- ✅ You can remove employees
- ✅ "No Employees Added." shows when list is empty

---

## 💡 Tips

1. Start with **EmployeeForm.js** - get adding employees working first
2. Then do **EmployeeList.js** - display the employees
3. Finally complete **EmployeeDirectory.js** - add filtering and search
4. Test each feature as you complete it
5. Use `console.log()` to debug your state

Good luck! 🎉

