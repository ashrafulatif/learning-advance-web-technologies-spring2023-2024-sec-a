import { course } from './course';
import { students } from './student';
import { teacher } from './teacher';

    const student1 = new students(1, "atif", 3.73);
    const teacher1 = new teacher("Sirius Blake");

    const mathCourse = new course("Advance Web Tech",teacher1 ,0, 1, "atif", 3.73);

    mathCourse.courseDetails();
    mathCourse.CourseEnroll(student1);
   