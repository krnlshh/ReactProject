import useToggle from "../customHooks/useToggle";

const ToggleHook = () => {
    const [value, toggleUI] = useToggle(true);

    return(
        <div>
           {value?<h1>test</h1>:null}  
           <button onClick={toggleUI}>Toggle</button>           
           <button onClick={()=>toggleUI(true) }>show</button>
           <button onClick={()=>toggleUI(false)}>hide</button>
        </div>
    )
}
export default ToggleHook;