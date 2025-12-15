import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from '../redux/slices/productSlice'
import { addToCart } from '../redux/slices/cartSlice'
import { Link } from "react-router-dom"

const ProductsPage = () => {
    const { items, loading, error } = useSelector((state) => state.products)
    const dispatch = useDispatch()
    
    // Local state for search, filter, sort
    const [searchText, setSearchText] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortOption, setSortOption] = useState('default')

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading products...</p>
            </div>
        )
    }
    
    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger text-center">
                    Error: {error}
                </div>
            </div>
        )
    }

    // Get unique categories
    const categories = ['all', ...new Set(items.map(item => item.category))]

    // Filter by search and category
    const filteredData = items.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(searchText.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    // Sort products
    const sortedData = [...filteredData].sort((a, b) => {
        if (sortOption === 'price-low') return a.price - b.price
        if (sortOption === 'price-high') return b.price - a.price
        if (sortOption === 'name-az') return a.title.localeCompare(b.title)
        return 0
    })

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">🛍️ Products</h2>
            
            {/* Filters Row */}
            <div className="row mb-4">
                <div className="col-md-4 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search products..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <select
                        className="form-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4 mb-3">
                    <select
                        className="form-select"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="default">Default</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="name-az">Name: A to Z</option>
                    </select>
                </div>
            </div>

            {/* Products Grid */}
            <div className="row">
                {sortedData.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <Link to={`/product/${product.id}`}>
                                <img
                                    src={product.thumbnail || product.image}
                                    className="card-img-top p-3"
                                    alt={product.title}
                                    style={{ height: '200px', objectFit: 'contain' }}
                                />
                            </Link>
                            <div className="card-body d-flex flex-column">
                                <span className="badge bg-info mb-2">{product.category}</span>
                                <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                                    <h6 className="card-title" style={{ height: '40px', overflow: 'hidden' }}>
                                        {product.title}
                                    </h6>
                                </Link>
                                <p className="text-success fw-bold fs-5">${product.price}</p>
                                <button
                                    className="btn btn-primary mt-auto"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    🛒 Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* No Results */}
            {sortedData.length === 0 && (
                <div className="alert alert-warning text-center">
                    No products found
                </div>
            )}
        </div>
    )
}

export default ProductsPage



































































// import { useEffect, useState } from "react"
// import useFetch from "../hooks/useFetch"
// import useDebounce from "../hooks/useDebounce"
// import useLocalStorage from "../hooks/useLocalStorage";
// import { Link } from "react-router-dom";

// const ProductsPage = () => {
//     const {data,error,loading} = useFetch('https://fakestoreapi.com/products');
//     const [searchBox,setSearchbox] = useState('')
//     const debounceValue = useDebounce(searchBox,500);
//     const [cartItem,setCartItem] = useLocalStorage('cart',[])
//     const [choseCategory,setCategory] = useState('all')
//     const [choseSorting,setSorting] = useState('DEFAULT');

//     if(loading) return <div>...loading</div>
//     if(error) return <div>Error : {error}</div>

//     const filteredData = data.filter((product) => product.title.toLowerCase().includes(debounceValue.toLowerCase()))

//     const categoryData = filteredData.filter((item)=> { return choseCategory === 'all' || item.category === choseCategory}); 
    
//     const sortingData = [...categoryData].sort((a,b) =>{
//         if(choseSorting === 'PHTL') return b.price-a.price
//         if(choseSorting === 'PLTH') return a.price-b.price
//         if(choseSorting === 'TLS') return a.title.localeCompare(b.title)
//         if(choseSorting === 'DEFAULT') return 0
//     })

//     const handleCart = (product) =>{

//       const existingProduct = cartItem.find((item)=>item.id===product.id)

//       if(existingProduct){        
//         const updateCart = cartItem.map((item)=>{
//           if(item.id === product.id){
//             return {...item,quantity : item.quantity + 1}
//           }else{
//             return item
//           }
//         })
//         setCartItem(updateCart)
//       }else{
//         const transferItem = [...cartItem,{...product, quantity : 1}]
//         setCartItem(transferItem)
//       }
//     }

  
//     return<>
//       <div className="container mt-4">
//         <div className="row mb-4">
//           <div className="col-md-4 mb-3">
//             <input 
//               type="text" 
//               className="form-control" 
//               placeholder="Search products..." 
//               onChange={(e)=>setSearchbox(e.target.value)} 
//               value={searchBox}
//             />
//           </div>
//           <div className="col-md-4 mb-3">
//             <select className="form-select" value={choseSorting} onChange={(e)=>setSorting(e.target.value)}>
//               <option value='DEFAULT'>DEFAULT</option>
//               <option value='TLS'>Title</option>   
//               <option value="PHTL">Price high to low</option>
//               <option value="PLTH">Price low to high</option>             
//             </select>
//           </div>
//           <div className="col-md-4 mb-3">
//             <select className="form-select" value={choseCategory} onChange={(e)=>setCategory(e.target.value)}>
//               <option value="all">All Categories</option>
//               <option value="men's clothing">Men's Clothing</option>
//               <option value='jewelery'>Jewelery</option>
//               <option value='electronics'>Electronics</option>
//               <option value="women's clothing">Women's Clothing</option>
//             </select>
//           </div>
//         </div>

//         <div className="row">
//           {
//             sortingData.map((item)=>(
//               <div key={item.id} className="col-md-4 mb-4">
//                 <div className="card h-100 shadow-sm">
//                   <div className="card-body">
//                     <span className="badge bg-info mb-2">{item.category}</span>
//                     <h6 className="card-title">
//                     <Link to={`/product/${item.id}`}> {item.title}</Link>                    
//                     </h6>
//                     <p className="card-text text-primary fw-bold">${item.price}</p>
//                     <button className="btn btn-primary w-100" onClick={()=>handleCart(item)}>
//                       ADD TO CART
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </>
// }

// export default ProductsPage 