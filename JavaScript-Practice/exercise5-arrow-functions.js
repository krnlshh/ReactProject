const { act } = require("react");

// 1️⃣ Find Largest Number in Array
const largest = () => {
    const numbers = [23, 45, 12, 67, 34, 89, 21];
    let largest = numbers[0];
    for(let i=1; i<numbers.length; i++){
      let item = numbers[i]
      if(item > largest){
        largest =  item
      }     
    }
    console.log(largest)
    return largest
}
largest();

// 2️⃣ Find Smallest Number in Array
const Smallest = () =>{
  const numbers = [23, 45, 12, 67, 34, 89, 21];
  let minimum = numbers[0]
  for(let i=1; i<numbers.length; i++){
    let item = numbers[i]
    if(item < minimum){
      minimum = item
    }
  }
  console.log(minimum)
  return minimum
}
Smallest()

// 3️⃣ Sum of All Numbers
const Sum = () => {
  const numbers = [23, 45, 12, 67, 34, 89, 21];
  let result = numbers[0]
  for(let i=1; i<numbers.length; i++){
    const item = numbers[i]
    result = item + result
  }
  console.log(result)
  return result
}
Sum()

  // 4️⃣ Count Even and Odd Numbers
  const EvenOdd = () => {
    const numbers = [23, 45, 12, 67, 34, 89, 21];
    let oddCount = 0
    let evenCount = 0
       
    for(let i=0; i<numbers.length; i++){
      let item = numbers[i]
      if(item % 2 === 0){
        evenCount++         
      }else{
        oddCount++       
      }
    }
    console.log('oddCount : ' + oddCount)
    console.log('evenCount : ' + evenCount)
  }
  EvenOdd()


// 5️⃣ Reverse an Array
const ReverseArray = () =>{
  const numbers = [23, 45, 12, 67, 34, 89, 21];
  let reverse = []
  for(let i=numbers.length - 1; i>=0; i--){
    let item = numbers[i];
    reverse.push(item)
  }
  console.log(reverse)
 
}
ReverseArray()

// 6️⃣ Check if Number 30  Exists in Array
const ExistNumber = () => {
  const numbers = [10, 20, 80, 40, 50];
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    let item = numbers[i];
    if (item === 30) {     
      count++      
    } 
  }
  if(count > 0){
    console.log('30 found')
    return true
  }else{
    console.log('30 not found')
    return false
  }
};
ExistNumber();


// 7️⃣ Count Occurrences of a Number
const CountOccurrences = () => {
  const numbers = [1, 2, 3, 2, 4, 2, 5, 2]
  let count = 0
  for(let i=0; i<numbers.length; i++){
    let item = numbers[i]
    if(item === 2){
    count++
    }
  }
  console.log(count)
  return true
}
CountOccurrences()

// 8️⃣ Remove Duplicates from Array
const RemoveDuplicates = () =>{
  const numbers = [1, 2, 3, 2, 4, 2, 5, 2]
  const obj = {}
  const uniqueonly = []
  for(let i=0; i<numbers.length; i++){
    let item = numbers[i]
    if(obj[item]){
      obj[item] = obj[item] + 1
    }else{
      obj[item] = 1
    }
  }
  console.log(obj)
  for(let key in obj){
    if(obj[key] >= 1){
      uniqueonly.push(Number(key))
    }
  }
  
  console.log(uniqueonly)
  return uniqueonly
}
RemoveDuplicates()



// 9️⃣ Find Second Largest Number
const secondLargestNumber = () => {
  const numbers = [1,2,3,4,5,6,7,8,9]
  let largestNum = numbers[0]
  let secondLarge = numbers[0] 
  for(let i=1; i<numbers.length; i++){
    let item = numbers[i]
    if(item > largestNum){
      largestNum = item
    }
  }
  for(let i=0; i<numbers.length; i++){
    let item = numbers[i]
    if(item>secondLarge && item<largestNum){  
      secondLarge = item
    }
  }
  console.log(secondLarge)
  
}
secondLargestNumber();


// 🔟 Reverse a String
const ReverseString = () => {
  let str = 'REACT'
  let result =''
  for(let i=0; i<str.length; i++){
    result = str[i] + result
  }
  console.log(result)
}
ReverseString()

// 1️⃣1️⃣ Check Palindrome
const Palindrome = () =>{
  let str = 'JOHNHOJ'
  let result =''
  for(let i=0; i<str.length; i++){
    result = str[i] + result
  }
  if(str === result){
    console.log('match')
  }else{
    console.log('not match')
  }
}
Palindrome()

