import Student from "./Student";

const ClassComponent = () => {
    return(
        <div style={{backgroundColor: 'yellow', padding: '20px', margin: '10px'}}>
            <h3>Class Component</h3>
            <p>Background: Yellow</p>
            <Student/>
        </div>
    )
}

export default ClassComponent;

