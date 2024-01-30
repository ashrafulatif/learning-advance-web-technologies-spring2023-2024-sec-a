let number =[1,2,3,4,5];
let fruits =["apple", "banana","mango"];
let mixedArray =[1,"two", {name: "ALice"}, [6,7,8]];

// accesing array element 
let firstNumber= number[0];
let secondFruit= fruits[1];
let thirdElement = mixedArray[2];
//print
console.log ("First number",firstNumber);
console.log ("Second Fruit",secondFruit);
console.log ("Third Element", thirdElement);

// add or remove in array
number.push(6);
fruits.pop();
fruits.unshift("pear");
console.log("after unshift:",fruits);
fruits.shift();

// after push and pop
console.log("after push: ",number);
console.log("after:",fruits);

//for each
let numbers=[1,2,3,4,5,6,7];
numbers.forEach(function(number) {
    console.log(number);
});

//map
let doubleNumber=numbers.map(function(number) {
    return number*2;
});
console.log(doubleNumber);

//filter
const evenNumber = numbers.filter(function(num){
    return num%2===0;
});
console.log(evenNumber);

