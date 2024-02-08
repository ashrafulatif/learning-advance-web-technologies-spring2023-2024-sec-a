"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.students = void 0;
var students = /** @class */ (function () {
    function students(id, name, cgpa) {
        this.id = id;
        this.name = name;
        this.cgpa = cgpa;
    }
    students.prototype.displayStudentInfo = function () {
        return ("ID =".concat(this.id, ", Name=").concat(this.name, ", CGPA=").concat(this.cgpa));
    };
    return students;
}());
exports.students = students;
