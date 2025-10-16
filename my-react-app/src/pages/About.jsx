import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div style={{padding: "20px"}}>
      <h2>About Page (No Navbar)</h2>
      <p>This is the About page without navbar.</p>
      
      <div style={{margin: "20px 0", padding: "10px", backgroundColor: "#f5f5f5"}}>
        <h4>About Sub-sections:</h4>
        <Link to="/about/user/info" style={{marginRight: "15px"}}>Info</Link>
        <Link to="/about/login" style={{marginRight: "15px"}}>Login</Link>
        <Link to="/about/service" style={{marginRight: "15px"}}>Service</Link>
      </div>

      {/* Outlet renders the nested route components */}
      <Outlet />
    </div>
  )
}

export default About
