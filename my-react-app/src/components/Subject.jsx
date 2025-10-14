import { useContext } from "react";
import { SubjectData } from "./ContextData";

const Subject = () => {
    const subject = useContext(SubjectData);
    return(
        <div style={{backgroundColor: 'skyBlue', padding: '20px', margin: '10px', color: 'black'}}>            
            <h5>Subject Component</h5>
            <p>The main subject is: <strong>{subject}</strong></p>
        </div>
    )
}

export default Subject;

