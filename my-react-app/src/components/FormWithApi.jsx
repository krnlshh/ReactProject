import { useState } from "react"

const FormWithApi = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    
    const saveUser = async(e) => {
        e.preventDefault();  // ✅ Lowercase 'e' and passed as parameter
        
        console.log(name, email, age, city);
        
        const url = "http://localhost:3000/users"; 
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  // ✅ Required header
            },
            body: JSON.stringify({name, email, age, city})
        });
        response = await response.json();

        console.log(response);

        if(response) {
            alert("User added successfully!");
            // Clear form
            setName("");
            setEmail("");
            setAge("");
            setCity("");
        }
    }

    return (
        <div className="container mt-4">
            <h3 className="mb-3">Add New User</h3>
            
            <form onSubmit={saveUser} className="card p-4">
                <div className="mb-3">
                    <input 
                        name="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        type="text" 
                        placeholder="Enter Your name" 
                        className="form-control"
                        required
                    />
                </div>
                
                <div className="mb-3">
                    <input 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" 
                        placeholder="Enter Your email" 
                        className="form-control"
                        required
                    />
                </div>
                
                <div className="mb-3">
                    <input 
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)} 
                        type="number" 
                        placeholder="Enter Your age" 
                        className="form-control"
                        required
                    />
                </div>
                
                <div className="mb-3">
                    <input 
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)} 
                        type="text" 
                        placeholder="Enter your city"
                        className="form-control"
                        required
                    />
                </div>
                
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        </div>
    )
}
export default FormWithApi