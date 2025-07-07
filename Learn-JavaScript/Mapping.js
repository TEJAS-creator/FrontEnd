// Javascript Mapping

// ex 1
arr = [1,2,3,4,5]
const result = arr.map(num => num*2)
console.log(result);

// ex 2
const users = [
  { name: "Tejas", age: 20 },
  { name: "Anu", age: 18 }
];
const names = users.map(user => user.name);
console.log(names);


// ex 3
const anime = ["naruto","onepiece","aot"];
const display = anime.map((item,index)=>`${index+1}. ${item}`);
console.log(display);
