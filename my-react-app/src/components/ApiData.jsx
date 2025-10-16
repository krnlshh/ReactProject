import { useState, useEffect } from "react";

const ApiData = () => {

    const [data,setData] = useState([]);

    useEffect(() => {
        apiHandle();
    }, []);

    const apiHandle = async () =>  {
        const url = "https://jsonplaceholder.typicode.com/users";
        let response = await fetch(url);
        response = await response.json();
        setData(response); // Store the entire array
    }
    


    return (
        <div className="container mt-4">
           <h3 className="mb-3">User Information</h3>
           <table className="table table-striped table-bordered table-hover">
               <thead className="table-dark">
                   <tr>
                       <th>ID</th>
                       <th>Name</th>
                       <th>Username</th>
                       <th>Email</th>
                       <th>Phone</th>
                       <th>Website</th>
                       <th>Company Name</th>
                       <th>Catchphrase</th>
                       <th>BS</th>
                   </tr>
               </thead>
               <tbody>
                   {data.map((item) => (
                       <tr key={item.id}>
                           <td>{item.id}</td>
                           <td>{item.name}</td>
                           <td>{item.username}</td>
                           <td>{item.email}</td>
                           <td>{item.phone}</td>
                           <td>{item.website}</td>
                           <td>{item.company.name}</td>
                           <td>{item.company.catchPhrase}</td>
                           <td>{item.company.bs}</td>
                       </tr>
                   ))}
               </tbody>
           </table>
        </div>
    )
}
export default ApiData