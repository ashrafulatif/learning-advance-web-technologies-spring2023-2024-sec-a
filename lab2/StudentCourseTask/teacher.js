"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacher = void 0;
var teacher = /** @class */ (function () {
    function teacher(teacherName) {
        this.teacherName = teacherName;
    }
    teacher.prototype.displayTeacherInfo = function () {
        return ("Teacher Name:".concat(this.teacherName));
    };
    return teacher;
}());
exports.teacher = teacher;
