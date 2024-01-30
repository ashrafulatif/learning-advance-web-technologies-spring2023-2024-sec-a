function greet(name) {
    console.log(`hello ,${name}`);
}
greet("alice");

function sum(a,b) {
    return a+b;
}
let result= sum(2,3);
console.log("sum", result);

//arrow function
let greet= name=> console.log(`hello, ${name}!`);
greet("Bob");

const greet = function(name){
    console.log(`Hello,${name}!`);
}