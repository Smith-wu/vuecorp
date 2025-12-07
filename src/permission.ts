//路由鉴权
import router from "./router";
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import setting from "./setting";

//获取用户仓库
import useUserStore from "./store/modules/user";
import pinia from "./store";
let userStore = useUserStore(pinia)

const whiteList = ['/login']
//前置守卫
router.beforeEach(async (to, from, next) => {
    nprogress.start()
    let token = userStore.token
    let username = userStore.userInfo?.name
    if(token){
        if(to.path == '/login'){
            next(false)
        }else{
            if(username){
                //有用户信息直接放行
                next()
            }else{
                //无用户信息
                try{
                    await userStore.getUserInfo()
                    //获取用户信息放行
                    next()
                }catch(error){
                    //token过期或者token被手动修改了
                    await userStore.exitLogin();
                    next({path:'/login',query:{redirect:to.path}})
                }
            }
        }
    }else{
        if(whiteList.includes(to.path)){
            next()
        }else{
            next({path:'/login',query:{redirect:to.path}})
        }
    }
    
})
//后置守卫
router.afterEach((to, from) => {
    // to and from are both route objects.
    document.title = setting.title + '-' + to.meta.title as string
    nprogress.done()
})