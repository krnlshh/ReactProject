import React, { useState, useEffect, createContext } from "react";

/**
 * 🎯 CONTROLLED COMPONENT VERSION - User Profile Manager
 *
 * SAME EXERCISE - DIFFERENT FORM APPROACH!
 *
 * KEY DIFFERENCE: Use CONTROLLED components for form inputs!
 * - Add value prop to inputs (synced with state)
 * - Add onChange handler to update state
 * - Form state updates on every keystroke
 *
 * CHECKLIST (Same as before):
 * □ STEP 1: Create states (users, filter, formData)
 * □ STEP 2: Create handleSubmit function
 * □ STEP 3: Build CONTROLLED form (value + onChange)
 * □ STEP 4: Display users list with map & keys
 * □ STEP 5: Add 2 useEffects (mount & users change)
 * □ STEP 6: Add handleDelete & handleToggle
 * □ STEP 7: Add filter buttons & filteredUsers logic
 * □ STEP 8: Create UserCard child component
 * □ STEP 9: Use React Fragments
 * □ STEP 10: Know class vs functional (theoretical)
 * STEP 11 : HOC (withLoading)
 * SETP 12 : Render Props
 *
 * BUILD IT ALL BY YOURSELF! 💪
 */





const UserProfileControlled = () => {
  const [user, setUser] = useState([]);
  const [filterType, setFilterType] = useState("ALL");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "dev",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name === "" || formData.email === "") {
      alert("insert data");
      return;
    }
    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role,
      isActive: true,
    };
    setUser([...user, newUser]);
    setFormData({ name: "", email: "", role: "dev" });
  };

  useEffect(() => {
    console.log("mounted");
  }, []);
  useEffect(() => {
    console.log("updating");
  }, [user]);

  const handleDelete = (id) => {   
      setUser(user.filter((item) => item.id !== id));    
  };
  const handleToggle = (id) => {
    setUser(
      user.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };
  
  const filterDetails = user.filter((item) => {
    if (filterType === "ALL") return true;
    if (filterType === "ACTIVE") return item.isActive === true;
    if (filterType === "INACTIVE") return item.isActive === false;
  });

  return (
    <>
      <div style={{ maxWidth: "700px", margin: "40px auto", padding: "30px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", background: "#f5f7fa", minHeight: "100vh" }}>
        <h1 style={{ textAlign: "center", color: "#2c3e50", marginBottom: "30px", fontSize: "32px", fontWeight: "600" }}>
          👤 User Manager
        </h1>

        {/* Add User Form */}
        <form onSubmit={handleSubmit} style={{ background: "white", padding: "25px", borderRadius: "12px", marginBottom: "30px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <h3 style={{ marginBottom: "20px", color: "#34495e" }}>Add New User</h3>
          
          <input onChange={handleChange} value={formData.name} name="name" type="text" placeholder="Enter Name" style={{ width: "100%", padding: "12px 15px", marginBottom: "15px", border: "2px solid #e0e0e0", borderRadius: "8px", fontSize: "15px", outline: "none", transition: "border 0.3s" }} />
          
          <input onChange={handleChange} value={formData.email} name="email" type="email" placeholder="Enter Email" style={{ width: "100%", padding: "12px 15px", marginBottom: "15px", border: "2px solid #e0e0e0", borderRadius: "8px", fontSize: "15px", outline: "none", transition: "border 0.3s" }} />
          
          <select onChange={handleChange} value={formData.role} name="role" style={{ width: "100%", padding: "12px 15px", marginBottom: "20px", border: "2px solid #e0e0e0", borderRadius: "8px", fontSize: "15px", outline: "none", cursor: "pointer", background: "white" }}>
            <option value="user">User</option>
            <option value="designer">Designer</option>
            <option value="admin">Admin</option>
          </select>
          
          <button style={{ width: "100%", padding: "14px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "600", cursor: "pointer", transition: "transform 0.2s" }} onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"} onMouseOut={(e) => e.target.style.transform = "translateY(0)"}>
            ➕ ADD USER
          </button>
        </form>

        {/* Filter Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px", justifyContent: "center" }}>
          <button onClick={() => setFilterType("ALL")} style={{ padding: "10px 20px", border: "none", borderRadius: "20px", background: filterType === "ALL" ? "#3498db" : "#ecf0f1", color: filterType === "ALL" ? "white" : "#34495e", fontWeight: "600", cursor: "pointer", transition: "all 0.3s" }}>
            All ({user.length})
          </button>
          <button onClick={() => setFilterType("ACTIVE")} style={{ padding: "10px 20px", border: "none", borderRadius: "20px", background: filterType === "ACTIVE" ? "#2ecc71" : "#ecf0f1", color: filterType === "ACTIVE" ? "white" : "#34495e", fontWeight: "600", cursor: "pointer", transition: "all 0.3s" }}>
            Active
          </button>
          <button onClick={() => setFilterType("INACTIVE")} style={{ padding: "10px 20px", border: "none", borderRadius: "20px", background: filterType === "INACTIVE" ? "#e74c3c" : "#ecf0f1", color: filterType === "INACTIVE" ? "white" : "#34495e", fontWeight: "600", cursor: "pointer", transition: "all 0.3s" }}>
            Inactive
          </button>
        </div>

        {/* Users List */}
        <div style={{ marginTop: "20px" }}>
        <MultipleFilteredList data={user} filterType={filterType} renderHeader={(count) => <h3>Total : {count}</h3>} renderItem={(item) => <UserCardwithConfirmations
                key={item.id}
                item={item}
                onDelete={handleDelete}
                onToggle={handleToggle}
              />} renderEmpty = {() => <p>no user found</p>} >
          </MultipleFilteredList>
        </div>
      </div>
    </>
  );
};


const withLoading = (UserCardwithLoading) => {
    return(props) => {
        const [loading,setLoading] = useState(true);
        useEffect(()=>{
            setTimeout(()=>{
                setLoading(false)
            },500)
        },[])
        if(loading){
            return <div>...Loading</div>
        }
        return <UserCardwithLoading {...props}/>
    }
}

const withLogger = (UserCardwithLogger) => {
    return(props) => {
        const enhanceDelete = (id) =>{
            console.log(id + ' Deleted');
            props.onDelete(id);
        }
        return <UserCardwithLogger {...props} onDelete={enhanceDelete}/>
    }
}

const withHeighLight = (UserCardwithHeighLight) => {
    return(props) => {

        if(props.item.isActive){
            return <div style={{ border: "3px solid #2ecc71", borderRadius: "12px", padding: "3px", marginBottom: "15px", boxShadow: '0 4px 20px rgba(46, 204, 113, 0.25)' }}><UserCardwithHeighLight {...props}/> </div>
        }else{
            return <div style={{ border: "3px solid #e74c3c", borderRadius: "12px", padding: "3px", marginBottom: "15px", boxShadow: '0 4px 20px rgba(231, 76, 60, 0.25)' }}><UserCardwithHeighLight {...props}/> </div>
        }
       
    }
}

const withConfirmation = (UserCardwithConfirmation) => {
    return(props) => {
        const enhanceDelete = (id) => {
            const confirmation = window.confirm("Are you sure?");
            if(confirmation){
                props.onDelete(id);
            }
        }

        return <UserCardwithConfirmation {...props}  onDelete={enhanceDelete}/>
        
    }
}



const MultipleFilteredList = ({ data, filterType, renderHeader,renderItem, renderEmpty}) => {
  const filteredData = data.filter((item)=>{
    if(filterType === 'ALL') return true
    if(filterType === 'ACTIVE') return item.isActive === true;
    if(filterType === 'INACTIVE') return item.isActive === false;     
  })
   // 2. If empty, call renderEmpty
  if(filteredData.length === 0) {
    return renderEmpty()
  }
  return (
    <div>
      {renderHeader(filteredData.length)}
      {filteredData.map(item => renderItem(item))}
    </div>
  )  
}

const UserCard = ({ item, onDelete, onToggle }) => {
  return (
    <div style={{ background: item.isActive ? "rgba(46, 204, 113, 0.08)" : "rgba(231, 76, 60, 0.08)", padding: "20px", marginBottom: "0px", borderRadius: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "all 0.3s" }}>
      <div style={{ flex: 1 }}>
        <p style={{ margin: "0 0 10px 0", fontWeight: "bold", fontSize: "20px", color: "#2c3e50" }}>
          {item.name}
        </p>
        <p style={{ margin: "0 0 10px 0", color: "#5a6c7d", fontSize: "15px" }}>
          📧 {item.email}
        </p>
        <p style={{ margin: "0 0 12px 0", color: "#7f8fa6", fontSize: "13px", textTransform: "uppercase", fontWeight: "700", letterSpacing: "0.5px" }}>
          🎭 {item.role}
        </p>
        <span style={{ padding: "8px 16px", background: item.isActive ? "#2ecc71" : "#e74c3c", color: "white", borderRadius: "25px", fontSize: "13px", fontWeight: "700", display: "inline-block" }}>
          {item.isActive ? "✓ ACTIVE" : "✗ INACTIVE"}
        </span>
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginLeft: "20px" }}>
        <button onClick={() => onToggle(item.id)} style={{ padding: "12px 24px", background: item.isActive ? "#f39c12" : "#3498db", color: "white", border: "none", borderRadius: "8px", fontSize: "14px", fontWeight: "700", cursor: "pointer", transition: "all 0.3s", whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }} onMouseOver={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)"; }} onMouseOut={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)"; }}>
          {item.isActive ? "Deactivate" : "Activate"}
        </button>
        <button onClick={() => onDelete(item.id)} style={{ padding: "12px 24px", background: "#e74c3c", color: "white", border: "none", borderRadius: "8px", fontSize: "14px", fontWeight: "700", cursor: "pointer", transition: "all 0.3s", whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }} onMouseOver={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)"; }} onMouseOut={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)"; }}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

const UserCardwithLoading = withLoading(UserCard);

const UserCardwithLoggers =  withLogger(UserCardwithLoading)

const UserCardwithHeighLights = withHeighLight(UserCardwithLoggers)

const UserCardwithConfirmations =  withConfirmation(UserCardwithHeighLights)


export default UserProfileControlled;
