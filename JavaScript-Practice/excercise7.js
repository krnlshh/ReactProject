const removeDuplicates = (numbers) => {
    let j = 0
    for(let i=1; i<numbers.length; i++){
        if(numbers[i] !== numbers[j]){           
            j++       
            numbers[j] = numbers[i]     
        }    
    }
    return j + 1
}

const numbers = [1,1,2,5,6]
removeDuplicates(numbers) 
// ans is 4 (unique elemenet in array)


const removeDuplicateArray = (num) => {
    let j = 0
    for(let i=1; i<num.length; i++){
        if(num[j] !== num[i] ){           
            j++       
            num[j] = num[i]     
        }    
    }
    num.length = j + 1
    return num
}
const num = [1,1,2,5,6]
removeDuplicateArray(num) 
// ans is [1,2,5,6] sorted and uniuqe array 

const singleNumber = (element) => {
    const obj = {}
    for(let i=0;i<element.length;i++){
        if(obj[element[i]]){
            obj[element[i]] = obj[element[i]] + 1
        }else{
            obj[element[i]] = 1
        }
    }
    for(let key in obj){
        if(obj[key] === 1){
            return Number(key)
        }
    }  
}
const element =  [4,1,2,1,2]
singleNumber(element)
// ans is 4 [its a only unique element here]


const Intersection  = (nums1,nums2) =>{
    const obj = {}
    const result = []
    for(let i=0; i<nums1.length; i++){
        if(obj[nums1[i]]){
            obj[nums1[i]] = obj[nums1[i]] + 1
        }else{
            obj[nums1[i]] = 1
        }
    }
    for(let i=0; i<nums2.length; i++){
        if(obj[nums2[i]]){
            result.push(nums2[i])
            obj[nums2[i]]--
        }
    }
    return result
}
const nums1 = [4,9,5]
const nums2 = [9,4,9,8,4]
Intersection(nums1,nums2)
// ans is [9,4] , takes common element from both array and add this element in new array
