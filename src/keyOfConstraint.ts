// keyOf operator: type operator

type RichPeopleVehicle = {
    car: string; // key = value
    bike: string;
    cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng"; // string literal union type
type MyVehicle2 = keyof RichPeopleVehicle;

const vehicle:MyVehicle2 = "cng"; 


// keyof Constraint



type User = {
    id: number;
    name: string;
    address: {
        city: string;
    }
}

const user:User = {
    id: 222,
    name: "Mezba",
    address: {
        city: "Mymensingh"
    },
};

// const myId = user.id
const myId = user['id'];
const myName = user["name"]
const myAddress = user["address"]

// console.log({myId, myName, myAddress})

const getPropertyFromObj = <T>(obj: T, key: keyof T) => {
    return obj[key]
} 

const result = getPropertyFromObj(user, "name");

console.log(result)


const product = {
    brand: "HP"
}

const student = {
    id: 123,
    class:"four"
}

const result2= getPropertyFromObj(product, "brand");
const result3= getPropertyFromObj(student, "class");