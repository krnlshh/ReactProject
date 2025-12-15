import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";

const ProductDetailPage = () => {

  const {id} = useParams();

  const {data,error,loading} = useFetch(`https://fakestoreapi.com/products/${id}`);
  const [cartItem,setCartItem] = useLocalStorage('cart',[]);

  const handleCart = (product) =>{

      const existingProduct = cartItem.find((item)=>item.id===product.id)

      if(existingProduct){        
        const updateCart = cartItem.map((item)=>{
          if(item.id === product.id){
            return {...item,quantity : item.quantity + 1}
          }else{
            return item
          }
        })
        setCartItem(updateCart)
      }else{
        const transferItem = [...cartItem,{...product, quantity : 1}]
        setCartItem(transferItem)
      }
    }


    
  if(loading) return <div>...Loading</div>
  
  if(error) return <div>Error : {error}</div>
  if(!data) return <div>Not found </div>

  
    
  return<>
    <div className="container mt-4 mb-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm border-0 p-4 bg-light">
            <img 
              src={data.image} 
              alt={data.title}
              className="img-fluid"
              style={{ maxHeight: '500px', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <div className="card shadow-sm border-0 p-4 h-100">
            <span className="badge bg-info text-dark mb-3 align-self-start">
              {data.category}
            </span>
            
            <h2 className="mb-3">{data.title}</h2>
            
            {data.rating && (
              <div className="mb-3">
                <span className="text-warning">⭐ {data.rating.rate}</span>
                <span className="text-muted ms-2">({data.rating.count} reviews)</span>
              </div>
            )}

            <h3 className="text-primary mb-4">${data.price}</h3>

            <div className="mb-4">
              <h5 className="fw-bold mb-2">Description:</h5>
              <p className="text-muted">{data.description}</p>
            </div>

            <div className="mt-auto">
              <button 
                className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center gap-2"
                onClick={()=>handleCart(data)}
              >
                <span>🛒</span> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

}
export default ProductDetailPage