let age =20; 
let status= (age>=18)?"Adult":"Minor";
console.log(status);

//spread operator 
let arr1=[1,2,3];
let arr2=[...arr1]; //copy arr1
console.log("arr2: ", arr2);

//concate array
let arr3=[4,5,6];
let combineArray=[...arr1,...arr2];
console.log("Combinbe array: ", combineArray);

//add element 
let newArr= [0,...arr1,4];
console.log(newArr);

//spreading array element as a function argument
function sum(a,b,c) {
    return a+b+c;
}
let numbers=[1,2,3];
let result= sum(...numbers);
console.log(result);

//copy an obj
let obj1= {
    name: "john",
    age:25,
};
let obj2= {...obj1};
console.log(obj2);

//merge obj
let obj3={
    city:"New York",
    ...obj1,
};
console.log(obj3);

//Rest Parameter
function sum(...numbers){
    let total=0;
    for(let number of numbers)
    {
        total+=number;
    }
    return total;
}
let result1= sum(1,2,3,4,5);
console.log(result1);

result1= sum(10,20);
console.log(result1);

