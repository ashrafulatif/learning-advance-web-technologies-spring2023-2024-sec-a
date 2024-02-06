function addNumber(a, b) {
    return a + b;
}
console.log(addNumber(10, 20));
//arrow function 
var addNumbers = function (a, b) {
    return a + b;
};
console.log(addNumbers(10, 50));
//optional parameter
function addNumber1(a, b, c) {
    return a + b + (c !== null && c !== void 0 ? c : 0);
}
console.log(addNumber1(1, 2, 3));
//default parameter
function addNumber2(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
console.log(addNumber2(3, 3, 3));
//rest parameter
function addNumber3() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var num = nums_1[_a];
        sum += num;
    }
    return sum;
}
var nums = [1, 2, 3];
console.log("sum: ", addNumber3.apply(void 0, nums));
function addNumber4(a, b) {
    return a + b;
}
console.log(addNumber4(1, 3));
