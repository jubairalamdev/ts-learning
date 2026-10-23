class Parent {
    name: string;
    age: number;
    address: string;

    constructor (name: string, age: number, address:string) {
        this.name = name
        this.age = age
        this.address = address
    }

    getSleep(sleepHour: number) {
        console.log(`${this.name} ${sleepHour} ghonta ghumay`)
    }
}

class Student extends Parent {
    rollNo: number;

    constructor(name:string, age:number, address: string, rollNo:number) {
        super(name, age, address)
        this.rollNo = rollNo
    }
}

class Teacher extends Parent {
    designation: string // extra property

    constructor (name:string, age:number, address: string, designation:string) {
        super(name, age, address) // must be called first
        this.designation = designation
    }

    takeClass (classHours:number) {
        console.log(`${this.name} ${classHours} ghonta class ney`)
    }
}

const student1 = new Student('Mr. fakibaj', 18, 'Bangladesh', 55)
const teacher = new Teacher('Mr. Teacher', 25, 'Bangladesh', 'Senior teacher')

student1.getSleep(15)
teacher.takeClass(5)