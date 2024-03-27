/* Task 1: Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs. */
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

/* Task 2:Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data. */
async function awaitCall() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
}

/* Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.

/* Task 1: Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs. */
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

/* Task 2:Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data. */
async function awaitCall() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("An error occurred while fetching data from the API:", error.message);
    }
}

/*  Task 3:Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.

Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.*/

async function chainedAsyncFunctions() {
    await firstAsyncFunction();
    await secondAsyncFunction();
    await thirdAsyncFunction();
}

async function firstAsyncFunction() {
    await new Promise(resolve => setTimeout(() => {
        console.log("First async function");
        resolve();
    }, 1000));
}

async function secondAsyncFunction() {
    await new Promise(resolve => setTimeout(() => {
        console.log("Second async function");
        resolve();
    }, 1000));
}

async function thirdAsyncFunction() {
    await new Promise(resolve => setTimeout(() => {
        console.log("Third async function");
        resolve();
    }, 1000));
}

/*
 Task 4:Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved. */
async function concurrentRequests() {
    try {
        const response1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
        const response2 = fetch('https://jsonplaceholder.typicode.com/todos/2');
        
        const [data1, data2] = await Promise.all([response1, response2]);
        
        const result1 = await data1.json();
        const result2 = await data2.json();
        
        console.log("Combined results:", result1, result2);
    } catch (error) {
        console.log("An error occurred while making concurrent requests:", error.message);
    }
}

/*Task 5:Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs and fetches data from each URL concurrently using Promise.all(). Log the responses once all requests are complete. */
async function parallelCalls(urls) {
    try {
        const promises = urls.map(url => fetch(url));
        const responses = await Promise.all(promises);
        
        const data = await Promise.all(responses.map(response => response.json()));
        
        console.log("Responses:", data);
    } catch (error) {
        console.log("An error occurred while making parallel calls:", error.message);
    }
}