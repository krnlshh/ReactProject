import type React from "react";
import { useState } from "react";
import useDebounce from "../customHook/useDebounce";
import { useFetch } from "../customHook/useFetch";
import type { Product } from "../type/product";

const Products: React.FC = () => {

  const { data: products, error, loading } = useFetch<Product[]>("https://fakestoreapi.com/products")
  const [searchInput, setSearchInput] = useState("");
  const search = useDebounce(searchInput, 200)
  const [selectCategory, setCategory] = useState<string>("")
  const [sortBy,setSortBy] = useState<string>()
  const [sortOrder,setOrder] = useState<string>()

  const category = products?.map((item) => item.category)
  const uniqueCategory = [...new Set(category)]
  const filteredData = products?.filter((products)=>{
    const searchFilter = products.title.toLowerCase().includes(search.toLowerCase());
    const categoryFilter = selectCategory === '' || products.category === selectCategory
    return searchFilter && categoryFilter 
  })  

  let SortByData = filteredData

  if(sortBy === "price")  {
    if(sortOrder === "asc"){
      SortByData = [...filteredData || []].sort((a,b)=>a.price-b.price)
    }else if(sortOrder === "desc"){
      SortByData = [...filteredData || []]?.sort((a,b)=>b.price-a.price)
    }else{
      SortByData = filteredData
    }
  }

  if(sortBy === "title"){
    if(sortOrder === "asc"){
      SortByData = [...filteredData || []]?.sort((a,b)=>a.title.localeCompare(b.title))
    }else if(sortOrder === "desc"){
      SortByData = [...filteredData || []]?.sort((a,b)=>b.title.localeCompare(a.title))
    }else{
      SortByData = filteredData
    }
  }

  if (!products) { 
    return <div className="flex justify-center items-center min-h-screen text-xl text-white bg-gray-900">Data Not Found</div> 
  }
  if (error) { 
    return <div className="flex justify-center items-center min-h-screen text-xl text-red-400 bg-gray-900">Error: {error}</div> 
  }
  if (loading) { 
    return <div className="flex justify-center items-center min-h-screen text-xl text-blue-400 bg-gray-900">Loading...</div> 
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Products Store</h1>
        
        {/* Filter Controls */}
        <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Search Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Search Products</label>
              <input 
                value={searchInput} 
                type="text" 
                placeholder="Search products..." 
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Category Select */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Category</label>
              <select 
                value={selectCategory} 
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Categories</option>
                {uniqueCategory.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            {/* Sort By */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Sort By</label>
              <select 
                value={sortBy} 
                onChange={(e)=>setSortBy(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Default</option>
                <option value="price">Price</option>
                <option value="title">Name</option>
              </select>
            </div>

            {/* Sort Order */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Sort Order</label>
              <select 
                value={sortOrder} 
                onChange={(e)=>setOrder(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Default</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-300">
            Showing <span className="font-semibold text-white">{SortByData?.length || 0}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SortByData?.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 p-6 hover:shadow-2xl">
              <div className="space-y-4">
                <h3 className="font-semibold text-white line-clamp-2 min-h-[3rem] text-lg">
                  {product.title}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="bg-blue-600 text-blue-100 text-xs font-medium px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <span className="text-2xl font-bold text-green-400">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {SortByData?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-300">No products found</p>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products