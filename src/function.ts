// function
// arrow fn, normal fn

function add(num1 : number, num2 : number) : number
{
    return num1 + num2
}

// add(2, "2");

const sum = (num1 : number, num2 : number) : number => num1 + num2

sum(2,2)


// method: fn inside object

const poorUser = {
    name: "Mezba",
    balance: 0,
    addBalance(amount: number) : number {
        return this.balance = this.balance + amount;
    }
}

poorUser.addBalance(100)

// console.log(poorUser.balance)

// callback fn inside loops

const arr : number[] = [1,4,6]

const sqrArray = arr.map((num : number) : number => num*num)