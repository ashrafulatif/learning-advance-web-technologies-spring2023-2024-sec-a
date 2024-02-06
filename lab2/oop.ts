class employees{
    id: number;
    name: string;

    constructor(id:number, name: string){
        this.id=id;
        this.name=name;
    }

    display():void{
        console.log(`ID =${this.id}, Name ${this.name}`);
    }
}
let emp1=new employees(1, "steve");
emp1.display();