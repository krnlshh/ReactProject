import {useFormStatus} from 'react-dom' 

const CustomerForm = () => {
    const {pending} = useFormStatus();
    
    return(
        <div className="container mt-4">
            <input className="form-control mb-2" placeholder="Enter name" type="text"/>
            <input className="form-control mb-2" placeholder="Enter email" type="email"/>
            <input className="form-control mb-2" placeholder="Enter password" type="password"/>
            <button className="btn btn-primary" disabled={pending}>
                {pending ? 'Submitting...' : 'Submit'}
            </button>
        </div>
    )
}

export default CustomerForm