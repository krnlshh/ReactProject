import { useSelector, useDispatch } from "react-redux"
import { removeFromCart, updateQuantity, clearCart } from "../redux/slices/cartSlice"
import { Link } from "react-router-dom"

const CartPage = () => {
    const { items: cartItems } = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(removeFromCart(id))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const handleMinus = (id) => {
        const item = cartItems.find(item => item.id === id)
        if (item.quantity === 1) {
            dispatch(removeFromCart(id))
        } else {
            dispatch(updateQuantity({ id, quantity: item.quantity - 1 }))
        }
    }

    const handlePlus = (id) => {
        const item = cartItems.find(item => item.id === id)
        dispatch(updateQuantity({ id, quantity: item.quantity + 1 }))
    }

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>🛒 Shopping Cart ({totalItems} items)</h2>
                {cartItems.length > 0 && (
                    <button className="btn btn-danger" onClick={handleClearCart}>
                        🗑️ Clear Cart
                    </button>
                )}
            </div>

            {cartItems.length === 0 ? (
                <div className="text-center py-5">
                    <h4 className="text-muted mb-4">Your cart is empty</h4>
                    <Link to="/products" className="btn btn-primary">
                        🛍️ Continue Shopping
                    </Link>
                </div>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div key={item.id} className="card mb-3 shadow-sm">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-2">
                                        <img 
                                            src={item.thumbnail || item.image} 
                                            alt={item.title}
                                            style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <Link to={`/product/${item.id}`} className="text-decoration-none">
                                            <h6 className="mb-0">{item.title}</h6>
                                        </Link>
                                    </div>
                                    <div className="col-md-2">
                                        <p className="mb-0 text-success fw-bold">${item.price}</p>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="btn-group" role="group">
                                            <button 
                                                className="btn btn-outline-secondary btn-sm" 
                                                onClick={() => handleMinus(item.id)}
                                            >
                                                -
                                            </button>
                                            <button className="btn btn-outline-secondary btn-sm" disabled>
                                                {item.quantity}
                                            </button>
                                            <button 
                                                className="btn btn-outline-secondary btn-sm" 
                                                onClick={() => handlePlus(item.id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-2 text-end">
                                        <button 
                                            className="btn btn-danger btn-sm" 
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            🗑️ Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="card shadow mt-4 bg-light">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="mb-0">Total Items: {totalItems}</h5>
                                </div>
                                <div>
                                    <h4 className="text-success mb-0">Total: ${total.toFixed(2)}</h4>
                                </div>
                            </div>
                            <hr />
                            <button className="btn btn-success btn-lg w-100">
                                ✅ Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CartPage
