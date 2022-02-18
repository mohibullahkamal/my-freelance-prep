// let a = 1;
// let b = 2;
// let c = 3;

// console.log(a);
// console.log(b);
// console.log(c);
// a = c;
// console.log(a);

// //console.log('Hello World... Just a test')



// function myName() {
//     console.log("Moh Kam");
// }
// myName();



// //function that returns the person name 
// function nameHi(name) {
//     return "Hello " + name;
// }
// let n = nameHi("momo");
// console.log(n);



// //pass function within a function
// function printVar(v) {
//     console.log(v);
// }

// function func(x) {
//     console.log("before printing...");
//     x("hello world");
//     console.log(".. after printing");
// }

// func(printVar);



// //Callbacks are very commonly used in JS
// function sumCallback(a, b, callback) {
//     callback(a, b);
// }

// function callback(a, b) {
//     console.log(a + b);
// }

// sumCallback(1, 2, callback);



// // Create a new function that takes 2 parameters.
// // 1. name,
// // 2. callback, that prints out what we pass to it...
// // take the name and append "hello" to the beginning of name
// function printVar(x) {
//     console.log(x);
// }

// function printName(name, callback) {
//     callback("Hello " + name);
// }

// function printName(name) {
//     console.log(name);
// }

// printName("Meow", printVar);

// // ******* This was my soln...
// // function printVar(name, callback) {
// //     let x = callback(name);
// //     console.log(x);
// // }

// // function myCallback(myName) {
// //     return "Hello " + myName;
// // }

// // printVar("Mooo", myCallback);



// // Anonymous functions
// function printName(name, callback) {
//     callback("Hello " + name);
// }

// printName("Momo", function (v) {
//     console.log(v);
// });



// //Arrow function
// function printHi(name) {
//     return "Hi" + name;
// }

// let arrowPrintHi = name => "Hi " + name;
// console.log(arrowPrintHi("mooo"));



// //arrow functions; () returns the value of the function
// let no1 = () => 1;
// let no2 = () => 2;
// let no3 = () => 3;

// let sum = no1() + no2() + no3();
// console.log(sum);



// // Call Stack, and Stack trace
// function doStuff(a, b, name) {
//     print(sum(a, b));
//     print(sayHi(name));
// };
// function print(variable) {
//     console.log(variable);
// }
// function sum(a, b) {
//     return a + b;
// }
// function sayHi(name) {
//     return "Hi " + name;
// }

// let result = "Kyle";
// doStuff(1, 2, result);

// // //can also write like this
// // function doDoStuff(() =>, () =>);



// // Hoisting -> it basically takes all functions and
// // pretends to place it at top of the file... so we can
// // use them anywhere... But Hoisting does not work on Arrow
// // functions... the reason is Arrow function are defined as 
// // a variable... with the "let" keyword... variables never 
// // get Hoisted...

// // Normal functions get Hoisted
// function sum(a, b) {
//     return a + b;
// }
// // Arrow functions donot get hoisted because it is defined 
// // as variables...
// let sumArrow = (a, b) => {
//     return a + b;
// }
// // just like Arrow functions, the variables are defined... 
// // is not Hoisted...
// let a = 1;



// // Scope --> Global scope, and Local scope...
// function sayHi(name) {
//     let a = 2;
//     let result = "Hi " + name + a;
//     console.log(result);
// }
// // Look at the variables names and compare with above
// // let result = "Kyle";
// // sayHi(result);   // Hi Kyle
// let a = 1;
// sayHi("Kyle")   // "Hi Kyle2"
// // console.log(result);   // not defined in outerscope



// // Closures are very Important concept..
// // Closures... almost same as Scoping...(see above) 
// // Closures are basically functions inside functions... 
// let a = 1;

// function printThis() {
//     console.log(a)
// }
// // printThis();   // 1
// a = 2;
// printThis();   // 2   // this is because the latest value of a is 2



// Closures ... another example
function print(variable) {
    return function func(variable2) {   //the parent print() function returns func()...
        console.log(variable);
        console.log(variable2);
    }
}

let a = print(1);   //this output us a brand new function--> func(variable2){...}
// a(2)   // 1   2   //this is a hard concept and took me time to understand...



// 



//



// Type coersion...



// // NaN - Not a Number..
// const a = "1";
// const b = "fsddjfasdf";
// const c = 5

// console.log(typeof parseInt(b));
// console.log(parseInt(b));
// console.log(parseInt(a) === NaN);   // Nothing is ever equal to NaN
// console.log(isNaN(a));   // if your variable is not a number
// console.log(isNaN(b));
// console.log(typeof a)
// console.log(typeof b)



// // Arrays
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const b = [
//     ["hi", "bye"],
//     [1, 2]
// ]

// console.log(a);   // all array items
// console.log(a[2]);   // 3 - third element in array

// a.push(33);   // adds 33 at the end of list a
// console.log(a);
// console.log(a.length);

// a.push(["hi", "bye"]);   // array inside of an array
// console.log(a);

// console.log(b[0][0]);   // hi



// // Object in JS... key and value pair...
// let name = "Mohib";
// const age = 30;
// const favoriteNumber = 3;

// let person = {}
// console.log(person);

// let person = {
//     name: "Mohib",
//     age: 30,
//     favoriteNumber: 3
// }   // has key value pair...
// console.log(person.name);   // Mohib
// console.log(person.age);   // 30



// 
// 


