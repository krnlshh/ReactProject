// import React from 'react';
// import './EmployeeList.css';

// const EmployeeList = ({ employees, onRemoveEmployee }) => {
//   // TODO: Check if employees array is empty
//   // If empty, display "No Employees Added." message
//   // Hint: Check employees.length

//   if(employees.length === 0){   
    
//     return <div className='alert alert-error'>No Employees Added.</div>
//   }

//   return (
//     <div className="employee-list">
//       <h2>Employee List</h2>
//       <div className="employees-container">
//       {
//         employees.map((item)=><div className='employee-card' key={item.contact}>
//          <h3>name: {item.name}</h3> 
//          <p>role: {item.role}</p>  
//          <strong>department: {item.department}</strong>  
//           <strong>contact : {item.contact} </strong>
//           <button onClick={() => onRemoveEmployee()}>Remove</button>
//         </div>) 
//       }
        
//         {/* Hint: Use employee.contact as the key since it's unique */}
//       </div>
//     </div>
//   );
// };

// export default EmployeeList;