// 1️⃣2️⃣ Find All Even Numbers
const EvenNumber = () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let even = []
  for(let i=0; i<numbers.length; i++){
    let item = numbers[i]
    if(item % 2 === 0){
      even.push(item)
    }
  }
  console.log(even)
}
EvenNumber()

// 1️⃣3️⃣ Merge Two Arrays

const Merge = () => {
  const num1 = [1,2,3,4,5]
  const num2 = [6,7,8,9,10]
  const num3 = []
 
  for(let i=0; i<num1.length; i++){
    let item1 = num1[i]
    num3.push(item1)   
  }
   
  for(let i=0; i<num2.length; i++){
    let item1 = num2[i]
    num3.push(item1)   
  }

  console.log(num3)
 
}
Merge()

// 1️⃣4️⃣ Factorial of a Number

const Factorial = (n) =>{
  let result = n
  for(let i=1; i<n; i++){
   result = i * result
  }
  console.log(result)
}
Factorial(5)

// 1️⃣5️⃣ Print Fibonacci Series

const Fibonacci = (n) => {
  let a = 0;  
  let b = 1; 
  let result;
  console.log(a)
  console.log(b)
   
  for(let i=2; i<n; i++){   
    result = a + b
    console.log(result)
    a = b   
    b = result
  }
}
Fibonacci(10)



// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
// 5 + 8 = 13
// 8 + 13 = 21
// 13 + 21 = 34

//  level 3

const removeDuplicate = (arr) => {
  let i = 0;
  for(let j=1;j<arr.length;j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }  
  return i + 1
}
const arr = ['Math', 'Math', 'Physics', 'Physics', 'Chemistry', 'Biology', 'Biology'];
const result = removeDuplicate(arr)
console.log('unique book count:', result)
console.log('unique books:', arr)
//initial i = 0

const twoSum = (arr,target) => {
  let left = 0
  let right = arr.length -1

  while(left < right){
    leftElement = arr[left]
    rightElement= arr[right] 
    let sum = leftElement + rightElement

    if(sum === target){
      return [left,right] //(1+9 = 10) so here 10 !== 8 first condition false now we need to try reduce sum so we have added sum> target anad put --right ] 
    }else if(sum > target){
      right-- 
      
      //(1+5 = 6) so here 6 !== 8 now we need to move in to next condition right ?
      
    }else if(sum < target){ //above conditon not satisfied we move in this condition. why? because sum less then target 
      left++       
      // (2+5 = 7) so here  7 !== 8 
      // (3+5 = 8) so here 8 === 8 condition true 
      // condition true left and right index print in result [2,3]
    }  
  }
}
twoSum([1,2,3,5,9],8);


//  Move unique values at end 

const zeroMove = (array) => {
  let i = 0
  for(let j=0;j<array.length;j++){
    if(array[j] !== 0){
      array[i] = array[j]
      i++
    }
  }
  for(let x=i;x<array.length;x++){
    array[x] = 0
  }
}

const array = [4,5,6,0,0,8,9,0,0,5]
const readyArray = zeroMove(array)
console.log('readyArray' , readyArray)
console.log('readyArray' , array)



const isPalindrome = (str) => {
  let result = ''
  let cleaned = ''

  for (let i=0; i<str.length; i++){
      if(/[a-zA-Z0-9]/.test(str[i])){
        cleaned = cleaned + str[i].toLowerCase()
      }
  }   

  for(let i=0; i<cleaned.length; i++){
      result = cleaned[i] + result
  }
  if(result === cleaned){return true}else{return false}      
}
str = 'JOHN--HOJ'
const r = isPalindrome(str)
console.log(r)


const findCombination = (arrwx,s) => {
  let outPut = 0;
  let FinalOutput = 0;

  for(let i=0; i<s; i++){  //[55,56] -- [55+56] = 111 // will store in output thats it for this loop 
    outPut = outPut + arrwx[i] // 111 
  }

  FinalOutput = outPut   // FinalOutput 111 

  for(let i=s; i<arrwx.length; i++){ //[56,33,]
    outPut = outPut - arrwx[i-s] + arrwx[i] // 111 - 55 + 33 = 89
    if(outPut > FinalOutput ){ // 1st combination output = 89 , FinalOutput = 111 -> condition not full fill itration two start 
      FinalOutput = outPut  
    }
  }
  return FinalOutput //last output 
}


const arrwx = [55,56,33,66,98,54,64]
const s = 2
let combination = findCombination(arrwx,s)
console.log('combination :', combination)