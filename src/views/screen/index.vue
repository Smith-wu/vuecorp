<template>
   <div class="container">
      <!-- 展示内容区域 -->
      <div class="screen" ref="screen">
         <div class="top">
            <Top></Top>
         </div>
         <div class="bottom">
            <div class="left">
               <BottomLeft></BottomLeft>
            </div>
            <div class="center">
               <BottomCenter></BottomCenter>
            </div>
            <div class="right">
               <BottomRight></BottomRight>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup lang='ts'>
import { ref,onMounted } from 'vue';
import Top from './components/top.vue';
import BottomCenter from './components/bottom-center.vue';
import BottomLeft from './components/bottom-left.vue';
import BottomRight from './components/bottom-right.vue';
//获取数据大屏展示内容的DOM元素
const screen = ref()
onMounted(()=>{
   screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
})
//定义缩放比例
function getScale(w=1920,h=1080){
   const ww = window.innerWidth / w
   const wh = window.innerHeight / h
   return ww < wh ? ww : wh
}

//监听视口变化
window.onresize = ()=>{
   screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
}
</script>
<style scoped lang='scss'>
.container{
   width: 100vw;
   height: 100vh;
   background: url(./images/bg.png) no-repeat;
   background-size: cover;
   .screen{
      width: 1920px;
      height: 1080px;
      position: fixed;
      left: 50%;
      top:50%;
      transform-origin: left top;
      .top{
         width: 100%;
         height: $base-screen-top-height;
      }
      .bottom{
         display: flex;
         height: calc(100% - $base-screen-top-height);
         width: 100%;
         .left{
            width: $base-screen-bottomRL-width;
         }
         .center{
            width: calc(100% - $base-screen-bottomRL-width - $base-screen-bottomRL-width);
         }
         .right{
            width: $base-screen-bottomRL-width;
         }
      }  
   }
}
</style>