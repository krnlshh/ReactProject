import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockSignUpApi } from "../mockApi/auth";
const SignUp = () => {
    const navigate = useNavigate();
    const [form,setForm] = useState({
         name:"",
         email:"",
         password:"",
         confirmPassword:""
        })
    const [message,setMessage] = useState("")
    const handleForm = async(e:React.FormEvent) =>{
        e.preventDefault();
        if(!form.name || !form.email || !form.password){
            setMessage("All fields are required")
        }else if(form.password !== form.confirmPassword){   
            setMessage("passwrod do not match")
        }else{
            setMessage("Submitting...");
            const response = await mockSignUpApi(form)
            setMessage(response.message)
            if(response.success){
            setForm({
                name:"",
                email:"",
                password:"",
                confirmPassword:""
            })
            navigate("/login");
            }
        }

    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form,[e.target.name]:e.target.value})
    };
    
    return<>
    <h1>Signup Page</h1> 
    {message && <p>{message}</p>}
    <form onSubmit={handleForm}>
    <input value={form.name} placeholder="name" type="text" name="name" onChange={handleChange}/><br/><br/>
    <input value={form.email} placeholder="email" type="email" name="email" onChange={handleChange}/><br/><br/>
    <input value={form.password} placeholder="Password" type="text" name="password" onChange={handleChange}/><br/><br/>
    <input value={form.confirmPassword} placeholder="Confirm Password" type="text" name="confirmPassword" onChange={handleChange}/><br/><br/>
    <button>Sign Up</button>
    </form>
    </>
}
export default SignUp