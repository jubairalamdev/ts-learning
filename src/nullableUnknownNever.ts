// nullable types

const getUser = (input:string | null)=> {
    if(input) {
        console.log(`From DB: `, input)
    } else {
        console.log('From DB: All User')
    }
}

// getUser(null)


//unknown types

const discountCalc = (input:unknown)=> {
    if (typeof input === 'number') {
        const discountedPrice = input * 0.1
        console.log(discountedPrice)
    } else if (typeof input === 'string') {
        const regularPrice = (input.split(" "))[0];
        const discountedPrice = Number(regularPrice) * 0.1
        console.log(discountedPrice)
    } else {
        console.log("Wrong Input")
    }
}

discountCalc(100)
discountCalc('100 Tk')
discountCalc(null)

//void/never

const throwError = (msg: string)=> {
    throw new Error(msg)
}

throwError("Error...")