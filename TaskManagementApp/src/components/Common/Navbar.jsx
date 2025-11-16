// Import routing tools
import { Link } from 'react-router-dom'

const Navbar = () => {
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
                    {/* Interview Q&A - MOST IMPORTANT */}
                    <Link to="/interview-qa" className="nav-link" style={{color: '#00ff00', fontWeight: 'bold', fontSize: '1.1rem'}}>
                        🎯 Interview Q&A
                    </Link>
                    
                    {/* React Practice link */}
                    <Link to="/react-practice" className="nav-link" style={{color: '#61dafb', fontWeight: 'bold'}}>
                        ⚛️ React Practice
                    </Link>
                    
                    {/* Product Filter link */}
                    <Link to="/" className="nav-link">
                        🛍️ Product Filter
                    </Link>
                    
                    {/* useCallback Demo link */}
                    <Link to="/callback-demo" className="nav-link">
                        ⚡ useCallback Demo
                    </Link>
                    
                    {/* useCallback Guide link */}
                    <Link to="/callback-guide" className="nav-link">
                        📚 useCallback Guide
                    </Link>
                    
                    {/* Register link */}
                    <Link to="/register" className="nav-link">
                        📝 Register
                    </Link>
                    
                    {/* Students link */}
                    <Link to="/students" className="nav-link">
                        📚 Students
                    </Link>
                    
                    {/* Shopping Cart link */}
                    <Link to="/shopping-cart" className="nav-link" style={{color: '#ffc107', fontWeight: 'bold'}}>
                        🛒 Shopping Cart
                    </Link>
                    
                    {/* Error Boundary Demo link */}
                    <Link to="/error-test" className="nav-link">
                        🐛 Search bar
                    </Link>
                </div>
            </div>
        </nav>
    )
}

// Export component so it can be imported in other files
export default Navbar;