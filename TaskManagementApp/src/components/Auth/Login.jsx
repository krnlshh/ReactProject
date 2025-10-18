// Import React hooks and routing tools
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
    // STATE 1: Store email input value
    // email = Current value of email field
    // setEmail = Function to update email
    // useState('') = Initially empty string
    const [email, setEmail] = useState('')
    
    // STATE 2: Store password input value
    // password = Current value of password field
    // setPassword = Function to update password
    // useState('') = Initially empty string
    const [password, setPassword] = useState('')
    
    // STATE 3: Store error messages
    // error = Error message to display (empty if no error)
    // setError = Function to update error message
    // useState('') = Initially no error
    const [error, setError] = useState('')
    
    // STATE 4: Track loading state during API call
    // loading = true when API is processing, false otherwise
    // setLoading = Function to update loading state
    // useState(false) = Initially not loading
    const [loading, setLoading] = useState(false)
    
    // Get login function from AuthContext (global storage)
    // login = Function to save user data after successful authentication
    const { login } = useContext(AuthContext)
    
    // Get navigate function for redirecting to other pages
    // navigate = Function to change current page/route
    const navigate = useNavigate()

    // FUNCTION: Handle form submission
    // Runs when user clicks "Login" button or presses Enter
    // Parameter: e = Form submit event
    const handleSubmit = async (e) => {
        // Step 1: Prevent default browser behavior (page refresh)
        // Without this, form would refresh page and lose all data
        e.preventDefault()
        
        // Step 2: Clear any previous error messages
        // Start fresh for new login attempt
        setError('')
        
        // Step 3: Start loading state
        // Button will show "Logging in..." and become disabled
        setLoading(true)
        
        // Step 4: Try to login (with error handling)
        try {
            // Make API call to JSON Server
            // Send email and password to check if user exists in database
            // await = Wait for API response before continuing
            const response = await fetch(
                `http://localhost:3000/users?email=${email}&password=${password}`
            )
            
            // Convert API response from JSON string to JavaScript object
            // users = Array of matching users (empty array if no match)
            // await = Wait for conversion to complete
            const users = await response.json()
            
            // Step 5: Check if we found a matching user
            if (users.length > 0) {
                // SUCCESS: User found in database
                // users[0] = First (and should be only) matching user object
                
                // Call login function from AuthContext
                // This saves user to state + localStorage
                login(users[0])
                
                // Redirect user to dashboard page
                // Login successful, show them their dashboard
                navigate('/dashboard')
            } else {
                // FAILURE: No matching user found
                // Email or password is incorrect
                setError('Invalid email or password')
            }
        } catch (err) {
            // ERROR: Something went wrong (network error, server down, etc.)
            // Show generic error message to user
            setError('Something went wrong. Please try again.')
        } finally {
            // ALWAYS runs (whether success or error)
            // Stop loading state
            // Button shows "Login" again and becomes clickable
            setLoading(false)
        }
    }

    // RENDER: Return JSX (UI)
    return (
        <div className="container mt-5">
            {/* Center the login form */}
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {/* Card container with shadow */}
                    <div className="card shadow">
                        {/* Card header with blue background */}
                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0">🔐 Login</h3>
                        </div>
                        
                        {/* Card body with form */}
                        <div className="card-body">
                            {/* Show error message if error exists */}
                            {/* error && = Only render if error is not empty */}
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            
                            {/* Login form */}
                            {/* onSubmit = When form submits, call handleSubmit */}
                            <form onSubmit={handleSubmit}>
                                {/* Email input field */}
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input 
                                        type="email"  // HTML5 email validation
                                        className="form-control"  // Bootstrap styling
                                        value={email}  // Display current email state value
                                        onChange={(e) => setEmail(e.target.value)}  // Update state when user types
                                        required  // HTML5 validation - field cannot be empty
                                        placeholder="Enter your email"
                                    />
                                </div>
                                
                                {/* Password input field */}
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input 
                                        type="password"  // Hide password characters
                                        className="form-control"  // Bootstrap styling
                                        value={password}  // Display current password state value
                                        onChange={(e) => setPassword(e.target.value)}  // Update state when user types
                                        required  // HTML5 validation - field cannot be empty
                                        placeholder="Enter your password"
                                    />
                                </div>
                                
                                {/* Submit button */}
                                <button 
                                    type="submit"  // This button submits the form
                                    className="btn btn-primary w-100"  // Bootstrap styling, full width
                                    disabled={loading}  // Disable button when loading = true
                                >
                                    {/* Conditional text based on loading state */}
                                    {/* If loading = true, show "Logging in...", else show "Login" */}
                                    {loading ? 'Logging in...' : 'Login'}
                                </button>
                            </form>
                            
                            {/* Test credentials info box */}
                            <div className="alert alert-info mt-3">
                                <small>
                                    <strong>Test Login:</strong><br/>
                                    Email: john@example.com<br/>
                                    Password: password123
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Export component so it can be imported in other files
export default Login

// IMPORTS (Lines 1-3):
// - useState: Manage form inputs and UI states
// - useContext: Access AuthContext data
// - useNavigate: Redirect to other pages

// STATES (Lines 6-26):
// - email: Store email input
// - password: Store password input
// - error: Store error messages
// - loading: Track API call status

// CONTEXT & NAVIGATION (Lines 28-32):
// - login: Function from AuthContext to save user
// - navigate: Function to redirect pages

// HANDLER FUNCTION (Lines 34-68):
// - handleSubmit: Process login when form submits
//   1. Prevent page refresh
//   2. Clear old errors
//   3. Start loading
//   4. Call API to verify credentials
//   5. If success → login + redirect
//   6. If failure → show error
//   7. Always stop loading

// JSX/UI (Lines 70-145):
// - Bootstrap styled form
// - Two inputs: email, password
// - Error display (conditional)
// - Submit button with loading state
// - Test credentials info