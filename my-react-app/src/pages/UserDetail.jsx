import { Link, useParams } from "react-router";

const UserDetail = () => {

    const userListParam = useParams();
    
    return (
        <div>
            <h1>User Detail</h1>
            <h5>user no : {userListParam.id}</h5>
            <Link to="/user/list">Back</Link>
        </div>
    );
}

export default UserDetail;
