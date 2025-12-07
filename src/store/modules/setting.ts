import { defineStore } from "pinia";
let useLayoutSettingStore = defineStore('SettingStore',{
    state:()=>{
        return {
            isExpand:false,//控制菜单折叠收起
            refresh:false,//控制Main组件刷新
        }
    }
})
export default useLayoutSettingStore