import { useState } from "react"

const UpdateObjectState = () => {
    const [objectData,setObjectData] = useState({
        Name : "Krunal",
        Address : {
            city: "ahmedabad",
            country : "india"
        }
    })
    const changeName = (val) => {
        setObjectData({...objectData, Name: val})
    }
    const changeCity = (val) => {
        setObjectData({...objectData,Address:{...objectData.Address,city:val}})
    }
    const changeCountry = (val) =>{
        setObjectData({...objectData,Address:{...objectData.Address,country:val}})
    }

    return(
    <div>        
        <hr/>
        <input onChange={(e) => changeName(e.target.value)} placeholder="Change Value of name"/>
        <p>Name: {objectData.Name}</p>
        <hr/>
        <input onChange={(e) => changeCity(e.target.value)} placeholder="Change CITY "/>
        <p>City: {objectData.Address.city}</p>
        <input onChange={(e) => changeCountry(e.target.value)} placeholder="Change Country "/>
        <p>Country: {objectData.Address.country}</p>
    </div>
    )
}
export default UpdateObjectState