<template>
   <div>
        <template v-for="item in menuList" :key="item.path">
            <!-- 没有子路由 -->
             <template v-if="!item.children && !item.meta.hidden">
                <el-menu-item :index="item.path" @click="goRoute(item)">
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <template #title>
                        <span>{{ item.meta.title }}</span> 
                    </template>
                </el-menu-item>
             </template>
            <!-- 只有一个子路由 -->
            <el-menu-item v-if="item.children&&item.children.length==1&&!item.children[0].meta.hidden" :index="item.children[0].path" @click="goRoute(item.children[0])">
                <el-icon>
                    <component :is="item.children[0].meta.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ item.children[0].meta.title }}</span>
                </template>
            </el-menu-item>
            <!-- 有子路由,且子路由个数大于1 -->
             <el-sub-menu v-if="item.children&&item.children.length>1&&!item.meta.hidden" :index="item.path">
                <template #title>
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                   <span>{{ item.meta.title }}</span>
                </template>
                <Menu :menuList="item.children"></Menu>
             </el-sub-menu>
        </template>
   </div>
</template>
<script setup lang='ts'>
import { useRouter } from 'vue-router'
let $router = useRouter()
const goRoute = ((route:any)=>{
    console.log('route',route)
    $router.push({name:route.name})
})
defineProps(['menuList'])
defineOptions({
    name:'Menu'
})
</script>
<style scoped lang='scss'>
</style>