"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(taikhoan, matkhau) {
        this.taikhoan = taikhoan;
        this.matkhau = matkhau;
        this.ngaytao = new Date();
    }
}
exports.Account = Account;
