// Import React tools we need
import { createContext, useState, useEffect } from 'react'

// Create a shared storage box that all components can access
// Think of this as creating a "Google Drive folder" for user data
export const AuthContext = createContext()

// Create a wrapper component that will share user data with entire app
// This component wraps around <App /> in main.jsx
export const AuthProvider = ({ children }) => {
    // children = All components wrapped inside <AuthProvider>...</AuthProvider>
    
    // STATE 1: Store the logged-in user's information (name, email, etc.)
    // currentUser = The actual user data (object with name, email, id, role)
    // setCurrentUser = Function to UPDATE currentUser
    // useState(null) = Initially, no user is logged in (null = empty)
    const [currentUser, setCurrentUser] = useState(null)
    
    // STATE 2: Track if someone is logged in or not (true/false)
    // isAuthenticated = Boolean value (true = logged in, false = logged out)
    // setIsAuthenticated = Function to UPDATE isAuthenticated
    // useState(false) = Initially, nobody is logged in
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true) 
    // Update the useEffect (lines 28-49):
    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        
        if (storedUser) {
            const user = JSON.parse(storedUser)
            setCurrentUser(user)
            setIsAuthenticated(true)
        }
        
        // ✅ NEW: Mark that we finished checking
        setLoading(false)
    }, [])
    // AUTO-RUN when app loads: Check if user was previously logged in
    // useEffect runs this code automatically when app starts
    // [] = Empty dependency array means "run only ONCE on app load"
    useEffect(() => {
        // Check browser's localStorage for saved user data
        // localStorage = Browser's permanent storage (survives page refresh)
        // getItem('user') = Get data saved under the key 'user'
        const storedUser = localStorage.getItem('user')
        // storedUser will be: null (if not found) OR string (if found)
        
        // If we found saved user data, restore the login session
        if (storedUser) {
            // Convert text string back to JavaScript object
            // JSON.parse = Converts '{"name":"John"}' → {name: "John"}
            const user = JSON.parse(storedUser)
            
            // Update state: Save user data
            setCurrentUser(user)
            
            // Update state: Mark as logged in
            setIsAuthenticated(true)
            
            // Result: User stays logged in after page refresh ✅
        }
    }, [])  // [] = Run only once when app loads, not on every re-render

    // FUNCTION 1: Log in a user
    // This function is called by Login.jsx after successful API verification
    // Parameter: user = Object with user data from API {id, name, email, role, etc.}
    const login = (user) => {
        // Step 1: Save user data to state (for current session)
        setCurrentUser(user)
        
        // Step 2: Mark that someone is now logged in
        setIsAuthenticated(true)
        
        // Step 3: Save to browser storage (so it persists after refresh)
        // JSON.stringify = Converts {name: "John"} → '{"name":"John"}'
        // localStorage only stores text strings, not objects
        localStorage.setItem('user', JSON.stringify(user))
        
        // Result: User is logged in, data saved in state AND localStorage ✅
    }

    // FUNCTION 2: Log out a user
    // This function is called when user clicks "Logout" button in Navbar
    const logout = () => {
        // Step 1: Clear user data from state (set back to empty/null)
        setCurrentUser(null)
        
        // Step 2: Mark that nobody is logged in anymore
        setIsAuthenticated(false)
        
        // Step 3: Delete user data from browser storage
        // removeItem('user') = Delete the data saved under key 'user'
        localStorage.removeItem('user')
        
        // Result: User is fully logged out, all data cleared ✅
    }

    // SHARE everything with all child components
    // Any component can now access: currentUser, isAuthenticated, login, logout
    return (
        <AuthContext.Provider 
            value={{ 
                currentUser,      // Current user's data (or null if logged out)
                isAuthenticated,  // Is someone logged in? (true/false)
                loading,          // Is loading? (true/false)
                login,            // Function to log in
                logout           // Function to log out                                
            }}
        >
            {children}  {/* Render all wrapped components (App, Navbar, etc.) */}
        </AuthContext.Provider>
    )
}