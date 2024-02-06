var employees = /** @class */ (function () {
    function employees(id, name) {
        this.id = id;
        this.name = name;
    }
    employees.prototype.display = function () {
        console.log("ID =".concat(this.id, ", Name ").concat(this.name));
    };
    return employees;
}());
var emp1 = new employees(1, "steve");
emp1.display();
