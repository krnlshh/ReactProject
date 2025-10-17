import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      width: "100%",
      padding: "15px 20px", 
      backgroundColor: "#343a40",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <div style={{maxWidth: "1400px", margin: "0 auto", display: "flex", gap: "20px", flexWrap: "wrap"}}>
        <Link to="/" style={{color: "#fff", textDecoration: "none", padding: "8px 15px", borderRadius: "4px", transition: "background 0.3s"}}>Home</Link>
        <Link to="/about" style={{color: "#fff", textDecoration: "none", padding: "8px 15px", borderRadius: "4px"}}>About</Link>
        <Link to="/contact" style={{color: "#fff", textDecoration: "none", padding: "8px 15px", borderRadius: "4px"}}>Contact</Link>
        <Link to="/user/list" style={{color: "#fff", textDecoration: "none", padding: "8px 15px", borderRadius: "4px"}}>User List</Link>
        <Link to="/practice" style={{color: "#fff", textDecoration: "none", padding: "8px 15px", borderRadius: "4px"}}>Practice</Link>
        <Link to="/interview" style={{color: "#fff", textDecoration: "none", padding: "8px 15px", borderRadius: "4px", backgroundColor: "#007bff"}}>Interview</Link>
        <Link to="/task-management" style={{color: "#fff", textDecoration: "none", padding: "8px 15px", borderRadius: "4px", backgroundColor: "#17a2b8", fontWeight: "bold"}}>🎯 Task Management</Link>
        <Link to="/challenge-details" style={{color: "#fff", textDecoration: "none", padding: "8px 15px", borderRadius: "4px", backgroundColor: "#28a745", fontWeight: "bold"}}>📋 Challenge Details</Link>
      </div>
    </nav>      
  )
}

export default Navbar
