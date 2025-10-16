import { useEffect, useState } from "react"
import { useParams } from "react-router"

const EditUser = () => {

     const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [age, setAge] = useState("");
        const [city, setCity] = useState("");


    const {id} = useParams();

    useEffect(()=>{
        getData(id);
    }, [id]);



    const getData = async (id) =>{
        const url = `http://localhost:3000/users/${id}` 
        let response = await fetch(url);
        response = await response.json();
        setName(response.name);
        setEmail(response.email);
        setCity(response.city);
        setAge(response.age);
        console.log(name,email,age,city)


    }
    const UpdateUser = async(id) => {
        const url = `http://localhost:3000/users/${id}`;  // ✅ Include id in URL
        
        let response = await fetch(url, {
            method: 'PUT',  // ✅ Changed from POST to PUT
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, age, city})
        });
        
        if(response.ok) {  // ✅ Check if successful
            alert("User updated successfully!");  // ✅ Correct message
            navigate(-1);  // ✅ Go back to table instead of clearing
        } else {
            alert("Failed to update user!");
        }
    }



    return(<div><h1>Edit</h1>
    <input value={name}  onChange={(e) => setName(e.target.value)}  placeholder="Edit user name" type="text"/>
    <input value={email}  onChange={(e) => setEmail(e.target.value)}  placeholder="Edit email" type="text"/>
    <input value={city}  onChange={(e) => setCity(e.target.value)}  placeholder="Edit age " type="text"/>
    <input value={age}  onChange={(e) => setAge(e.target.value)}  placeholder="Edit city" type="text"/>
    <button onClick={() => (UpdateUser(id))}>submit</button>
    </div>)
}

export default EditUser