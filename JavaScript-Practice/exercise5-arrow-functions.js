// 📝 EXERCISE 5: Arrow Functions & 'this' Keyword
// Time: 15 minutes

console.log('===== EXERCISE 5: Arrow Functions & this =====');

// TODO 1: Fix this bug - arrow function doesn't bind 'this'
// BROKEN CODE:
const personBroken = {
  name: 'John',
  greet: () => {
    console.log(`Hello, I'm ${this.name}`); // this.name is undefined!
  }
};

// FIX IT HERE:
const personFixed = {
  name: 'John',
  greet: null // YOUR CODE HERE - use regular function
};

// TODO 2: When is arrow function GOOD for 'this'?
// FIX this setTimeout issue
const counterBroken = {
  count: 0,
  start: function() {
    setTimeout(function() {
      this.count++; // 'this' is wrong here!
      console.log(this.count);
    }, 100);
  }
};

// FIX IT HERE:
const counterFixed = {
  count: 0,
  start: null // YOUR CODE HERE - use arrow function inside setTimeout
};

// TODO 3: Create an object with both regular and arrow functions
const myObject = {
  value: 42,
  // Regular function - can access 'this'
  getValue: null, // YOUR CODE HERE
  
  // Arrow function - for callbacks
  processValue: null // YOUR CODE HERE - should use arrow function that calls getValue
};


// Function to display results
function runExercise5() {
    const output = document.getElementById('output5');
    
    try {
        // Test 1: Fixed person
        console.log('Test 1: Person greet');
        const greeting = personFixed.greet ? personFixed.greet() : 'Not implemented';
        
        // Test 2: Fixed counter
        console.log('Test 2: Counter');
        if (counterFixed.start) {
            counterFixed.start();
            setTimeout(() => {
                console.log('Counter value after 1 second:', counterFixed.count);
            }, 1500);
        }
        
        // Test 3: Object methods
        console.log('Test 3: Object methods');
        const value = myObject.getValue ? myObject.getValue() : 'Not implemented';
        
        output.innerHTML = `
<strong>📊 Results:</strong>

1. Person greet: Check console for greeting

2. Counter: Check console after 1 second

3. Object value: ${value}

✅ Check console (F12) for all results!

<strong>🎯 Key Rules:</strong>
• Arrow functions: Don't have their own 'this'
• Regular functions: Have their own 'this'
• Use arrow functions for callbacks to preserve 'this'
• Use regular functions for object methods
        `;
    } catch (error) {
        output.innerHTML = `<strong>❌ Error:</strong> ${error.message}`;
        console.error('Exercise 5 error:', error);
    }
}

// 💡 HINTS:
// Regular function: methodName: function() { ... } or methodName() { ... }
// Arrow function: methodName: () => { ... }
// Arrow functions inherit 'this' from parent scope
// Regular functions get 'this' from how they're called


