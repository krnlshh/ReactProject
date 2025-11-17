// 📝 EXERCISE 3: Promises & Async/Await
// Time: 20 minutes

console.log('===== EXERCISE 3: Async JavaScript =====');

// TODO 1: Create a function that returns a promise
// It should resolve after 2 seconds with message "Done!"
const delayedMessage = () => {
    // YOUR CODE HERE
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => resolve('Done!'), 2000);
    // });
};

// TODO 2: Fetch user data using async/await
// Use this API: https://jsonplaceholder.typicode.com/users/1
const getUser = async () => {
    // YOUR CODE HERE
    // try {
    //     const response = await fetch('...');
    //     const data = await response.json();
    //     return data;
    // } catch (error) {
    //     console.error('Error:', error);
    // }
};

// TODO 3: Create a function that handles errors properly
const getUserSafe = async (userId) => {
    // YOUR CODE HERE
    // Add try/catch block
    // Handle both network errors and invalid user IDs
};

// TODO 4: Create a function that calls multiple APIs in parallel
// Fetch users 1, 2, and 3 at the same time (use Promise.all)
const getMultipleUsers = async () => {
    // YOUR CODE HERE
    // const [user1, user2, user3] = await Promise.all([...])
};


// Function to display results
async function runExercise3() {
    const output = document.getElementById('output3');
    output.innerHTML = '<strong>⏳ Running async operations...</strong>';
    
    try {
        // Test 1: Delayed message
        console.log('Test 1: Starting delayed message...');
        const message = await delayedMessage();
        console.log('Delayed message result:', message);
        
        // Test 2: Get single user
        console.log('Test 2: Fetching user...');
        const user = await getUser();
        console.log('User data:', user);
        
        // Test 3: Safe fetch
        console.log('Test 3: Safe fetch...');
        const safeUser = await getUserSafe(1);
        console.log('Safe user:', safeUser);
        
        // Test 4: Multiple users
        console.log('Test 4: Fetching multiple users...');
        const users = await getMultipleUsers();
        console.log('Multiple users:', users);
        
        output.innerHTML = `
<strong>📊 Results:</strong>

1. Delayed Message: ${message || 'Not implemented yet'}

2. User Name: ${user?.name || 'Not implemented yet'}

3. Safe User: ${safeUser?.name || 'Not implemented yet'}

4. Multiple Users: ${users?.length || 0} users fetched

✅ Check console (F12) for full details!
        `;
    } catch (error) {
        output.innerHTML = `<strong>❌ Error:</strong> ${error.message}`;
        console.error('Exercise 3 error:', error);
    }
}

// 💡 HINTS:
// Promise: new Promise((resolve, reject) => { ... })
// Async/Await: async function() { const data = await fetch(...) }
// Try/Catch: try { ... } catch (error) { ... }
// Promise.all: await Promise.all([promise1, promise2])


