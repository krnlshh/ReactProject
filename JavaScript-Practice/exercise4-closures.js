// 📝 EXERCISE 4: Closures & Scope
// Time: 20 minutes

console.log('===== EXERCISE 4: Closures =====');

// TODO 1: Create a counter function that remembers count
// Should return an object with increment() and getCount() methods
const createCounter = () => {
    // YOUR CODE HERE
    // let count = 0;
    // return {
    //     increment: () => { count++; },
    //     getCount: () => count
    // };
};

// TODO 2: Create a function with private variable
// Only accessible through getName() and setName()
const createUser = (initialName) => {
    // YOUR CODE HERE
    // let name = initialName;
    // return {
    //     getName: () => name,
    //     setName: (newName) => { name = newName; }
    // };
};

// TODO 3: Create a function that generates unique IDs
// Each call should return a new incremented ID
const createIdGenerator = () => {
    // YOUR CODE HERE
    // let id = 0;
    // return () => ++id;
};

// TODO 4: Create a calculator with memory
// Should remember last result
const createCalculator = () => {
    // YOUR CODE HERE
    // let memory = 0;
    // return {
    //     add: (n) => { memory += n; return memory; },
    //     subtract: (n) => { memory -= n; return memory; },
    //     getMemory: () => memory,
    //     clear: () => { memory = 0; }
    // };
};


// Function to display results
function runExercise4() {
    const output = document.getElementById('output4');
    
    try {
        // Test 1: Counter
        console.log('Test 1: Counter');
        const counter = createCounter();
        counter?.increment();
        counter?.increment();
        counter?.increment();
        const count = counter?.getCount();
        console.log('Count after 3 increments:', count);
        
        // Test 2: User
        console.log('Test 2: User');
        const user = createUser('John');
        const originalName = user?.getName();
        user?.setName('Jane');
        const newName = user?.getName();
        console.log('Original name:', originalName, 'New name:', newName);
        
        // Test 3: ID Generator
        console.log('Test 3: ID Generator');
        const generateId = createIdGenerator();
        const id1 = generateId?.();
        const id2 = generateId?.();
        const id3 = generateId?.();
        console.log('IDs:', id1, id2, id3);
        
        // Test 4: Calculator
        console.log('Test 4: Calculator');
        const calc = createCalculator();
        calc?.add(10);
        calc?.add(5);
        calc?.subtract(3);
        const result = calc?.getMemory();
        console.log('Calculator result:', result);
        
        output.innerHTML = `
<strong>📊 Results:</strong>

1. Counter after 3 increments: ${count || 'Not implemented'}

2. User name change: "${originalName}" → "${newName}"

3. Generated IDs: ${id1}, ${id2}, ${id3}

4. Calculator (10+5-3): ${result || 'Not implemented'}

✅ Check console (F12) for more details!

<strong>🎯 Key Concept:</strong> Closures allow inner functions to access outer function's variables even after the outer function has returned!
        `;
    } catch (error) {
        output.innerHTML = `<strong>❌ Error:</strong> ${error.message}`;
        console.error('Exercise 4 error:', error);
    }
}

// 💡 HINTS:
// Closure: function outer() { let x = 0; return function inner() { return x; } }
// Private variable: Variables declared in outer function are private to inner functions
// Each call to createCounter() creates a NEW independent closure with its own count


