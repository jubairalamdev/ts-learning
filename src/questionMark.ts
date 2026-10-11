// ? : ternary operator : decision making
// ?? : nullish coalescing operator - only works over null/undefined
// ?. optional chaining


// ternary operators
const userAge = 20

const biyerJonnoEligible = (age:number) => {

    // if else method
    // if(userAge >= 21) {
    //     console.log("You are eligible")
    // } else {
    //     console.log("You are not eligible")
    // }

    // ternary operator
    const result = age>=21 ? 'You are eligible' : "You are not eligible"
    return result;
}

// console.log(biyerJonnoEligible(userAge))



// nullish coalescing
const userTheme = 'Green';

const selectedTheme = userTheme ?? 'light' // is userTheme = null/undefined? if so then set 'light'

// console.log(selectedTheme)


// difference between ternary/nullish
const isAuthenticaed = null

const resultWithTerary = isAuthenticaed ? isAuthenticaed : "You are guest";
const resultWithNullish = isAuthenticaed ?? "You are guest"

// console.log({resultWithTerary}, {resultWithNullish})


// optional chaining

const user : {
    address: {
        city: string;
        town: string
        postalCode?: number
    }
} = {
    address: {
        city: "Dhaka",
        town: "Banani"
    }
}

const postalCode = user?.address?.postalCode
console.log(postalCode)