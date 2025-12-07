<template>
   <div class="layout_container">
        <!-- 左侧菜单 -->
        <div :class="{'layout_slider':true,'fold':layoutSettingStore.isExpand}">
            <Logo></Logo>
            <el-scrollbar class="scrollbar">
                <el-menu 
                    :default-active="$route.path" 
                    background-color="#001529" 
                    text-color="#fff" 
                    :collapse="layoutSettingStore.isExpand" 
                    :collapse-transition="false">
                        <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <div class="layout_content">
            <!-- 顶部导航 -->
            <div class="layout_tabbar">
                <!-- layout顶部 -->
                <Tabbar></Tabbar>
            </div>
            <!-- 内容展示区域 -->
            <el-scrollbar class="layout_main">
                <Main></Main>
            </el-scrollbar>
        </div>
   </div>
</template>
<script setup lang='ts'>
import Logo from '@/layout/logo/index.vue'
import Menu from '@/layout/menu/index.vue'
import Main from '@/layout/main/index.vue'
import useUserStore  from '@/store/modules/user.ts'
import Tabbar from '@/layout/tabbar/index.vue'
import useLayoutSettingStore from '@/store/modules/setting'
const userStore = useUserStore()
const layoutSettingStore = useLayoutSettingStore()
</script>
<style scoped lang='scss'>
.layout_container{
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    .layout_slider{
        width: $base-menu-width;
        position: relative;
        height: 100vh;
        background-color: $base-menu-background;
        transition: width 0.3s ease;
        .scrollbar{
            height: calc(100vh - $base-menu-logo-height);
        }
        &.fold{
            width: $base-menu-fold-width;
        }
    }
    .layout_content{
        display: flex;
        flex: 1;
        height: 100vh;
        position: relative;
        .layout_tabbar{
            height: $base-tabbar-height;
            position: absolute;
            width: 100%;
            top: 0;
        }
        .layout_main{
            position: absolute;
            top: $base-tabbar-height;
            height: calc(100vh - $base-tabbar-height);
            width: 100%;
        }
    }
    
}
</style>