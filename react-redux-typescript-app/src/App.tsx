import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Products from './pages/Products'
import SignUp from './pages/SignUp'

function App() {
  return (
    <>     
      {/* <Counter />
      <Score />
      <Theme />
      <TodoList />
      <Volume/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>     
      </BrowserRouter>
    </>
  )
}

export default App
