// Javascript callback

// A callback is:
//     ✅ A function passed as an argument to another function,
//     ✅ which is then invoked (called back) later.
//     Control order of execution

// ex 1
function greet(name) {
  console.log("Hello, " + name);
}
function processUser(callback) {
  const name = "Tejas";
  callback(name);  // calling the callback
}
processUser(greet); // Output: Hello, Tejas


// ex 2
setTimeout(()=>{
    console.log("Hi there how are you !!");
},2000)  // 2000 = 2s


// ex 3
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);


// ex 4 (Asynchronous callback)
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 5000);
}

fetchData(() => {
  console.log("Now process the data.");
});


