let a: number=10;
let b: string="Hello";
let c: boolean=true;

console.log(`number is ${a}`);
console.log(`${b} there!`);
console.log(`value is ${c}`);

//function parameter
function add(num1:number, num2: number):number{
return num1+num2;
}
console.log(add(10,30));

//type aliases
type person ={id: number, name: string};
let p: person={id:1, name:"john"};
console.log(p);

//type Union 
let y:number|string;
y=10;
console.log(y); 

//literal Type
let z: "Red"|"green"|"Blue";
z="Red";
console.log(z);

//built in Type
//Any
let data: any;
data="Something";
console.log(data);
//Enum
enum Color{Red, Green, Blue};
let color: Color =Color.Green;

console.log(color);

//tuple
let employee:[number,string];
employee=[1,"steve"];
console.log(employee);

