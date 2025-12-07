//本地存储封装
export const SET_USERINFO = ((token:string)=>{
    localStorage.setItem('USETINFO',token)
})
export const GET_USERINFO = (()=>{
    return localStorage.getItem('USETINFO') || '{}'
})
export const REMOVE_USERINFO = (()=>{
    return localStorage.removeItem('USETINFO')
})