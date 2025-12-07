//进行axios的二次封装：使用请求和响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'
import useUserStore from '@/store/modules/user'
// 第一步利用axios对象的create方法，去创建axios实例（创建实例的好处是可以加一些其他的配置：如基础路径、超时的时间）
let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
})

//第二步为实例添加请求和响应拦截器
request.interceptors.request.use((config) => {
    //添加token请求头
    //获取用户小仓库
    let userStore = useUserStore()
    if(userStore.token){
        config.headers.token = userStore.token
    }
    //config配置对象，headers属性请求头，经常给服务器端携带公共参数
    return config
})
//第三步---响应拦截器
request.interceptors.response.use((response) => {
    //成功回调
    //简化数据
    return response.data
}, (error) => {
    //失败回调==>处理http网络错误的
    //定义一个变量：存储网络错误信息
    let message = ''
    //http状态码
    let status = error.response.status
    switch(status){
        case 401:
            message = 'TOKEN过期'
            break;
        case 403:
            message = "暂无访问权限"
            break
        case 404:
            message = "未找到对应页面或资源"
            break
        case 500:
            message = "服务器出现问题"
            break
        default:
            message = "网络出现问题"
            break
    }
    //提示错误信息
    ElMessage({
        type:"error",
        message
    });
    return Promise.reject(error)
})
// 暴露request对象
export default request;
