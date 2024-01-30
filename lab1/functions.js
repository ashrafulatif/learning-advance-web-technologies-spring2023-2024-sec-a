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
let greet1= name=> console.log(`hello, ${name}!`);
greet1("Bob");

const greet2 = function(name){
    console.log(`Hello,${name}!`);
}
greet("Alice");

//passing func as a parameter
function operateNumbers(a,b,operation){
    return operation(a,b);
}
function add(x,y)
{
    return x+y;
}
function multiply(x,y)
{
    return x*y;
}
console.log(multiply(3,3));

let resultAddintion= operateNumbers(5,5, add);
let resultMultiplication= operateNumbers(5, 3 ,multiply);

console.log("addition:",resultAddintion);
console.log("multiply",resultMultiplication);
