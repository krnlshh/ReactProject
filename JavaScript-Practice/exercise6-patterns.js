// 📝 EXERCISE 6: Common Interview Patterns
// Time: 15 minutes

console.log('===== EXERCISE 6: Common Patterns =====');

// TODO 1: Remove duplicates from array
const nums = [1, 2, 2, 3, 4, 4, 5, 1, 3];

// Method 1: Using Set
const uniqueWithSet = null; // YOUR CODE HERE: [...new Set(nums)]

// Method 2: Using filter
const uniqueWithFilter = null; // YOUR CODE HERE: nums.filter((item, index) => nums.indexOf(item) === index)


// TODO 2: Group array of objects by property
const products = [
  { name: 'Laptop', category: 'electronics', price: 50000 },
  { name: 'Phone', category: 'electronics', price: 30000 },
  { name: 'Shirt', category: 'clothing', price: 500 },
  { name: 'Jeans', category: 'clothing', price: 1200 }
];

// Expected output: { electronics: [...], clothing: [...] }
const groupedByCategory = null; // YOUR CODE HERE: use reduce


// TODO 3: Flatten nested array
const nested = [1, [2, 3], [4, [5, 6]], 7];

// Method 1: Using flat()
const flatWithFlat = null; // YOUR CODE HERE: nested.flat(depth)

// Method 2: Using reduce (more complex but good to know)
const flatWithReduce = null; // YOUR CODE HERE


// TODO 4: Find max and min in array
const numbers = [45, 12, 89, 23, 67, 34];

// Using Math.max and spread
const maxNumber = null; // YOUR CODE HERE: Math.max(...numbers)
const minNumber = null; // YOUR CODE HERE: Math.min(...numbers)


// TODO 5: Check if array contains all elements from another array
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4];

// Check if arr1 contains all elements of arr2
const containsAll = null; // YOUR CODE HERE: arr2.every(item => arr1.includes(item))


// TODO 6: Sort array of objects by property
const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
];

// Sort by age (ascending)
const sortedByAge = null; // YOUR CODE HERE: users.sort((a, b) => a.age - b.age)


// Function to display results
function runExercise6() {
    const output = document.getElementById('output6');
    
    try {
        console.log('1. Remove duplicates:');
        console.log('  With Set:', uniqueWithSet);
        console.log('  With Filter:', uniqueWithFilter);
        
        console.log('2. Group by category:', groupedByCategory);
        
        console.log('3. Flatten array:');
        console.log('  With flat():', flatWithFlat);
        console.log('  With reduce:', flatWithReduce);
        
        console.log('4. Max and Min:', { max: maxNumber, min: minNumber });
        
        console.log('5. Contains all:', containsAll);
        
        console.log('6. Sorted by age:', sortedByAge);
        
        output.innerHTML = `
<strong>📊 Results:</strong>

1. Unique numbers:
   • Set: ${JSON.stringify(uniqueWithSet)}
   • Filter: ${JSON.stringify(uniqueWithFilter)}

2. Grouped by category:
   ${JSON.stringify(groupedByCategory, null, 2)}

3. Flattened array:
   • flat(): ${JSON.stringify(flatWithFlat)}
   • reduce: ${JSON.stringify(flatWithReduce)}

4. Max: ${maxNumber}, Min: ${minNumber}

5. arr1 contains all of arr2: ${containsAll}

6. Sorted by age: ${JSON.stringify(sortedByAge)}

✅ Check console (F12) for formatted output!

<strong>🎯 These patterns appear in 80% of interviews!</strong>
        `;
    } catch (error) {
        output.innerHTML = `<strong>❌ Error:</strong> ${error.message}`;
        console.error('Exercise 6 error:', error);
    }
}

// 💡 HINTS:
// Remove duplicates: [...new Set(array)] or filter with indexOf
// Group by: reduce with object accumulator
// Flatten: array.flat(Infinity) or recursive reduce
// Max/Min: Math.max(...array)
// Contains all: array2.every(item => array1.includes(item))
// Sort: array.sort((a, b) => a.property - b.property)


