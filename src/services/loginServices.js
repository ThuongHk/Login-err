import { BasicServices } from "./basicServices";


export class LoginServices extends BasicServices {
    constructor(){
        super();
    }
    login = (values) => {
        // console.log(values);
        return this.post(`api/QuanLyNguoiDung/DangNhap`, values)
    }
}

export const loginServices = new LoginServices();