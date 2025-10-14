function Child({handleSubmit, name}){
    return(
        <div>
            <br/>
             <button onClick={() => handleSubmit(name)}>Handle Submit {name}</button>
        </div>
    )
}
export default Child