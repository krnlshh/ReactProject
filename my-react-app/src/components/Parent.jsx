import Child from "./Child";

function Parent(){

    function handleSubmit(name){
        alert(name);
    }



    return(
        <div>
           <Child handleSubmit={handleSubmit} name="krunal"/>           
        </div>
    )
}
export default Parent