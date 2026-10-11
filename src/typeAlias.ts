// make reusable types = type aliasing

type UserType = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    gender: 'male' | 'female'; // literal type
    contactNo: string;
    address : {
        division: string;
        city: string
    }
}

const user1: UserType = {
    id: 123,
    name: {
        firstName: "Mr.",
        lastName: "X"
    },
    gender: "male",
    contactNo: "0177",
    address: {
        city: "Mymesingh Sadar",
        division: "Mymensingh"
    }
}

const user2: UserType = {
    id: 123,
    name: {
        firstName: "Mr.",
        lastName: "Y"
    },
    gender: "female",
    contactNo: "0199",
    address: {
        city: "Dhaka",
        division: "Dhaka"
    }
}

type IsAdmin = true
const isAdmin : IsAdmin = true

type Name = string
const myName: Name = "Mr. X"


// function type aliasing
type AddFunc = (num1: number, num2:number) => number

const add: AddFunc = (num1,num2) => num1+num2