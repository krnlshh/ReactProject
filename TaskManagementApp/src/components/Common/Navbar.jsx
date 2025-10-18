// Import routing and React tools
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
    // Get authentication data from AuthContext (global storage)
    // isAuthenticated = Boolean (true if logged in, false if not)
    // currentUser = User object with name, email, etc. (null if not logged in)
    // logout = Function to clear user data and log out
    const { isAuthenticated, currentUser, logout } = useContext(AuthContext)
    
    // Get navigate function for redirecting to other pages
    // navigate = Function to change current page/route
    const navigate = useNavigate()

    // FUNCTION: Handle logout button click
    // Runs when user clicks the "Logout" button
    const handleLogout = () => {
        // Step 1: Call logout function from AuthContext
        // This clears: currentUser (set to null), isAuthenticated (set to false)
        // Also removes user data from localStorage
        logout()
        
        // Step 2: Redirect user to login page
        // After logout, send them back to login
        navigate('/login')
    }

    // RENDER: Return JSX (UI)
    return(
        // Bootstrap navbar with dark background
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container-fluid">
                {/* Logo/Brand - Clicking goes to home page */}
                <Link to="/" className="navbar-brand">
                    🎯 Task Manager
                </Link>
                
                {/* Navigation Links - Right side of navbar */}
                <div className="navbar-nav ms-auto">
                    {/* Home link - Always visible to everyone */}
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    
                    {/* Dashboard link - Only visible when user is logged in */}
                    {/* isAuthenticated && = If true, render Dashboard link */}
                    {/* If false, nothing is rendered (link is hidden) */}
                    {isAuthenticated && (
                        <Link to="/dashboard" className="nav-link">
                            Dashboard
                        </Link>
                    )}
                    
                    {/* Conditional rendering based on authentication status */}
                    {/* If logged in, show username + logout button */}
                    {/* If NOT logged in, show login link */}
                    {isAuthenticated ? (
                        // USER IS LOGGED IN - Show this block
                        <>
                            {/* Display username */}
                            {/* currentUser?.name = Optional chaining (safe access) */}
                            {/* If currentUser is null, won't crash */}
                            <span className="nav-link text-white">
                                👤 {currentUser?.name}
                            </span>
                            
                            {/* Logout button */}
                            {/* onClick = When clicked, call handleLogout function */}
                            <button 
                                onClick={handleLogout} 
                                className="btn btn-outline-light btn-sm ms-2"
                            >
                                🚪 Logout
                            </button>
                        </>
                    ) : (
                        // USER IS NOT LOGGED IN - Show this block
                        // Login link - Clicking goes to login page
                        <Link to="/login" className="nav-link">
                            🔐 Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    )
}

// Export component so it can be imported in other files
export default Navbar;