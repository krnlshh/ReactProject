const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("success")
    },1000)
})
console.log(myPromise)

// A Promise is an object that represents a value that may be available in the future 
// promise can eaiter resolve with a value and reject with error
// Promise.all takes multiple promises and waits for all of them to resolve (or any to reject), returning results in an array.
// promise always takes in microTask queue, its basically priorty type queue once callStack is empty then promise opration execute first
// there are three states of promise 1 pending 2.fullfilled (resolved) 3.rejected
// Using callback functions to handle nested asynchronous operations creates 'callback hell,' making code difficult to read and maintain."
// when we use async,await then its easy to read and handle 
// 



// Custom implementation of Promise.all
// Takes an array of promises and returns a promise that resolves when all input promises resolve,
// or rejects if any input promise rejects.
const PromiseAll = (promiseList) => { // promiseList: array of promises or values

    return new Promise((resolve, reject) => {
        // Validate that the input is an array
        if (!Array.isArray(promiseList)) { // If not an array, reject with TypeError
            return reject(new TypeError('promiseAll expects an array'));
        }

        // Initialize results array with the same length as promiseList (filled with undefined initially)
        const results = new Array(promiseList.length); // results will hold resolved values in order

        // Counter to track how many promises have resolved
        let resolvedCount = 0; // Starts at 0

        // Edge case: if the array is empty, resolve immediately with an empty array
        if (promiseList.length === 0) {
            resolve([]);
            return;
        }

        // Iterate over each item in promiseList
        promiseList.forEach((promise, index) => { // promise: current item, index: its position
            // Wrap the item in Promise.resolve to handle non-promise values uniformly
            Promise.resolve(promise).then(
                // Success callback: executed when the promise resolves
                (value) => {
                    // Store the resolved value at the correct index to preserve order
                    results[index] = value;
                    // Increment the count of resolved promises
                    resolvedCount++;
                    // If all promises have resolved, resolve the outer promise with results
                    if (resolvedCount === promiseList.length) {
                        resolve(results);
                    }
                },
                // Failure callback: executed if the promise rejects
                reject // Immediately reject the outer promise on any failure
            );
        });
    });
};

// Test call (this will reject since no arguments are passed, but tests below work)
PromiseAll();

// Test cases
const prom1 = Promise.resolve(1);
const prom2 = Promise.resolve(2);
const prom3 = Promise.resolve(3);
PromiseAll([prom1, prom2, prom3]).then(console.log).catch(console.error); // Should log [1, 2, 3]

PromiseAll([]).then(console.log); // Should log []

PromiseAll([Promise.reject('fail')]).catch(console.error); // Should log 'fail'
