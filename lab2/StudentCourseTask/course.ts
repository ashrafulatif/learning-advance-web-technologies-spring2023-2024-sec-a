import { students } from './student';
import { teacher } from './teacher'; 
export class course extends students {  //courses inherited class to access student 
    private courseName:string;
    private courseSeat:number;
    private enrolledStudents: students[] = [];
    private teacherName:teacher;

    constructor(courseName:string, teacherName:teacher,courseSeat:number, id:number, name :string, cgpa: number) {
        super(id, name,cgpa);
        this.courseName=courseName;
        this.courseSeat=courseSeat;
        this.teacherName=teacherName
    }
    //display course details
    courseDetails(): void {
        console.log("Course Name:",this.courseName);
        console.log(this.teacherName.displayTeacherInfo());
        console.log("Course Seat:",this.courseSeat);
    }
    //enroll course 
    CourseEnroll(student:students):void{
        if (this.enrolledStudents.length < this.courseSeat) { //check available seat
            this.enrolledStudents.push(student);
            console.log(`${student.displayStudentInfo()} enrolled in ${this.courseName}`);
        } else {
            console.log(`Sorry, ${this.courseName} is full. Cannot enroll ${student.displayStudentInfo()}`);
        }
    }
    
}