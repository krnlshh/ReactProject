import { Link } from "react-router";

const UserList = () => {

    const data = [
        { id: 1, name: "John Smith", email: "john.smith@email.com", age: 28, city: "New York", salary: 75000 },
        { id: 2, name: "Emma Johnson", email: "emma.j@email.com", age: 34, city: "Los Angeles", salary: 82000 },
        { id: 3, name: "Michael Brown", email: "m.brown@email.com", age: 41, city: "Chicago", salary: 95000 },
        { id: 4, name: "Sarah Davis", email: "sarah.d@email.com", age: 25, city: "Houston", salary: 68000 },
        { id: 5, name: "James Wilson", email: "james.w@email.com", age: 37, city: "Phoenix", salary: 88000 },
        { id: 6, name: "Lisa Anderson", email: "lisa.a@email.com", age: 29, city: "Philadelphia", salary: 71000 },
        { id: 7, name: "David Martinez", email: "david.m@email.com", age: 45, city: "San Antonio", salary: 105000 },
        { id: 8, name: "Maria Garcia", email: "maria.g@email.com", age: 31, city: "San Diego", salary: 79000 },
        { id: 9, name: "Robert Taylor", email: "robert.t@email.com", age: 38, city: "Dallas", salary: 91000 },
        { id: 10, name: "Jennifer Lee", email: "jennifer.l@email.com", age: 27, city: "San Jose", salary: 85000 }
    ];


    return (
        <div>
            <h1>User List</h1>
            {
                data.map((item,index)=>(<div key={index}>
                <Link to={"/user/" + item.id}>{item.name}</Link> 
                </div>))
            }
            <h1>User List two</h1>
            {
                data.map((item,index)=>(<div key={index}>
                <Link to={"/user/" + item.id + "/" + item.name}>{item.name}</Link> 
                </div>))
            }

        </div>
        
    );
}

export default UserList;    