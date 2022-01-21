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



// Anonymous functions
function printName(name, callback) {
    callback("Hello " + name);
}

printName("Momo", function (v) {
    console.log(v);
});








