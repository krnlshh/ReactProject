# Employee Directory - React Application

A modern, interactive Employee Directory application built with React that allows users to add, filter, search, and manage employees.

## Features

- ✨ **Add Employees**: Add employees with name, role, department, and contact information
- 🔍 **Search by Role**: Search for employees based on their job role
- 🏢 **Filter by Department**: Filter employees by their department
- 🔗 **Combined Filter & Search**: Use both filters simultaneously
- 🗑️ **Remove Employees**: Delete employees from the directory
- ✅ **Form Validation**: Ensures all fields are filled before adding an employee
- 📱 **Responsive Design**: Beautiful, modern UI that works on all devices

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## Usage

### Initial State
- All input fields are empty
- Department dropdown shows "Select a Department"
- Employee list displays "No Employees Added."

### Adding Employees
1. Enter employee name
2. Enter employee role
3. Select department from dropdown
4. Enter email address
5. Click "Add Employee" button

**Note**: All fields are required. An alert will appear if any field is empty.

### Filtering and Searching
- **Filter by Department**: Use the department dropdown to filter employees
- **Search by Role**: Enter a role in the search box to find matching employees
- **Combined**: Both filters work together for precise results

### Removing Employees
- Click the "Remove" button on any employee card to delete them
- The list updates dynamically
- "No Employees Added." message appears when the list is empty

## Project Structure

```
employee-directory/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── EmployeeDirectory.js      # Main container component
│   │   ├── EmployeeDirectory.css
│   │   ├── EmployeeForm.js            # Form for adding employees
│   │   ├── EmployeeForm.css
│   │   ├── EmployeeFilter.js          # Filter and search controls
│   │   ├── EmployeeFilter.css
│   │   ├── EmployeeList.js            # Display employee cards
│   │   └── EmployeeList.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Component Overview

### EmployeeDirectory.js
Main component that manages state and coordinates child components:
- Maintains employee list
- Handles filter and search state
- Provides add/remove employee functions

### EmployeeForm.js
Form component for adding new employees:
- Input fields for name, role, and contact
- Dropdown for department selection
- Form validation

### EmployeeFilter.js
Filter and search controls:
- Department filter dropdown
- Role search input field

### EmployeeList.js
Displays employee cards:
- Shows all filtered/searched employees
- Remove button for each employee
- "No Employees Added." message when empty

## Technologies Used

- **React 18.2.0**: UI library
- **React Scripts 5.0.1**: Build tools and configuration
- **CSS3**: Styling with modern gradients and animations

## Sample Interaction Flow

1. **Add John Smith**: Developer in IT department (john@company.com)
2. **Add Sarah Johnson**: Manager in HR department (sarah@company.com)
3. **Filter by IT**: Only John Smith displayed
4. **Search for "Manager"**: Only Sarah Johnson displayed
5. **Filter IT + Search "Developer"**: Only John Smith displayed
6. **Remove John Smith**: "No Employees Added." displayed

## Key Features Implementation

- **Unique Identifier**: Email addresses are used as unique identifiers
- **Order Preservation**: Employees displayed in the order they were created
- **Dynamic Updates**: List updates immediately on add/remove/filter/search
- **Input Validation**: Alert shown for incomplete form submissions
- **Simultaneous Filters**: Department filter and role search work together

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for educational purposes.

