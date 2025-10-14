import { useTransition } from "react";



const UseTransition = () =>{
    
    const[pending,setPending] = useTransition(false)
    
    const submitHandle=()=>{
        setPending ( async () =>{
            await new Promise (res => setTimeout(res,2000))       
        })
    }
    
    return(
        <div>
        <hr/>
        <br/> 

        {pending?
            <div class="spinner-border text-primary" role="status">
  <span class="sr-only">.</span>
</div>:null
        }       

        <h5>Hello loading</h5>
            <button className="btn btn-primary" disabled ={pending} onClick={submitHandle}>{pending?'submitting':'Submit'}  </button>
        </div>
    )
}

export default UseTransition