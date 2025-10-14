function Example(){
    function sum(a,b,op){
        if(op === "+"){return a+b}
        else if(op === "-"){return a-b}
        else if(op === "*"){return a*b}
        else if(op === "/"){return a/b}
        else return null
    }
    return(
        sum(95,5,'/')


    )
}
export default Example