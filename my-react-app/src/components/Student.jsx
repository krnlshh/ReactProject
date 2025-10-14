import Subject from "./Subject";

const Student = () => {
    return(
        <div style={{backgroundColor: 'green', padding: '20px', margin: '10px', color: 'white'}}>
            <h4>Student Component</h4>
            <p>Background: Green</p>
            <Subject/>
        </div>
    )
}

export default Student;