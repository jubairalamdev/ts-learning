// constraint: Strict Rules

type StudentConstraint = {
    id: number;
    name:string;
    dateOfBirth: string;
    class:number;
}

const addStudentToCourse = <T extends StudentConstraint>(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo
    };
};

const student3 = {
    id: 23,
    name: "Nam",
    dateOfBirth: "22-30-2077",
    class: 20,
    hasWatch: true,
}

const result = addStudentToCourse(student3);
console.log(result);