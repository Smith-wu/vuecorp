//创建用户相关的小仓库
import { defineStore } from 'pinia'
import type { UserState } from '@/store/modules/types/type'
import { reqLogin,reqUserInfo,reqLogout } from '@/api/user'
import type { loginForm,loginResponseData,userInfoResponseData } from '@/api/user/types'
import { SET_TOKEN, GET_TOKEN,REMOVE_TOKEN } from '@/utils/token'
import { SET_USERINFO, GET_USERINFO,REMOVE_USERINFO } from '@/utils/userInfo'
import { constantRoute } from '@/router/routes'
//创建用户小仓库
let useUserStore = defineStore('User', {
    //存储数据地方
    state: (): UserState => {
        return {
            token: GET_TOKEN(),//用户唯一标识token
            menuRoutes:constantRoute,//仓库存储菜单生成数组路由
            userInfo:JSON.parse(GET_USERINFO() as string)
        }
    },
    //异步逻辑地方
    actions: {
        async userLogin(data: loginForm) {
            let result: loginResponseData = await reqLogin(data)
            //code--200成功
            if (result.code == 200) {
                this.token = (result.data as string)
                SET_TOKEN(result.data as string)
                return 'ok'
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //获取用户信息
        async getUserInfo(){
            let result:userInfoResponseData = await reqUserInfo()
            if(result.code == 200){
                this.userInfo = result.data
                SET_USERINFO(JSON.stringify(result.data))
                return 'ok'
            }else{
                return Promise.reject(new Error(result.message as string))
            }
        },
        async exitLogin(){
            let result:any = await reqLogout()
            if(result.code == 200){
                this.token = ''
                this.userInfo = {routes: [], buttons: [], roles: [], avatar: '', name: ''}
                REMOVE_TOKEN()
                REMOVE_USERINFO()
                return 'ok'
            }else{
                return Promise.reject(new Error(result.message))
            }
        }
    },
    getters: {

    }
})
//对外暴露
export default useUserStore