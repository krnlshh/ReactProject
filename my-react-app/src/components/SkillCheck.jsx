import { useState } from "react"
function SkillCheck(){

    const [skills,setSkill] =useState([]);
    
    const handleSkills = (event) =>{
       if(event.target.checked){
            setSkill([...skills,event.target.value])              
       }else {
            // Remove skill from array
            setSkill(skills.filter(skill => skill !== event.target.value));
        }    
    };

    return(
    <div>        
        <br/>
        <input id="php" type="checkbox" onChange={handleSkills} value="PHP"/>
        <label htmlFor="php">PHP</label>
        <br></br>
        <input id="java" type="checkbox" onChange={handleSkills} value="java"/>
        <label htmlFor="java">java</label>
        <br></br>
        <input id="js" type="checkbox" onChange={handleSkills} value="js"/>
        <label htmlFor="js">js</label>
        <br></br>
        <input id="react" type="checkbox" onChange={handleSkills} value="react"/>
        <label htmlFor="react">react</label>
                  <h3>Selected Skills:</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
    </div>
    )
}
export default SkillCheck