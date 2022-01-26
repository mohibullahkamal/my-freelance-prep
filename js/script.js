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



// Call Stack, and Stack trace
function doStuff(a, b, name) {
    print(sum(a, b));
    print(sayHi(name));
};
function print(variable) {
    console.log(variable);
}
function sum(a, b) {
    return a + b;
}
function sayHi(name) {
    return "Hi " + name;
}
doStuff(1, 2, "Kyle");

// //can also write like this
// function doDoStuff(() =>, () =>);



// Hoisting -> it basically takes all functions and
// pretends to place it at top of the file... so we can
// use them anywhere... But Hoisting does not work on Arrow
// functions... the reason is Arrow function are defined as 
// a variable... with the "let" keyword... variables never 
// get Hoisted...

// Normal functions get Hoisted
function sum(a, b) {
    return a + b;
}
// Arrow functions donot get hoisted because it is defined 
// as variables...
let sumArrow = (a, b) => {
    return a + b;
}
// just like Arrow functions, the variables are defined... 
// is not Hoisted...
let a = 1;



//









