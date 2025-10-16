import { useReducer } from "react"

const UseReducerForm = () =>{

    const emptyData={
        name:"",
        age:"",
        city:"",
        email:"",
        address:""
    }

    const reducer = (data,action) => {

        return{...data,[action.type]:action.val}

    }

    const [state,dispatch] = useReducer(reducer,emptyData)

    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h5 className="mb-0">useReducer Form</h5>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input 
                                            type="text" 
                                            onChange={(e) => dispatch({val: e.target.value, type: "name"})} 
                                            className="form-control" 
                                            placeholder="Enter name" 
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <input 
                                            type="number" 
                                            onChange={(e) => dispatch({val: e.target.value, type: "age"})} 
                                            className="form-control" 
                                            placeholder="Enter age" 
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input 
                                            type="text" 
                                            onChange={(e) => dispatch({val: e.target.value, type: "city"})} 
                                            className="form-control" 
                                            placeholder="Enter city" 
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <input 
                                            type="email" 
                                            onChange={(e) => dispatch({val: e.target.value, type: "email"})} 
                                            className="form-control" 
                                            placeholder="Enter email" 
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <textarea 
                                        onChange={(e) => dispatch({val: e.target.value, type: "address"})} 
                                        className="form-control" 
                                        placeholder="Enter address" 
                                        rows="3"
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </form>
                        </div>
                    </div>

                    {/* Display Current State */}
                    <div className="card shadow mt-4">
                        <div className="card-header bg-success text-white">
                            <h6 className="mb-0">Current Form Values</h6>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th className="bg-light">Name:</th>
                                        <td>{state.name || <span className="text-muted">Not entered</span>}</td>
                                    </tr>
                                    <tr>
                                        <th className="bg-light">Age:</th>
                                        <td>{state.age || <span className="text-muted">Not entered</span>}</td>
                                    </tr>
                                    <tr>
                                        <th className="bg-light">City:</th>
                                        <td>{state.city || <span className="text-muted">Not entered</span>}</td>
                                    </tr>
                                    <tr>
                                        <th className="bg-light">Email:</th>
                                        <td>{state.email || <span className="text-muted">Not entered</span>}</td>
                                    </tr>
                                    <tr>
                                        <th className="bg-light">Address:</th>
                                        <td>{state.address || <span className="text-muted">Not entered</span>}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UseReducerForm 