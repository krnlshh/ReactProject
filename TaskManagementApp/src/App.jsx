import { Routes, Route, Link } from 'react-router-dom'
import QuestionAndAnswer from './pages/QuestionAndAnswer'
import UserProfileControlled from './components/TaskDetails/UserProfileControlled'
import TabsCompound from './components/TaskDetails/TabsCompound'
import UsersPage from './pages/UsersPage'
import UseRefPractice from './components/UseRefPractice'
import UseReducerPractice from './components/UseReducerPractice'
import UseMemoCallbackPractice from './components/UseMemoCallbackPractice'
import UseCallbackPractice from './components/UseCallbackPractice'
import Prectice from './components/TaskDetails/Prectice'
import './App.css'
import ReduxCounterPage from './pages/ReduxCounterPage'
import ReduxTodosPage from './pages/ReduxTodosPage'

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
            <Link to="/tabs-compound" className="nav-link">Tabs Compound</Link>
            <Link to="/users" className="nav-link">User Dashboard</Link>
            <Link to="/useref-practice" className="nav-link">useRef</Link>
            <Link to="/usereducer-practice" className="nav-link">useReducer</Link>
            <Link to="/performance-practice" className="nav-link">useMemo</Link>
            <Link to="/usecallback-practice" className="nav-link">useCallback</Link>
            <Link to="/practice" className="nav-link">Practice</Link>
            <Link to="/redux-counter" className="nav-link">Redux Counter</Link>
            <Link to="/redux-todos" className="nav-link">Redux Todos</Link>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<QuestionAndAnswer />} />
        <Route path="/user-profile" element={<UserProfileControlled />} />
        <Route path="/tabs-compound" element={<TabsCompound />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/useref-practice" element={<UseRefPractice />} />
        <Route path="/usereducer-practice" element={<UseReducerPractice />} />
        <Route path="/performance-practice" element={<UseMemoCallbackPractice />} />
        <Route path="/usecallback-practice" element={<UseCallbackPractice />} />
        <Route path="/practice" element={<Prectice />} />
        <Route path="/redux-counter" element={<ReduxCounterPage />} />
        <Route path="/redux-todos" element={<ReduxTodosPage />} />
      </Routes>
    </>
  )
}

export default App
