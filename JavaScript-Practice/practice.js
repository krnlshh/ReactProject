const { right } = require("@popperjs/core")
const { isArray } = require("util")

const Anagram = () => {
    let str0 = 'listen'
    let str1 = 'silent'
    let obj0 = {}
    let obj1 = {}
    if(str0.length !== str1.length){
        return false
    }
   for(let i=0; i<str0.length; i++){
    let num = str0[i]
    if(obj0[num]){
        obj0[num] = obj0[num] + 1 
    }else{
        obj0[num] = 1
    }
   }
   for(let j=0; j<str1.length; j++){
    let num = str1[j]
    if(obj1[num]){
        obj1[num] = obj1[num] +1  
    }else{
        obj1[num] = 1
    }
   }
   for(let key in obj0){
    if(obj0[key] !== obj1[key]){
        return false
    }
   }
   return true
}
Anagram();
// anagram 


// Move Zeros to End	

const moveZero = (array) =>{
    let i=0;
    for(let j=0; j<array.length; j++){
        if(array[j] !== 0){
            array[i] = array[j]
            i++
        }
    }

    for(let k=i; k<array.length; k++){
        array[k] = 0
    }
    
    return array
    

}
const array = [4, 5, 6, 0, 0, 8, 9, 0, 0, 5]
let removedZero =  moveZero(array)
console.log('removedZero' , removedZero)


// Two Sum (Two Pointer)	

const TwoSum = (array1,target) => {
    let left = 0;
    let right = array1.length - 1;

    while(left < right){       
        let sum = array1[left] + array1[right]         //10 > 8 , 2+5, 3+5
        if(sum === target ){        
            return [left,right]
        }
        if(sum > target){
            right--
        }
        if(sum < target){
            left++
        }
    }   
}


let array1 = [1, 2, 3, 5, 9]
let target = 8
const FindElement = TwoSum(array1,target)
console.log(FindElement)


// Flatten array 

    const Flatten = (fruit) =>{
        let result = []
        for(let i=0; i<fruit.length; i++){
            console.log(fruit[i])
            if(Array.isArray(fruit[i])){
                let nested = Flatten(fruit[i]) // nested = ['Banana', ['Orange']]  
                for(let j=0; j<nested.length; j++){
                    result[result.length] = nested[j] // ['Banana', 'Orange']
                }
            }else{
                result[result.length] = fruit[i] // Add single item: 'Apple' or 'Mango'
            }
        }   
        return result

    }
    Flatten(['Apple', ['Banana', ['Orange']], 'Mango'])

