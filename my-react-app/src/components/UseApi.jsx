import { use } from 'react';
const UseApi = ({fetchData}) =>{
    
    const user = use(fetchData);
    
    return(
    <div>
    <h1>List of users </h1>
     {
        user.map((item) => (<h5 key={item.id}>{item.name}</h5>))
     }   

    </div>)
}
export default UseApi