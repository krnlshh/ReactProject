import { Routes, Route, Link } from 'react-router-dom'
import QuestionAndAnswer from './pages/QuestionAndAnswer'
import UserProfileControlled from './components/TaskDetails/UserProfileControlled'
import './App.css'

function App() {
  
  return (
    <>
      {/* Simple Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand">TaskManagement App</span>
          <div className="navbar-nav">
            <Link to="/" className="nav-link">Interview Q&A</Link>
            <Link to="/user-profile" className="nav-link">User Profile</Link>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<QuestionAndAnswer />} />
        <Route path="/user-profile" element={<UserProfileControlled />} />
      </Routes>
    </>
  )
}

export default App