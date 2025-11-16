import React, { useState, useEffect } from "react";

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
      <div
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          padding: "20px",
          fontFamily: "Arial",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#333" }}>
          User Manager - Controlled
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{
            border: "2px solid #ddd",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
            background: "#f9f9f9",
          }}
        >
          <input
            onChange={handleChange}
            value={formData.name}
            name="name"
            type="text"
            placeholder="Name"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          />
          <input
            onChange={handleChange}
            value={formData.email}
            name="email"
            type="text"
            placeholder="Email"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          />
          <select
            onChange={handleChange}
            value={formData.role}
            name="role"
            type="select"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          >
            <option value="user">User</option>
            <option value="designer">Designer</option>
            <option value="admin">Admin</option>
          </select>
          <button
            style={{
              width: "100%",
              padding: "12px",
              background: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            ADD USER
          </button>
        </form>

        <h3 style={{ marginBottom: "15px", color: "#333" }}>
          Users: {user.length}
        </h3>

        {filterDetails.map((item) => (
          <UserCard
            key={item.id}
            item={item}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))}
        <button onClick={() => setFilterType("ALL")}>ALL</button>
        <button onClick={() => setFilterType("ACTIVE")}>ACTIVE</button>
        <button onClick={() => setFilterType("INACTIVE")}>INACTIVE</button>
      </div>
    </>
  );
};




const UserCard = ({ item, onDelete, onToggle ,}) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "6px",
        background: "white",
      }}
    >
      <p style={{ margin: "5px 0", fontWeight: "bold" }}>{item.name}</p>
      <p style={{ margin: "5px 0", color: "#666" }}>{item.email}</p>
      <p style={{ margin: "5px 0", color: "#888" }}>{item.role}</p>
      <span
        style={{
          padding: "4px 10px",
          background: item.isActive ? "#4CAF50" : "#f44336",
          color: "white",
          borderRadius: "12px",
          fontSize: "12px",
        }}
      >
        {item.isActive ? "ACTIVE" : "INACTIVE"}
      </span>
      <button onClick={() => onDelete(item.id)}>Delete User</button>
      <button onClick={() => onToggle(item.id)}>Toggle Active</button>
    </div>
  );
};


export default UserProfileControlled;
