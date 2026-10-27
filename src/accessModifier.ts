// access >> modify

class BankAccount {
    public readonly userId: number;
    public userName: string;
    protected userBalance: number;

    constructor(userId: number, userName: string, userBalance:number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    addBalance(amount:number) {
        this.userBalance += amount;
    }
}

class StudentAccount extends BankAccount{
    test(){
        this.
    }
}

const jubairAccount = new BankAccount(111, 'Jubair', 0)

jubairAccount.addBalance(50)
jubairAccount.addBalance(150)
console.log(jubairAccount)