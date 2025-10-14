import { useState } from "react";


function ArrayOfOjectLoop(){

const users = [
  { id: 1, name: "Alex Chen", email: "alex.chen@tech.com", age: 22 },
  { id: 2, name: "Maria Garcia", email: "maria.garcia@design.com", age: 28 },
  { id: 3, name: "James Wilson", email: "james.wilson@business.com", age: 45 },
  { id: 4, name: "Sophie Lee", email: "sophie.lee@art.com", age: 19 },
  { id: 5, name: "Robert Kim", email: "robert.kim@engineering.com", age: 37 },
  { id: 6, name: "Emma Davis", email: "emma.davis@marketing.com", age: 26 },
  { id: 7, name: "Daniel Rodriguez", email: "daniel.rodriguez@finance.com", age: 41 },
  { id: 8, name: "Olivia White", email: "olivia.white@education.com", age: 23 },
  { id: 9, name: "Michael Brown", email: "michael.brown@healthcare.com", age: 34 },
  { id: 10, name: "Isabella Taylor", email: "isabella.taylor@consulting.com", age: 30 }
];
const [userList] = useState(users);

    return(<div>
        <table border={"solid"}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
                
                {userList.map(users =>(
                    <tr key={users.id}>                    
                    <td>{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.age}</td>
                    </tr>
                    ))}
                
            </tbody>
        </table>
    </div>)
}
export default ArrayOfOjectLoop