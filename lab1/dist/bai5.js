"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(dp) {
        this.balance = this.balance + dp;
        return true;
    }
    withdraw(wd) {
        if (this.balance - wd < 0)
            return false;
        this.balance = this.balance - wd;
        return true;
    }
}
exports.BankAccount = BankAccount;
