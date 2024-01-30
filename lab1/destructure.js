//array destructing
let numbers=[1,2,3];
let [a,b,c]= numbers;
console.log(a,b,c);

//obj destructing 
let person={
    name: "john",
    age:25,
};
let {name, age}= person;
console.log(name, age);

//destructin functin parameter
function printPersonData({name, age}){
    console.log(`Name: ${name}, Age: ${age}`);
}
console.log(person);