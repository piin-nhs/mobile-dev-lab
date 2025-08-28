export class Account  {
    public taikhoan: string;   
    private matkhau: string;      
    readonly ngaytao: Date;

    constructor(taikhoan: string, matkhau: string) {
        this.taikhoan = taikhoan;
        this.matkhau = matkhau;
        this.ngaytao = new Date(); 
    }
}