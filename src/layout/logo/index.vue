<template>
   <div class="logo">
    <img :src="setting.logo" alt="">
    <p v-show="!layoutSettingStore.isExpand">{{setting.menuTitle}}</p>
   </div>
</template>
<script setup lang='ts'>
import setting from '@/setting.ts'
import useLayoutSettingStore from '@/store/modules/setting'
const layoutSettingStore = useLayoutSettingStore()
</script>
<style scoped lang='scss'>
.logo{
    width: 100%;
    height: $base-menu-logo-height;
    color:#fff;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: center;
    img{
        width: 25px;
        height: 25px;
    }
    p{
        font-size: $base-logo-title-fontSize;
        margin-left: 10px;
        white-space: nowrap;
    }
}
</style>