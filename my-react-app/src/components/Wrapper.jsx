function Wrapper({children, color="red"}){
    return(
        <div style={{border: `solid 5px ${color}`, margin: "5px"}}>
            {children}
        </div>
    )
}
export default Wrapper