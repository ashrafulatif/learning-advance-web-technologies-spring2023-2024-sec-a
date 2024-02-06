class students {
    private id: number;
    private name: string;
    private cgpa: number;
    constructor (id: number , name: string, cgpa:number)
    {
        this.id= id;
        this.name=name;
        this.cgpa=cgpa;
    }

    display():void{
    console.log(`ID =${this.id}, Name=${this.name}, CGPA=${this.cgpa}`);
    } 
}