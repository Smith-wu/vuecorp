<template>
    <div class="app-main">
        <router-view v-slot="{ Component }">
        <!-- 添加过渡动画 -->
            <transition name="fade">
                <!-- 渲染layout一级路由的子路由 -->
                <component :key="layoutsettingStore.refresh" :is="Component" />
            </transition>
        </router-view>
    </div>
   
</template>
<script setup lang='ts'>
import useLayoutSettingStore from '@/store/modules/setting';
let layoutsettingStore = useLayoutSettingStore()
</script>
<style scoped lang='scss'>
.fade-enter-from{
    opacity: 0;
}
.fade-enter-active{
    transition: all 1s;
}
.fade-enter-to{
    opacity: 1;
}
.app-main{
    min-height: calc(100vh - 55px);
}
</style>