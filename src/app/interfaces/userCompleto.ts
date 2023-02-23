export interface userCompleto{

    username: string,
    name: String,
    password:String,
    enabled: Boolean,
    email: String,
    verificationCode:String,
    role:string,
    img:String
    sub:string
}


export interface userRegister{
    username:string
    email:string,
    password:string
}


export interface user{

    username: string,
    name: String,
    password:String,
    enabled: Boolean,
    email: String,
    verificationCode:String,
    role:string,
    img:String

}