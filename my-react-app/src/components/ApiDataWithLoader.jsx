import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const ApiDataWithLoader = () => {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)  // Start with true (loading initially)
    const navigate = useNavigate();  // ✅ Hook for navigation


    useEffect(() => {
        apiWithLoading();
    }, []);
    
const url = "http://localhost:3000/users"
    const apiWithLoading = async() => {
        
        let response = await fetch(url);
        response = await response.json();
        setData(response);
        setLoading(false);  // Set to false after data is loaded
       
    }
    const deleteUser = async(id) => {
        let response = await fetch(url + "/" + id,{
            method : 'DELETE'
        })
        response = await response.json();
        console.log(response);
        if(response){
            alert("DELETED")
        }
       apiWithLoading();        
    }
    
    const editUser = (id) => {
        // ✅ Correct way to navigate programmatically
        navigate(`/editUser/${id}`);
    } 

    return(
        <div className="container mt-4">
            <h3 className="mb-3">API Data With Loader</h3>
            {loading ? (
                <div className="text-center my-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3">Loading data...</p>
                </div>
            ) : (
                <table className="table table-striped table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>City</th>     
                            <th>Action</th>                      
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td>{item.city}</td>
                                <td><button onClick={() =>editUser(item.id)} className="btn btn-info">Edit</button>
                                | <button onClick={() => deleteUser(item.id)} className="btn btn-danger">Delete</button></td>
                                                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default ApiDataWithLoader