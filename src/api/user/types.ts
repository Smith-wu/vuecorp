//登录接口需要携带参数的ts类型
export interface loginForm {
    username: string,
    password: string
}
//定义全部接口都有的ts的类型
export interface ResponseData{
    code:number,
    message:string,
    ok:boolean
}

//定义登录接口返回的数据类型
export interface loginResponseData extends ResponseData{
    data:string
}
//定义获取用户信息接口返回的数据类型
export interface userInfoResponseData extends ResponseData{
    data:{
        routes:string[],
        buttons:string[],
        roles:string[],
        avater:string,
        name:string,
    }
}