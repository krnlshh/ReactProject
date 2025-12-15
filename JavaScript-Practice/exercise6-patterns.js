// Exercise 1/9: Reverse String
const reverseSting = () => {
    const name = 'johnny'
    let result = '';
    for(let i=0; i<name.length; i++){
        result = name[i] + result
    }
    return result
}
reverseSting()


// Exercise 2/9: Palindrome Check
const PalindromeC = () => {
    const name = 'johnhojx'
    let reverseName  = ''

    for(let i = 0; i<name.length; i++){
        reverseName = name[i] + reverseName
    }
    if(name === reverseName) return `Palindrome`
    else{ return `Not Palindrome`}
}
PalindromeC()


// Exercise 3/9: Find Duplicates
const findDuplicate = () => {
    const array = [1,55,52,55,220,21,32,220]
    const obj = {}
    const duplicateArray = []

    for(let i=0; i<array.length;i++){
       let num =  array[i]
       if(obj[num]){
        obj[num] = obj[num] + 1
       }else{
        obj[num] = 1
       }
    }
    for(let key in obj){
        if(obj[key] > 1){
            duplicateArray.push(Number(key))
        }
    }
    console.log(duplicateArray)
}
findDuplicate()

// Exercise 4/9: Count Character Occurrences
const CoountString = () => { 
    const name = 'Hello'
    const obj = {}
    for(let i=0; i<name.length; i++){
       let test = name[i]
       if(obj[test]){
        obj[test] = obj[test] + 1
       }else{
        obj[test] = 1
       }        
    }
    return obj
}
CoountString();
// Output: { h: 1, e: 1, l: 2, o: 1 }
// Exercise 5/9: FizzBuzz
const fizz = () => {
    for(let i=1; i<=100; i++){
        if(i%3===0 && i%5===0){
            console.log('fizzBuzz')
        }else if(i%3 === 0){
            console.log('fizz')
        }else if(i%5 === 0){
            console.log('buzz')
        }else{
            console.log(i)
        }
    }
}
fizz();

// Exercise 6/9: Find Min/Max
const FindMinMAX = () => {
    const array = [1,2,66,52,20,88,25,23]
    let min = array[0]
    let max = array[0]
    
    for(let i=0; i<array.length; i++){
       if(array[i] > max) {
          max = array[i] 
       }
       if(array[i] < min){
        min = array[i]
       }
    }
    return {min , max}
}
FindMinMAX();

// second highest number 
const array = [4,5,2,22,3,63,65,22]
const secondHeigh = (array) => {
    const unique = [...new Set(array)]
    const num = unique.sort((a,b)=> b-a)
    return num[1]
}
secondHeigh(array)

// Exercise 7/9: Flatten Array
const flaternsArray = () => {
    const array = [1, [2, 3], [4, [5, 6]]]
    const flate = array.flat()
    console.log(flate)
}
flaternsArray()

// Exercise 8/9: Anagram Check
const  Anagram = (str1,str2) => {   
    const objstr1 = {}
    const objstr2 = {}
    if(str1.length !== str2.length){return false}
    for(let i = 0; i<str1.length; i++){
        let text = str1[i]
        if(objstr1[text]){
            objstr1[text] = objstr1[text] + 1
        }else{
            objstr1[text] = 1
        }
    }
   
    for(let i = 0;i<str2.length;i++){
        let text = str2[i]
        if(objstr2[text]){
            objstr2[text] = objstr2[text] + 1
        }else{
            objstr2[text] = 1
        }
    }

    for(let key in objstr1){
        if(objstr1[key] !== objstr2[key]){
            return false
        }
    }
    return true
    

}
Anagram('listen','silent')


// Exercise 9/9: Two Sum
const twoSum = (array,target) => {    
    for(let i=0;i<array.length; i++){
        for(let j=0;j<array.length;j++){
            if(i !== j){
                if(array[i] + array[j] === target) return [i,j]
            }
        }
    }
}
twoSum([1,25,22,32],47)



const removeDuplicates = (array) => {
    const Barray = []
    const bobj = {}

    for(let i=0;i<array.length;i++){
        let num = array[i]
        if(!bobj[num]){
            Barray.push(num)
            bobj[num] = true
        }
    }
    return Barray
}
removeDuplicates([1,2,3,5,33,6,2,1,5])
// removeDuplicates 10

const Factorial = (n) => {
    if(n === 0 || n === 1){
        return 1
    }
    let result = 1;
    for(let i=2; i<=n; i++){
        result = result * i
    }
    return result
}
Factorial(5)
// Factorial

const RemoveSecond = () => {
    const array = [5,3,9,6,4]
    const blank = []
    for(let i=0; i<array.length; i++){
        if(i !== 2){
            blank.push(array[i])
        }
    }
    return blank
}
RemoveSecond()
// RemoveSecond

const ReverseArray = () => {
    const array = [5,4,6,3,8,9]
    const blankArray = []
    for(let i = array.length-1; i>=0; i--){
       blankArray.push(array[i])
    }
    return blankArray

}
ReverseArray();
// ReverseArray

const transformEach = () =>{
    const array = [5,4,6,3,8,9]
    const doubleArray = []

    for(let i = 0; i<array.length; i++){
        let num =array[i]
        doubleArray.push(num * 2) 
    }
    return doubleArray

}
transformEach()
// TransformEachElement
const flate = (arr) => {
   let result = []
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            let nested = flate(arr[i])
            for(let j=0; j<nested.length; j++){
                result[result.length] = nested[j]
            }
        }else{
            result[result.length] = arr[i]
        }
    }
    return result
}
const arrs =  [1,2,3,[5,[5,56,8,[8,8]]]]
flate(arrs);

