import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{
      padding: "40px", 
      textAlign: "center",
      backgroundColor: "#ffebee"
    }}>
      <h1 style={{fontSize: "72px", color: "#d32f2f"}}>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link 
        to="/" 
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#1976d2",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px"
        }}
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound


