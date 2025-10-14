import { useState } from "react"

function RadioWork(){
    
    const [gender,setGender] = useState("male");
    const [city,setCity] = useState("delhi");
    return(
    <div>
        <h5>Select Gender</h5>
        <input id="male" name="gender" checked = {gender == 'male'} onChange={(e) => setGender(e.target.value)} type="radio" value={"male"}/><label htmlFor="male">Male</label>
        <input id="female" name="gender" checked = {gender == 'female'} onChange={(e) => setGender(e.target.value)} type="radio" value={"female"}/><label htmlFor="female">Female</label>
        <h5>Here the Gender is {gender}</h5>
    <hr/>
     <h5> Select Your City</h5>
     <select onChange={(e) => setCity(e.target.value)} defaultValue={"Delhi"}>
        <option>Noida</option>
        <option>Ahmedabad</option>
        <option>Delhi</option>
        <option>Bhopal</option>
     </select>
     <h6>Selected city : {city}</h6>
    </div>

    

    

)
}
export default RadioWork