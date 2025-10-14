import { useState } from "react"

const UpdateArrayState = () =>{

    const [aData,setaData] = useState(['krunal','peter','john'])
    const [oData,setoData] = useState([
        {id: 1, name:"mohan", age:31},
        {id: 2, name:"krunal", age:25},
        {id: 3, name:"john", age:30},
        {id: 4, name:"peter", age:28},
        {id: 5, name:"sarah", age:27}
    ])

    const handleUserName = (name) =>{
       aData[aData.length-1] = name;
        console.log(aData);
        setaData([...aData]);
        
    }

    const handleObjectArrayButton = (age) =>{
       oData[oData.length-1].age = age;
       setoData([...oData]);
        
    }
    
    return(
        <div>
        <hr/>
        <br/>
        <input onChange={(e) => handleUserName(e.target.value)} type="text" placeholder="update Last name"/>
        <h4>Array data</h4>
        {
            aData.map((item,index)=>(<div key={index}>{item}</div>) )
        }
        <hr/>
        <br/>

        <input onChange={(e) => handleObjectArrayButton(e.target.value)} type="text" placeholder="update Last name"/>
        <h4>Array of Object data</h4>
        <table className="table table-striped table-bordered table-hover">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {oData.map((row,index)=>(
                    <tr key={index}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        
       
        </div>
    )


}
export default UpdateArrayState