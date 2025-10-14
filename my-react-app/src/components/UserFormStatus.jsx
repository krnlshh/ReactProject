import CustomerForm from "./CustomerForm"

const UserFormStatus = () => {    
     
    const formSubmit = async() =>{
        await new Promise (res => setTimeout(res,2000));
    }

    return(
        <div>
            <form action={formSubmit}>
                <CustomerForm/>
            </form>
        </div>
    )
}

export default UserFormStatus 