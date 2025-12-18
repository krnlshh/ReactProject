import { useMemo, useState } from "react";
import useLocalStorage from "../customHook/useLocalStorage";
import EmployeeFilter from "./EmployeeFilter";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

const EmployeeDirectory = () => {

  const [formData, setFormData] = useState({ name: '', role: '', department: '', contact: '' })
  const [error, setError] = useState({ name: '', role: '', department: '', contact: '' })

  const [employee, setEmployee] = useLocalStorage('EmployeeData', [])
  const [searchRole, setRole] = useState('');
  const [searchDepartment, setDepartment] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [sortBy,setSortBy] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target
    setError((prev) => ({...prev,[name]:''}));
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { name: '', role: '', department: '', contact: '' };
    if (!formData.name.trim()) {
      newErrors.name = 'name should not empty';   
    }
    if (!formData.role.trim()) {
     newErrors.role = 'Role should not empty';     
    }
    if (!formData.department.trim()) {
         newErrors.department = 'Department should not empty';
    }
    if (!formData.contact.trim()) {
      newErrors.contact = 'contact is required';
    } else if (formData.contact.length !== 10) {
      newErrors.contact = 'contact should be 10 digits only';
    }
    if (Object.values(newErrors).some(Boolean)) {
      setError(newErrors);
      return;
    }

    if(editingId){
      setEmployee(employee.map((item)=> item.id === editingId ? {...item,name:formData.name,role:formData.role,department:formData.department,contact:formData.contact}:item))
      setEditingId(null)
    }
    else{
    const newEmployee = {
      id: Date.now(),      
      name: formData.name,
      role: formData.role,
      department: formData.department,
      contact: formData.contact
    }
    setEmployee([...employee, newEmployee])
    }
    setFormData({ name: '', role: '', department: '', contact: '' })
  }
  const filterData = useMemo(() => {
    let filtered = [...employee];
    if (searchRole) { filtered = filtered.filter((item) => item.role.toLowerCase().includes(searchRole.toLowerCase())) }
    if (searchDepartment) { filtered = filtered.filter((item) => item.department === searchDepartment) }
    if (sortBy === 'A-Z ORDER'){filtered = filtered.sort((a,b)=> a.name.localeCompare(b.name))}
    if (sortBy === 'Z-A ORDER'){filtered = filtered.sort((a,b)=> b.name.localeCompare(a.name))}
    return filtered
  }, [employee, searchRole, searchDepartment,sortBy])

    const handleEdit = (editId) => { 
      const employeeToEdit = employee.find((item)=>item.id === editId) 
      if(employeeToEdit){
        setFormData({
          name:employeeToEdit.name,
          role:employeeToEdit.role,
          department: employeeToEdit.department,
          contact: employeeToEdit.contact
        })
        setEditingId(editId)// add editId in  setEditingId
      }
    }

    const handleDelete = (id) => {
      setEmployee(employee.filter((item)=> item.id !== id))   
    }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Employee Management System</h1>
      
      <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
        <EmployeeFilter sortBy={sortBy} setSortBy={setSortBy} searchRole={searchRole} setRole={setRole} searchDepartment={searchDepartment} setDepartment={setDepartment} />
      </div>

      <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
        <EmployeeList handleEdit={handleEdit} handleDelete={handleDelete} filterData={filterData} />
      </div>

      <div className="bg-white rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Employee</h2>
        <EmployeeForm error={error} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} editingId={editingId} />
      </div>
    </div>
  )

}
export default EmployeeDirectory