
const array = [5,12,8,130,44]
const filterArray = (array) => {
   const newArray = array.filter((item) => item >= 10 )
   console.log(newArray)
}
filterArray(array)
// Filter array above 10 numbers all element 

const str = 'String'
const reverseString = (str) => {
  const reverse = str.split('').reverse().join('')
   console.log(reverse)
}
reverseString(str)

const str1 = 'String'
const reverseString1 = (str1) => {
   let result = ''
   for(i=0; i<str1.length;i++){
    result = str1[i] + result  
   }    
   return result
}
reverseString1(str1)
// Reverse String
let toDoArray = []
let todoId = 1;
const addtoDo = (text) => {   
   const toDoObj = {id:todoId,text:text,completed:false}
   toDoArray.push(toDoObj)
   todoId++   
}

addtoDo('Learn JavaScript')
addtoDo('Build project')
console.log(toDoArray)

const toggleTodo = (id) => {
   const togg = toDoArray.find((item) => item.id === id)   
    if(togg){
      togg.completed = !togg.completed
    }
}
toggleTodo(1)
console.log(toDoArray) 