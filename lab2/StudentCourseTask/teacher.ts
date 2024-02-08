export class teacher{
    teacherName: string;
    constructor (teacherName: string)
    {
        this.teacherName= teacherName;
    }
    displayTeacherInfo(): string
    {
        return (`Teacher Name:${this.teacherName}`);
    }
}