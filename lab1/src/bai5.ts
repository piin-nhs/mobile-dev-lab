export class BankAccount {
    balance: number;

    constructor (balance: number){
        this.balance = balance;
    }

    deposit(dp: number): boolean {
        this.balance = this.balance + dp;
        return true;
    }

    withdraw(wd: number): boolean {
        if (this.balance - wd < 0) 
        return false;
        this.balance = this.balance - wd;
        return true;
    }
}