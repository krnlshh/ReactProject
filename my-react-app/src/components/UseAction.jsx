import { useActionState } from "react";
const UseAction = () => {

    const handleSubmit = async (previouseData,formData) => {
       let name = formData.get('name');
       let password = formData.get('password');

       await new Promise (res => setTimeout(res,2000))

       if(name && password){
        return {
            success: true,
            message: "Form Submitted successfully",
            name: name,
            password: password
        }
         
       }else{
        return {
            success: false,
            error: "Enter Data"
        }
       }

       
    } 

    const [data,action,pending] = useActionState(handleSubmit,undefined);
    

    return(
        <div>
            <form action={action}>
                <input type="text" name="name" placeholder="Enter Name"/>
                <input type="password" name="password" placeholder="Enter password"/>
                <button className="btn btn-primary" disabled={pending}>Submit</button>


            </form>

            {data && (
                <div>
                    {data.success ? (
                        <div style={{color: 'green'}}>
                            <p>{data.message}</p>
                            <p>Name: {data.name}</p>
                             <p>password: {data.password}</p>
                             
                        </div>
                    ) : (
                        <div style={{color: 'red'}}>
                            <p>{data.error}</p>
                        </div>
                    )}
                </div>
            )}


        </div>

        


    )

}
export default UseAction