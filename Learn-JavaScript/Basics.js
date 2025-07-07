function sentence(noun, adjective, verb, adverb) {
    var result = "";
    result += "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";
    return result;
}

console.log(sentence("dog", "fat", "ran", "quickly"));




var array = [["Tejas", 95], ["Vedansh", 90]];
console.log(array[0][0]); 
console.log(array[1][1]); 
console.log(array[0][1]); 
console.log(array[1][0]); 


var array = [20,30,40];
array[0]=60;
console.log(array);

var array = [10,20,30];
array.push(["Tejas","coder"]);
console.log(array) // [ 10, 20, 30, [ 'Tejas', 'coder' ] ]


var array = ["Tejas","coder",95,120];
var newarray = array.shift();
var poparray = array.pop();
console.log(newarray);
console.log(array);
console.log(poparray)
console.log(array.unshift("Happy"));



var mylist = [["corn",3],["biscuits",5],["milk",4],["chocolates",8]];
console.log(mylist);


function use(name){
    console.log("Hello "+name+" !!!");
}
use("Tejas");
use("Ichigo");


var outer = "Weather";  // Global variable 
function outfit(){
    var outer = "New";  // Local variable
    return outer;
}
console.log(outer);
console.log(outfit());


var name = "Tejas"
function greetings(name){
    console.log(name+" is a good boi");
}

greetings("Naruto")


// Queue (Stand in Line)
function arraynew(arr,item){
    arr.push(item);
    return item;
}
var testarr = [1,2,3,4,5];
console.log("Before: "+testarr);
console.log("Item added: "+arraynew(testarr,6));
// console.log("After: "+JSON.stringify(testarr));
console.log("After: "+testarr);


function control(age){
    var age;
    if(age>18){
        console.log("You can drive");
    }
    else{
        console.log("you cant't drive");
    }
}
control(10);


const size = 50;
if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}


const food = 'salad';
switch (food) {
  case 'oyster':
    console.log('The taste of the sea');
    break;
  case 'salad':
    console.log('A delicious pie');
    break;
  default:
    console.log('Enjoy your meal');
}



// Variable declared globally
const color = 'blue';
function printColor() {
  console.log(color);
}
printColor(); // => blue


for(var i=1;i<10;i++){
    console.log(i)
}



var name = ["hole-in-one","eagle","birdie","par","bogey","go home"];
function golf(par,strokes){
    if(strokes==1){
        return name[0];
    }
    else if(strokes<=par-2){
        return name[1];
    }
    else if(strokes<=par-1){
        return name[2];
    }
    // add same type 
}

console.log(golf(3,3));



function switchcase(val){
    var answer;
    switch(val){
        case 1:
            answer = "Naruto";
            break;
        case 2:
            answer = "Luffy";
            break;
        case 3:
            answer = "Ichigo";
            break;
        default:
            answer = "Vegeta";
    }
    return answer;
}
for(let i=1;i<=4;i++){
    console.log(switchcase(i));
}




// object creation:
var anime = {
    "Name":"Kurosaki Ichigo",
    "Job":"Soul Reaper",
    "Friends":["Orihime"]
};
console.log(anime.Job)
console.log(anime.Name)



var anime = {
    "55":"Kurosaki Ichigo",
    "Job":"Soul Reaper",
    "Friends":["Orihime"]
};
var player1 = 55;
console.log(anime[55])



var anime = {
    "1":"DBZ",
    "2":"Naruto",
    "3":"Onepiece",
    "4":"Bleach",
    "5":"AOT"
};
anime["6"] = "Father of big 3 DBZ";
console.log(anime);



// Function + object
function tree(val){
    var result = "";
    var anime= {
        "Old":"DBZ",
        "Classic":"Naruto",
        "Legend":"Onepiece",
        "Pro":"Aot"
    };
    result = anime[val];
    return result;
}
console.log(tree("Legend"));




// Complex objects
var myMusic = {
    "Singer1": {
        "artist": "The Weeknd",
        "songs": ["Starboy", "Sao Paulo", "Blinding Lights"],
        "Release Year": 2020,
        "formats": ['MP3', 'MP4', 'CD', 'DVD'],
        "gold": true
    },
    "Singer2": {
        "artist": "Dua Lipa",
        "songs": ["Levitating", "Don't Start Now", "New Rules"],
        "Release Year": 2020,
        "formats": ["MP3", "MP4", "CD", "DVD"],
        "gold": true
    }
};
console.log(myMusic);
console.log(myMusic.Singer1);
console.log(myMusic.Singer2);




// Manga Collection
var mangaLibrary = {
    "001": {
        "Author": "Eiichiro Oda",
        "Manga": "One Piece",
        "Year": 1999
    },
    "002": {
        "Author": "Masashi Kishimoto",
        "Manga": "Naruto",
        "Year": 1999
    },
    "003": {
        "Author": "Tite Kubo",
        "Manga": "Bleach",
        "Year": 2001
    }
};

// Function to update the mangaLibrary
function update(id, detail, value) {
    if (value === "") {
        delete mangaLibrary[id][detail];
    } else {
        mangaLibrary[id][detail] = value;
    }
}
// Example usage
update("002", "Year", "");  // Deletes the Year from Naruto
update("003", "Manga", "BLEACH"); // Updates the manga name BLEACH
console.log(mangaLibrary);
console.log(mangaLibrary["001"]);
console.log(mangaLibrary["002"]);
console.log(mangaLibrary["003"]);




// while,for,do-while loops
var myarray=[];

// var i =0;
// while(i<=100){
//     myarray.push(i);
//     i+=2; // can print tables
// }

// for(let i=0;i<=100;i+=2){
//     myarray.push(i);
// }

// var i=0;
// do{
//     myarray.push(i);
//     i+=1
// }while(i<=100);
console.log(myarray);


// random function returning decimal number
function random(){
    return Math.random();
}
console.log(random());




// random function returning whole number
function random(){
    return Math.floor(Math.random()*10);   // * number gives random number between 0 to number entered 
}
console.log(random());



// Print only even numbers in the array
var arr = [1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
}



// Basic additon
var numbers = [1,2,3];
var sum =0;
for(let i =0;i<=numbers.length;i++){
    var sum=sum+i;
}
console.log(sum);



// Template literals
const anime = {
    "name":"Naruto",
    "manga":"Yes"
}
const greeting = `My first anime is ${anime.name}\nManga availability: ${anime.manga}`;
console.log(greeting);



// Simple field
const person=(name,age,gender)=>({name,age,gender}); // Arrow Function
console.log(person("Tejas",19,"Male"));
console.log(person("Luffy",19,"Male"));



// Classes in JavaScript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
const tejas = new Person("Tejas", 19);
tejas.greet(); 



// Here Callbacks are being used
function walkDog(callback){
    setTimeout(()=> {
        console.log("Walk the dog");
        callback();
    },2000);
}

function cleanKitchen(callback){
    setTimeout(()=> {
        console.log("Clean the kitchen");
        callback();
    },1000);
}
walkDog(()=>{
    cleanKitchen(()=>console.log("You Finished !!!"));
});







