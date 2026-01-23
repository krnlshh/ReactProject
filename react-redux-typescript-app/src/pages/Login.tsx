import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockLoginApi } from "../mockApi/auth";

const Login:React.FC = () => {
      const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const [message, setMessage] = useState("")

    const handleForm = async (e: React.FormEvent) => {

        e.preventDefault();
        if (!loginData.email || !loginData.password) {
            setMessage("Insert Data")
        } else {
            const response = await mockLoginApi(loginData);
            setMessage(response.message)
            if (response.success) {
                setLoginData({
                    email: "",
                    password: ""
                })      
                navigate('/products');       
            }
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }


    return <>
        <h1>Login Page</h1>
        {message && <p>{message}</p>}
        <form onSubmit={handleForm}>
            <input value={loginData.email} name="email" type="text" placeholder="Enter email" onChange={handleChange} />
            <input value={loginData.password} name="password" type="text" placeholder="Enter password" onChange={handleChange} />
            <button>Login</button>
        </form>
    </>
}
export default Login