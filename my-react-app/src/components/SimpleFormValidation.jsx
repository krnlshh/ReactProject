import { useState } from "react";
const SimpleFormValidation = () => {

    const [name,setName] = useState("");
    const [password,setPassword] = useState("");   
    const [nameError,setNameError] = useState("");
    const [passError,setPassError] = useState("");

    const userNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        
        if(value.length > 5){
            setNameError("Name must be 5 characters or less");
        } else {
            setNameError("");
        }
    }
    const passwordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        
        const alphanumeric = /^[a-zA-Z0-9]+$/;
        
        if(!alphanumeric.test(value)){
            setPassError("Only letters and numbers allowed");
        }  else {
            setPassError("");
        }
    }

    return(<div><h5>Simple Form Validation </h5>
    <input 
        className={`form-control ${nameError ? 'is-invalid' : ''}`}
        name="name" 
        value={name}
        onChange={userNameChange} 
        type="text" 
        placeholder="Enter name"
    />
    <span className="text-danger">{nameError}</span>
    <br/>
    <input 
        className={`form-control ${passError ? 'is-invalid' : ''}`}
        name="password"
        value={password}
        onChange={passwordChange} 
        type="password" 
        placeholder="Enter Password"
    />
    <span className="text-danger">{passError}</span>
    <br/>
    <div><button disabled={nameError || passError} className="btn btn-primary">Submit</button></div>

    </div>)
}

export default SimpleFormValidation