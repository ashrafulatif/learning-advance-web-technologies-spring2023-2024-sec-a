let numbers: number[]=[1,2,3,4,5];
console.log(numbers);
//accessing element frm array
let firstElement: number= numbers[0];
console.log(firstElement);

//length array
let arrayLength: number= numbers.length;
console.log(arrayLength);

//adding elemnt
numbers.push(5);

//iterating element
for(let num of numbers)
{
    console.log(num);
}

//array method
let doubleNumbers:number []= numbers.map((num:number)=>num*2);//map return new array
console.log(doubleNumbers);
let evenNumber: number[]=numbers.filter((num:number)=>num%2==0);
console.log(evenNumber);
let sum: number= numbers.reduce((prev:number,next:number)=>prev+next); //return single value
console.log(sum);