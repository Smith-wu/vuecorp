import type {RouteRecordRaw} from "vue-router"
import type { userInfo } from '@/api/user/types'
//定义小仓库数据类型
export interface UserState {
    token:string|null;
    menuRoutes:RouteRecordRaw[],
    userInfo:userInfo
}