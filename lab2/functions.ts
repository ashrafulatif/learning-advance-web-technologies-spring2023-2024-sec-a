function addNumber(a:number, b:number):number
{
    return a+b;
}
console.log(addNumber(10,20));

//arrow function 
let addNumbers=(a:number, b: number):number=>{
    return a+b;
}
console.log(addNumbers(10,50));

//optional parameter
function addNumber1(a:number,b:number,c?:number):number {
    return a+b+(c??0);
}
console.log(addNumber1(1,2,3));

//default parameter
function addNumber2(a:number,b:number,c: number=0): number{
    return a+b+c;
}
console.log(addNumber2(3,3,3));

//rest parameter
function addNumber3(...nums:number[]):number{
    let sum: number=0;
    for(let num of nums)
    {
        sum+=num;
    }
    return sum;
}
let nums:number[]=[1,2,3];
console.log("sum: ",addNumber3(...nums));

//function overloading 
function addNumber4(a:number, b: number):number;
function addNumber4(a:string,b:string):string;
function addNumber4(a:any, b:any) {
    return a+b;
}
console.log(addNumber4(1,3));