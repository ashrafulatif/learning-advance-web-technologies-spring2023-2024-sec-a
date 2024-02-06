var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
//accessing element frm array
var firstElement = numbers[0];
console.log(firstElement);
//length array
var arrayLength = numbers.length;
console.log(arrayLength);
//adding elemnt
numbers.push(5);
//iterating element
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    console.log(num);
}
//array method
var doubleNumbers = numbers.map(function (num) { return num * 2; }); //map return new array
console.log(doubleNumbers);
var evenNumber = numbers.filter(function (num) { return num % 2 == 0; });
console.log(evenNumber);
var sum = numbers.reduce(function (prev, next) { return prev + next; }); //return single value
console.log(sum);
