import Project from "./Project";

function Employee(){
   const employeeData = [
    {
        id: 1,
        name: "John Smith",
        department: "Engineering",
        projects: [
            { id: 101, name: "Project Alpha", status: "Active", priority: "High" },
            { id: 102, name: "Project Beta", status: "Completed", priority: "Medium" },
            { id: 103, name: "Project Gamma", status: "Planning", priority: "Low" }
        ]
    },
    {
        id: 2,
        name: "Sarah Johnson",
        department: "Marketing",
        projects: [
            { id: 201, name: "Campaign A", status: "Active", priority: "High" },
            { id: 202, name: "Campaign B", status: "Completed", priority: "Medium" }
        ]
    }
];

return(
    <div>
        
         {employeeData.map(item => { 
          return( 
                <div key={item.id}>
                    {item.id}
                    {item.name}
                    {item.department} 
                    {
                        item.projects.map(student => {
                            return(
                                <div key ={student.id}>
                              <Project student={student}/>
                              </div>

                            )
                        })
                    }
                </div>
            )          
         })}
        
    </div>
)

}
export default Employee