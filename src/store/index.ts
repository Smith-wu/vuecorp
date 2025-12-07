import { createPinia} from 'pinia'
//创建最大仓库
let pinia = createPinia()
//对外暴露，在main.ts注册安装 
export default pinia