var a = 10;
var b = "Hello";
var c = true;
console.log("number is ".concat(a));
console.log("".concat(b, " there!"));
console.log("value is ".concat(c));
//function parameter
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 30));
var p = { id: 1, name: "john" };
console.log(p);
//type Union 
var y;
y = 10;
console.log(y);
//literal Type
var z;
z = "Red";
console.log(z);
//built in Type
//Any
var data;
data = "Something";
console.log(data);
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Green;
console.log(color);
//tuple
var employee;
employee = [1, "steve"];
console.log(employee);
