class Person{
    constructor(name, age)
    {
        this.name=name;
        this.age= age;
    }
    speak(){
        console.log(`hello! My name is ${this.name}`);
    }
}

const john = new Person ('john',20);
john.speak();

//inheritance
class student extends Person{
    constructor (name, age, grade){
        super(name,age);
        this.grade=grade;
    }
    study (){
        console.log(`${this.name}'s grade is ${this.grade}`);
    }
}
const alice=new student("Alice",22, 95);
alice.speak();
alice.study();

//obj method
console.log(Object.keys(alice));
console.log(Object.values(alice));
console.log(Object.entries(alice));