import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Common/Navbar'
import ProductFilter from './pages/ProductFilter'
import UseCallbackDemo from './pages/UseCallbackDemo'
import UseCallbackGuide from './pages/UseCallbackGuide'
import QuestionAndAnswer from './pages/QuestionAndAnswer'
import Register from './components/Auth/Register'
import Student from './pages/Student'
import ErrorBoundaryDemo from './pages/ErrorBoundaryDemo'
import ShoppingCart from './pages/ShoppingCart'
import ReactPractice from './pages/ReactPractice'
import InterviewExercise from './pages/InterviewExercise'
import UserProfileManagerPractice from './components/TaskDetails/UserProfileManagerPractice'
import UserProfileControlled from './components/TaskDetails/UserProfileControlled'
import UserProfileRound4 from './components/TaskDetails/UserProfileRound4'
import { CartProvider } from './context/CartContext'
import ErrorBoundary from './components/Common/ErrorBoundary';
import React, { lazy } from 'react'
// import BuggyComponent from './components/BuggyComponent';
const BuggyComponent = React.lazy(() => import ('./components/BuggyComponent'));
import { Suspense } from 'react'

function App() {
  
  return (
    <>
      <Navbar />
      <CartProvider>
        <Routes>
          <Route path="/" element={<ProductFilter />} />
          <Route path="/callback-demo" element={<UseCallbackDemo />} />
          <Route path="/callback-guide" element={<UseCallbackGuide />} />
          <Route path="/interview-qa" element={<QuestionAndAnswer />} />
          <Route path="/react-practice" element={<ReactPractice />} />
          <Route path="/register" element={<Register />} />      
          <Route path="/students" element={<Student />} />
          <Route path="/error-boundary" element={<ErrorBoundaryDemo />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/interview-exercise" element={<InterviewExercise />} />
          <Route path="/practice-round2" element={<UserProfileManagerPractice />} />
          <Route path="/controlled-version" element={<UserProfileControlled />} />
          <Route path="/round4" element={<UserProfileRound4 />} />
          <Route path="/error-test" element={
            <ErrorBoundary>
              <Suspense fallback={<div>...loading</div>}>
                <BuggyComponent />
              </Suspense>
            </ErrorBoundary>
          } />
          </Routes>
      </CartProvider>
      
    </>
  )
}


export default App