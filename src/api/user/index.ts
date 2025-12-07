//统一管理咱们项目的用户相关的请求接口
import request from "@/utils/request";
import type { loginForm,loginResponseData,userInfoResponseData } from "./types";

//用户相关请求接口
enum API {
    LOGIN_URL = '/admin/acl/index/login',
    USER_INFO_URL = '/admin/acl/index/info',
    LOGOUT_URL = '/admin/acl/index/logout'
}

//登录接口
export const reqLogin = (data:loginForm)=>request.post<any,loginResponseData>(API.LOGIN_URL,data)
//获取用户信息
export const reqUserInfo = ()=>request.get<any,userInfoResponseData>(API.USER_INFO_URL)
//退出登录
export const reqLogout = ()=>request.post<any,any>(API.LOGOUT_URL)