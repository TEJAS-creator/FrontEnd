// 🔹 What is a Promise?
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

// Syntax
let promise = Promise((resolvePath,reject)=>{
     // some async operation
})


// 🔹 Promise States:
//     Pending: Initial state, not settled yet.
//     Fulfilled: Operation completed successfully.
//     Rejected: Operation failed.


// ex:1
let myPromise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("It worked!");
  } else {
    reject("It failed!");
  }
});

myPromise.then((result) => {
  console.log(result); // It worked!
}).catch((error) => {
  console.log(error);
});



// ex:2
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json()) // handle success
  .then(data => console.log(data))   // chain more success handlers
  .catch(error => console.error("Error:", error)) // handle error
  .finally(() => console.log("Done!")); // runs always



  // Chaining Promises
  function step1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 1 done"), 1000);
  });
}
function step2(previousStep) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(previousStep + " -> Step 2 done"), 2000);
  });
}
step1()
  .then(result => step2(result))
  .then(result => console.log(result)); // Step 1 done → Step 2 done



// 🔸 Promise.all – waits for all to complete:
Promise.all([
  Promise.resolve("A"),
  Promise.resolve("B"),
  Promise.resolve("C")
]).then(values => {
  console.log(values); // ["A", "B", "C"]
});





// 🔸 Promise.race – resolves/rejects as soon as one settles: allows the first which succeeds
Promise.race([
  new Promise(res => setTimeout(() => res("First"), 1000)),
  new Promise(res => setTimeout(() => res("Second"), 2000))
]).then(value => console.log(value)); // First




// ✅Converting Callback Hell to Promises
// ❌ Callback Hell
getData(function(result1) {
  process(result1, function(result2) {
    save(result2, function(result3) {
      console.log(result3);
    });
  });
});


// ✅ Promise Version
getData()
  .then(result1 => process(result1))
  .then(result2 => save(result2))
  .then(result3 => console.log(result3));




// async/await (Built on Promises)
async function run() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Completed");
  }
}
run();




// Beginner project - joke fetch
function getJoke(){
    fetch("https://official-joke-api.appspot.com/jokes/random")
    .then(i=>i.json())
    .then(joke=>{
        console.log(`${joke.setup} - ${joke.punchline}`);
    })

    .catch((error)=>console.log(error));
}
getJoke();
