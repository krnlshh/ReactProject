// import React, { useState } from 'react';
// import './EmployeeForm.css';

// const EmployeeForm = ({ onAddEmployee }) => {
//   // TODO: Create state for name, role, department, and contact
//   // Hint: All should start as empty strings

//   const departments = ['IT', 'HR', 'Finance', 'Marketing', 'Sales'];

   
//     const [formData,setFromData] = useState({name:'',role:'',department:'',contact:''})

//     const handleChange = (e) => {
//       const {name,value} = e.target
//       setFromData({...formData,[name]:value})
//     }
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if(formData.name === '' || formData.role === '' || formData.department === '' || formData.contact === ''){
//         alert('All fields are required!')
//         return false
//       }      
//       const newUser = {        
//         name:formData.name,
//         role:formData.role,
//         department:formData.department,
//         contact:formData.contact
//       }    
//       onAddEmployee(newUser)
//       setFromData({name:'',role:'',department:'',contact:''})  
//     }


//   return (
//     <div className="employee-form">
//       <h2>Add Employee</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             name='name'
//             type="text"
//             id="name"
//             onChange={handleChange}
//             placeholder="Enter employee name"
//             value={formData.name}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="role">Role:</label>
//           <input
//             name='role'
//             type="text"
//             id="role"
//             onChange={handleChange}
//             placeholder="Enter employee role"
//             value={formData.role}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="department">Department:</label>
//           <select
//             name='department'
//             id="department"
//             onChange={handleChange}
//             value={formData.department}            
//           >
//             <option value="">Select a Department</option>
//             {departments.map(dept => (
//               <option key={dept} value={dept}>{dept}</option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="contact">Contact:</label>
//           <input
//             name='contact'
//             type="email"
//             id="contact"
//             onChange={handleChange}
//             placeholder="Enter email address"
//             value={formData.contact}
//           />
//         </div>

//         <button type="submit" className="btn-add">Add Employee</button>
//       </form>
//     </div>
//   );
// };

// export default EmployeeForm;

