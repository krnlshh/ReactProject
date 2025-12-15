import { useMemo, useState } from "react"

const EmployeeDirectory = () =>{

  const [user,setUser] = useState([]);
  const [formData,setFormData] = useState({name:'',role:'',department:'',contact:''});
  const [searchRole,setRole] = useState('');
  const [searchDepartment,setSearchDepartment] = useState('');

  const handleChange = (e) =>{
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
  }
  const handleForm = (e) => {
    e.preventDefault();
    if(formData.name === '' || formData.role === '' || formData.department === '' || formData.contact === ''){
      alert('Insert Data')
      return false
    }
    const newUser = {
      id : Date.now(),
      name : formData.name,
      role : formData.role,
      department: formData.department,
      contact: formData.contact
    }
    setUser([...user,newUser])
    setFormData({name:'',role:'',department:'',contact:''})
  }

  const filterData = useMemo(()=>{
    let filterd = user ;
    if(searchRole){filterd = filterd.filter((item)=> item.role.toLowerCase().includes(searchRole.toLowerCase()))}
    if(searchDepartment){filterd = filterd.filter((item)=> item.department === searchDepartment)}
    return filterd
  },[user,searchRole,searchDepartment])


  return<>
    <input type="text" onChange={(e)=>setRole(e.target.value)} value={searchRole}/>
    <select onChange={(e)=>setSearchDepartment(e.target.value)} value={searchDepartment}>
        <option value="">Select a Department</option>
        <option value="Marketing">Marketing</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Admin">Admin</option>
        <option value="Worker">Worker</option>
      </select>

    <form onSubmit={handleForm}>
      <input type="text" name="name" value={formData.name} onChange={handleChange}/>
      <input type="text" name="role" value={formData.role} onChange={handleChange}/>
      <select name="department" value={formData.department} onChange={handleChange}>
        <option value="">Select a Department</option>
        <option value="Marketing">Marketing</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Admin">Admin</option>
        <option value="Worker">Worker</option>
      </select>
      <input type="text" name="contact" value={formData.contact} onChange={handleChange}/>
      <button>Submit</button>
    </form>
    {
     filterData.length === 0 ? 'NO DATA' : filterData.map((item) => <div key={item.id}> {item.name} {item.role} {item.department} {item.contact} </div>)
    }
  </>

}

export default EmployeeDirectory