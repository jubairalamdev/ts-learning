// Generic Function

// const createArrayWithString = (value:string) => [value] 

// const createArrayWithNumber = (value:number) => [value] 

// const createArrayWithUserObj = (value:{
//     id:number;
//     name:string
// }) => {
//     return [value]
// } 

const createArrayWithGeneric = <T>(value: T) => [value]

const arrString = createArrayWithGeneric("Apple")
const arrNumber = createArrayWithGeneric(222)
const arrObject = createArrayWithGeneric({
    id: 222,
    name: "Jubair"
})

// touple

const createArrayWithTouple = <X,Y>(param1:X, param2: Y) => [param1, param2] 

const res1 = createArrayWithTouple("Mezba", false)
const res2 = createArrayWithTouple(222, {
    name: "Jubair"
})


//

// const addStudentToCourse = (studentInfo)