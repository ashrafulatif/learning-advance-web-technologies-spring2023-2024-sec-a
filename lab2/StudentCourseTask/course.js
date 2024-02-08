"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.course = void 0;
var student_1 = require("./student");
var course = /** @class */ (function (_super) {
    __extends(course, _super);
    function course(courseName, teacherName, courseSeat, id, name, cgpa) {
        var _this = _super.call(this, id, name, cgpa) || this;
        _this.enrolledStudents = [];
        _this.courseName = courseName;
        _this.courseSeat = courseSeat;
        _this.teacherName = teacherName;
        return _this;
    }
    //display course details
    course.prototype.courseDetails = function () {
        console.log("Course Name:", this.courseName);
        console.log(this.teacherName.displayTeacherInfo());
        console.log("Course Seat:", this.courseSeat);
    };
    //enroll course 
    course.prototype.CourseEnroll = function (student) {
        if (this.enrolledStudents.length < this.courseSeat) { //check available seat
            this.enrolledStudents.push(student);
            console.log("".concat(student.displayStudentInfo(), " enrolled in ").concat(this.courseName));
        }
        else {
            console.log("Sorry, ".concat(this.courseName, " is full. Cannot enroll ").concat(student.displayStudentInfo()));
        }
    };
    return course;
}(student_1.students));
exports.course = course;
