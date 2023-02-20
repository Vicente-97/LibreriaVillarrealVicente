export interface userCompleto{

    username: String,
    name: String,
    password:String,
    enabled: Boolean,
    email: String,
    verificationCode:String,
    role:string,
    img:String
}


export interface userRegister{
    username:string
    email:string,
    password:string
}