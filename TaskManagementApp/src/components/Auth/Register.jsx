import {useState} from "react"
import { useNavigate } from 'react-router-dom'

const Register = () => {
    // STATE 1: Store form input values (name, email, password)
    const [userData,setUserData] = useState({
        name: '',
        email: '',
        password: ''
    })
    
    // STATE 2: Track loading state during API calls
    const [loading,setLoading] = useState(false);
    
    // STATE 3: Store error messages to display
    const [error,setError] = useState('');

    // STATE 3: Store success messages to display
    const [success,setSuccess] = useState('');

    // Get navigate function for redirecting to other pages
    const navigate = useNavigate()

    // FUNCTION: Update state when user types in any input field
    const handleInput = (e) => {
        const {name,value} = e.target
        setUserData(prev => ({...prev, [name]:value}));       
    }

    // FUNCTION: Handle form submission and registration
    const handleSubmit = async(e) => {
        // Step 1: Prevent page refresh on form submit
        e.preventDefault();
        
        // Step 2: Clear any previous error messages
        setError('');
        
        // Step 3: Start loading state
        setLoading(true);
        
        try {
            // Step 4: CHECK IF EMAIL ALREADY EXISTS
            // Make GET request with email filter
            // JSON Server will search database and return matching users
            const checkEmail = await fetch(`http://localhost:3000/users?email=${userData.email}`)
            const existingUsers = await checkEmail.json();
            
            // Step 5: Validate - existingUsers is an ARRAY
            // If array has items (length > 0), email is already registered
            if(existingUsers.length > 0) {
                setError('❌ Email already registered. Please use a different email or login.');
                return; // Stop execution - don't continue registration
            }
            
            // Step 6: Email is available! Prepare user data for registration
            // Add avatar (random image) and role (default 'user')
            const data = {
                ...userData, // Spread operator copies name, email, password
                avatar: `https://i.pravatar.cc/150?u=${Date.now()}`, // Random avatar URL
                role: 'user' // Default role
            }
            
            // Step 7: Make POST request to create new user
            const response = await fetch('http://localhost:3000/users',{
                method:'POST',
                headers:{'Content-Type' : 'application/json'},
                body: JSON.stringify(data) // Convert JS object to JSON string
            })
           
            // Step 8: Check if registration was successful
            if(response.ok){
                // Success! Clear form fields
                setUserData({
                    name: '',
                    email: '',
                    password: ''
                })
                // Show success message
                setSuccess('✅ Registration successful! Redirecting to login page...')
                
                // Wait 2 seconds before redirecting (let user see success message)
                setTimeout(() => {
                    navigate('/login')
                }, 2000) // 2000 milliseconds = 2 seconds
            } else {
                // Response was not OK (4xx or 5xx error)
                setError('❌ Registration failed. Please try again.')
            }
        
        } catch(err) {
            // Network error or other unexpected error
            setError('❌ Registration failed. Please check your connection and try again.');
            console.error('Registration error:', err);
        } finally {
            // Always runs - stop loading state
            setLoading(false);
        }
    }

    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header bg-success text-white">
                            <h3 className="mb-0">📝 Register</h3>
                        </div>
                        
                        <div className="card-body">
                            {/* Show error message if error exists */}
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            {success && (
                                <div className="alert alert-success" role="alert">
                                    {success}
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input 
                                        placeholder="Enter name" 
                                        required 
                                        onChange={handleInput} 
                                        type="text" 
                                        name="name"  
                                        value={userData.name}
                                        className="form-control"
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input 
                                        placeholder="Enter email" 
                                        required 
                                        onChange={handleInput} 
                                        type="email" 
                                        name="email" 
                                        value={userData.email}
                                        className="form-control"
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input 
                                        placeholder="Enter password" 
                                        required 
                                        onChange={handleInput} 
                                        type="password" 
                                        name="password" 
                                        value={userData.password}
                                        className="form-control"
                                    />
                                </div>
                                
                                <button 
                                    type="submit"
                                    className="btn btn-success w-100" 
                                    disabled={loading}
                                >
                                    {loading ? 'Creating Account...' : 'Sign Up'}
                                </button>
                            </form>
                            
                            <div className="text-center mt-3">
                                <small className="text-muted">
                                    Already have an account? <a href="/login">Login here</a>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Register