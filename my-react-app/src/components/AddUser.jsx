const AddUser = ({setUserData}) =>{
    return(
        <div>
            <input onChange={(e)=>setUserData(e.target.value)} placeholder="Enter user name"/>
        </div>
    )
}
export default AddUser