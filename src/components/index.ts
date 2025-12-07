
import SvgIcon from '@/components/SvgIcon/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const all:any = {SvgIcon}
export default {
    install(app:any){
        Object.keys(all).forEach((key)=>{
            app.component(key,all[key])
        })
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}