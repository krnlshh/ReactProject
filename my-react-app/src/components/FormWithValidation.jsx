import { useActionState } from "react";

const FormWithValidation = () => {

    const handleForm = (prevState, formData) => {    
        const name = formData.get('name');
        const password = formData.get('password');
        const alphanumeric = /^[a-zA-Z0-9]+$/;
        
        // Validate name
        if(!name || name.length < 5) {
            return { 
                nameError: "Name must be at least 5 characters", 
                name, 
                password 
            };
        }
        
        // Validate password
        if(!password || !alphanumeric.test(password)) {
            return { 
                passwordError: "Password must contain only letters and numbers", 
                name, 
                password 
            };
        }
        
        if(password.length < 6) {
            return { 
                passwordError: "Password must be at least 6 characters", 
                name, 
                password 
            };
        }
        
        // Success
        return { 
            success: true, 
            message: "Form submitted successfully!", 
            name, 
            password 
        };
    }

    const [data, action, pending] = useActionState(handleForm, null);
    
    console.log("Form data:", data);
    
    return (
        <div className="container mt-4">
            <h5>Validation with Form</h5>
            
            <form action={action}>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className={`form-control ${data?.nameError ? 'is-invalid' : ''}`}
                        defaultValue={data?.name || ''} 
                        placeholder="Enter Name" 
                        name="name"
                        disabled={pending}
                    />
                    {data?.nameError && (
                        <span className="text-danger small">{data.nameError}</span>
                    )}
                </div>
                
                <div className="mb-3">
                    <input 
                        type="password" 
                        className={`form-control ${data?.passwordError ? 'is-invalid' : ''}`}
                        defaultValue={data?.password || ''} 
                        placeholder="Enter Password" 
                        name="password"
                        disabled={pending}
                    />
                    {data?.passwordError && (
                        <span className="text-danger small">{data.passwordError}</span>
                    )}
                </div>
                
                <button 
                    type="submit"
                    className="btn btn-primary" 
                    disabled={pending}
                >
                    {pending ? 'Submitting...' : 'Login'}
                </button>
                
                {data?.success && (
                    <div className="alert alert-success mt-3">
                        {data.message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default FormWithValidation;