import {createContext,useState,useEffect} from "react"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    // We'll add functions here later (login, logout, etc.)
    
    // MUST return Provider with children so app renders!
    return (
        <AuthContext.Provider value={{ currentUser, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}
