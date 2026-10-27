// getter
class BankAccount {
    public readonly userId: number;
    public userName: string;
    protected userBalance: number;

    constructor(userId: number, userName: string, userBalance:number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    // addBalance(amount:number) {
    //     this.userBalance += amount;
    // }

    // getBalance () {
        //     return this.userBalance
        // }

    // getter
    get getBalance(){
        return this.userBalance
    }

    // setter
    set addBalance(amount:number) {
        this.userBalance += amount
    }
}

const jubairAccount = new BankAccount(111, 'Jubair', 0)

// jubairAccount.addBalance(50)
// jubairAccount.addBalance(150)

jubairAccount.addBalance = 100;
jubairAccount.addBalance = 60;
console.log(jubairAccount.getBalance)
console.log(jubairAccount)