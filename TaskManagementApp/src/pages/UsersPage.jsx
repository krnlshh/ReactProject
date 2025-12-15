import useFetch from '../hooks/useFetch';
import useDebounce from '../hooks/useDebounce';
import useLocalStorage from '../hooks/useLocalStorage';
/**
 * 🎯 PAGE: UsersPage - User Dashboard
 * 
 * This is your practice page for:
 * - useRef, Data Fetching, useReducer
 * - useMemo, useCallback
 * - Custom Hooks
 */

const UsersPage = () => {

  const {data,loading,error} = useFetch('https://jsonplaceholder.typicode.com/users')
  
  const [searchTerm,setSearchTerm] = useLocalStorage('search', '');
  const bouncingValue = useDebounce(searchTerm,500)
  
  if(loading) return <div>...loading</div>
  if(error) return <div>Error</div>  
  
  const finalData = data.filter((item) => item.name.toLowerCase().includes(bouncingValue.toLowerCase()))

  return <div>  
  <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} placeholder='Type here' type='text'/>
  
  { finalData.map((item) => <div key={item.id}>{item.name}</div>) }
  </div>

};

export default UsersPage;

