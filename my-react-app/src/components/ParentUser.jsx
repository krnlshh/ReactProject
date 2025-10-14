import { useState } from "react"
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

const ParentUser = () =>{
  
    const [userData,setUserData] = useState();

    return(
        <div>
            <AddUser setUserData={setUserData}/>
            <DisplayUser userData={userData}/>
        </div>
    )


}
export default ParentUser