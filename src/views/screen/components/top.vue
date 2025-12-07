<template>
   <div class="header">
      <div class="left">

      </div>
      <div class="left_button" @click="toHome">
         首页
      </div>
      <div class="center">
         智慧旅游可视化大数据展示平台
      </div>
      <div class="right_button">
         统计报告
      </div>
      <div class="right">
         当前时间:{{time}}
      </div>
   </div>
</template>
<script setup lang='ts'>
import { onMounted,reactive,ref } from 'vue';
import { useRouter } from 'vue-router';
let $router = useRouter()
let time = ref()
const options = reactive({
   year: 'numeric', 
   month: 'long', 
   day: 'numeric',
   hour: '2-digit',
   minute: '2-digit',
   second: '2-digit',
   hour12: false
})
function toHome(){
   $router.push({path:'/'})
}
function updateTime(){
   const now = new Date();
   time.value = now.toLocaleTimeString('zh-CN', options as any)
}
onMounted(()=>{
   updateTime()
   setInterval(updateTime,1000)
})
</script>
<style scoped lang='scss'>
.header{
   height: 100%;
   display: flex;
   color: #00ffe5;
   font-size: 18px;
   width: 100%;
   .left{
      background:url(../images/dataScreen-header-left-bg.png) no-repeat;
      background-size: 100% 100%;
      height: 100%;
      width: $base-screen-bottomRL-width;
   }
   .left_button{
      background:url(../images/dataScreen-header-btn-bg-l.png) no-repeat;
      background-size: 100% 100%;
      height: 100%;
      width: 7%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
   }
   .center{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 34px;
      font-weight: 300;
      background:url(../images/dataScreen-header-center-bg.png) no-repeat;
      background-size: 100% 100%;
      height: 200%;
      width: calc( 86% - $base-screen-bottomRL-width - $base-screen-bottomRL-width);
   }
   .right_button{
      background:url(../images/dataScreen-header-btn-bg-r.png) no-repeat;
      background-size: 100% 100%;
      height: 100%;
      width: 7%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
   }
   .right{
      background:url(../images/dataScreen-header-right-bg.png) no-repeat;
      background-size: 100% 100%;
      height: 100%;
      width: $base-screen-bottomRL-width;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #4580e8;
   }
}
</style>