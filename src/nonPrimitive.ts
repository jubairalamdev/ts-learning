// array, object, touple

let bazarList : string[] = ["eggs", "milk", "sugar"]

// bazarList.push(12)

let mixedArr : (string | number)[] = ['eggs', 12, 'milk', 1, 'sugar', 2];

// mixedArr.push(true)


//touples
let coordinates : [number, number] = [20, 30]

let couple : [string, string] = ["Husband", "Wife"]

let nameAndRole : [string, number] = ["Mezba", 79]

// nameAndRole[0] = 79

let destination : [string, string, number] = ["Dhaka", "Chattogram", 3];


// reference type ; object

// const user : {
//     organization: "FlyRank AI"; // value defined as type
//     firstName: string;
//     middleName?: string; // optional type
//     lastName: string;
//     isMarried: boolean;
// } = {
//     organization: "FlyRank AI",
//     firstName: "Jubair",
//     // middleName: "Alam",
//     lastName: "Alif",
//     isMarried: false
// }

// user.organization = "Programming Hero"


const user : {
    readonly organization: string; // access modifier
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
} = {
    organization: "FlyRank AI",
    firstName: "Jubair",
    // middleName: "Alam",
    lastName: "Alif",
    isMarried: false
}

// user.organization = "Programming Hero" // this value can be only read, unable to write