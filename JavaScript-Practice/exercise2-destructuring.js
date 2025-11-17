// 📝 EXERCISE 2: Destructuring & Spread Operator
// Time: 10 minutes

console.log('===== EXERCISE 2: Destructuring & Spread =====');

// Sample data
const user = {
  id: 1,
  name: 'John',
  age: 25,
  address: {
    city: 'Mumbai',
    state: 'Maharashtra'
  }
};

const numbers = [1, 2, 3, 4, 5];

// TODO 1: Extract name and age from user using destructuring
// const { name, age } = ...
const name = null; // YOUR CODE HERE
const age = null; // YOUR CODE HERE

// TODO 2: Extract city from nested address
// const { address: { city } } = ...
const city = null; // YOUR CODE HERE

// TODO 3: Create a copy of numbers array and add 6 to it (use spread)
// const newNumbers = [...numbers, 6]
const newNumbers = null; // YOUR CODE HERE

// TODO 4: Merge two objects (use spread)
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// const merged = { ...obj1, ...obj2 }
const merged = null; // YOUR CODE HERE

// TODO 5: Extract first 2 numbers, rest in another array (use rest operator)
// const [first, second, ...rest] = numbers
const first = null; // YOUR CODE HERE
const second = null; // YOUR CODE HERE
const rest = null; // YOUR CODE HERE


// Function to display results
function runExercise2() {
    const output = document.getElementById('output2');
    output.innerHTML = `
<strong>📊 Results:</strong>

1. Name: ${name}, Age: ${age}

2. City: ${city}

3. New Numbers: ${JSON.stringify(newNumbers)}

4. Merged Object: ${JSON.stringify(merged)}

5. First: ${first}, Second: ${second}, Rest: ${JSON.stringify(rest)}

✅ Check console (F12) for more details!
    `;
    
    console.log('1. Name:', name, 'Age:', age);
    console.log('2. City:', city);
    console.log('3. New Numbers:', newNumbers);
    console.log('4. Merged:', merged);
    console.log('5. First:', first, 'Second:', second, 'Rest:', rest);
}

// 💡 HINTS:
// Destructuring: const { property } = object
// Nested: const { address: { city } } = user
// Spread: [...array] or { ...object }
// Rest: const [a, b, ...rest] = array


