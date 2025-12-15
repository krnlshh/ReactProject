import { useMemo, useState } from "react"

const UseMemoCallbackPractice = () => {
  
  const [cartItem,setCartItem] = useState([
    {id:1,product:'mobile',price:200,qty:2},
    {id:2,product:'laptop',price:900,qty:2},
    {id:3,product:'chips',price:500,qty:3},
    {id:4,product:'keyboard',price:500,qty:4}
  ])

  const handleDelete = (id) =>{setCartItem(cartItem.filter((item)=>item.id!==id))}
  const AddItem = () => {
    const newItem = {id:Date.now(),product:'product'+ Date.now(),price: Math.floor(Math.random() * 100) + 1,qty:1}
    setCartItem([...cartItem,newItem])
  }

  const subTotal = useMemo(()=>{console.log('subTotal'); return cartItem.reduce((total,item)=>total + (item.price*item.qty),0)},[cartItem])
  const tax = useMemo(()=>{console.log('tax'); return subTotal * 0.18},[subTotal])
  const discount = useMemo(()=>{console.log('discount'); return subTotal>2000 ? subTotal * 0.1 : 0},[subTotal])
  const total = useMemo(()=>{console.log('total'); return subTotal + tax - discount},[subTotal,tax,discount])

  const [theme,setTheme] = useState('dark')

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  

  return <div style={{
    padding: '20px',
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    minHeight: '100vh'
  }}>
    <h2>Shopping Cart</h2>
    <p>Current Theme: <strong>{theme}</strong></p>
    
    <button onClick={AddItem} style={{
      padding: '10px 20px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginRight: '10px',
      marginBottom: '20px'
    }}>Add Item</button>
    <button onClick={handleTheme} style={{
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginBottom: '20px'
    }}>Toggle Theme</button>
    
    {
      cartItem.map((item)=>
        <div key={item.id} style={{
          border: theme === 'dark' ? '1px solid #555' : '1px solid #ccc',
          backgroundColor: theme === 'dark' ? '#444' : '#f9f9f9',
          padding: '15px',
          marginBottom: '10px',
          display: 'flex',
          gap: '15px',
          alignItems: 'center',
          borderRadius: '5px'
        }}>
          <p><strong>Product:</strong> {item.product}</p>
          <p><strong>Price:</strong> ${item.price}</p>
          <p><strong>Qty:</strong> {item.qty}</p>
          <button onClick={()=>handleDelete(item.id)} style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginLeft: 'auto'
          }}>Delete</button>
        </div>
      )
    }
    
    <div style={{
      border: theme === 'dark' ? '2px solid #555' : '2px solid #333',
      padding: '15px',
      marginTop: '20px',
      width: '300px',
      backgroundColor: theme === 'dark' ? '#444' : '#f9f9f9',
      borderRadius: '5px'
    }}>
      <h3>Summary</h3>
      <p>Subtotal: ${subTotal.toFixed(2)}</p>
      <p>Tax (18%): ${tax.toFixed(2)}</p>
      <p>Discount: ${discount.toFixed(2)}</p>
      <hr />
      <p><strong>Total: ${total.toFixed(2)}</strong></p>
    </div>
  </div>
}

export default UseMemoCallbackPractice

