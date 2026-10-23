// type Guard

// typeof Guard

type Alphanumeric = number | string

const add = (num1: Alphanumeric, num2: Alphanumeric) => {
    // return num1+num2
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1+num2
    } else {
        return `${num1}${num2}`
    }

}

// console.log(add(2,2)) // 4

// console.log(add(2, "2")) // 22

// console.log(add("2", 2)) // 22

// in Guard

type NormalUser = {
    name: string;
}
type AdminUser = {
    name: string;
    role: "Admin"
}

const getUserInfo = (user: NormalUser | AdminUser) => {
    if("role" in user) {
        console.log(`This is ${user.name} and his role is: ${user.role}`)
    } else {
        console.log(`This is ${user.name} and he has no role`)
    }
}

getUserInfo({name: "Normal"})
getUserInfo({name: "Normal", role: "Admin"})