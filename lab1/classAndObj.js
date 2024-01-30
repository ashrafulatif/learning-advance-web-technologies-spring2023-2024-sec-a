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