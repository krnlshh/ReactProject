// Navbar - Navigation with cart count (Redux)

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const { items: cartItems } = useSelector((state) => state.cart)
  const totalItems = cartItems.reduce((total, item) => total + (item?.quantity || 0), 0)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold fs-4">
          🛍️ ShopEase
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                🏠 Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                🛍️ Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link position-relative">
                🛒 Cart
                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
