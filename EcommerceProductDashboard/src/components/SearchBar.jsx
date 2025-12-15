function SearchBar({ value, onChange }) {
  // TODO: Your actual coding starts here!
  
  return (
    <input 
      type="text" 
      className="form-control" 
      placeholder="Search products..."
      value={value}
      onChange={onChange}
    />
  )
}

export default SearchBar
