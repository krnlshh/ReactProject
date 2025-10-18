import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useContext(AuthContext)
    
    // ✅ NEW: Wait while checking localStorage
    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Checking authentication...</p>
            </div>
        )
    }
    
    // After loading is done, check if authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }
    
    return children
}

export default ProtectedRoute