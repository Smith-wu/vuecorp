<template>
   <div class="c_b_chart">
      <div class="header">
         <div class="title">
               <div>未来30天游客量趋势图</div>
               <img src="../images/dataScreen-title.png" alt="">
         </div>
      </div>
      <div class="bottom" ref="chart">

      </div>
   </div>
</template>
<script setup lang='ts'>
import * as echarts from 'echarts'
import { fa } from 'element-plus/es/locales.mjs';
import { ref,onMounted } from 'vue';
const chart = ref()
onMounted(()=>{
   let mycharts = echarts.init(chart.value)
   mycharts.setOption({
         xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
         },
         grid:{
            top:30,
            bottom:30,
            left:50,
            right:30
         },
         yAxis: {
            type: 'value',
            axisTick:{
               show:false
            },
            splitLine:{
               show:false
            }
         },
         series: [
            {
               data: [820, 932, 901, 934, 1290, 1330, 1320],
               type: 'line',
               smooth:true,
               areaStyle: {}
            }
         ],
         tooltip:{
            trigger:'axis',
         }
      })
   })
</script>
<style scoped lang='scss'>
.c_b_chart{
   display: flex;
   flex: 1;
   flex-direction: column;
   background: url(../images/dataScreen-main-cb.png) no-repeat;
   background-size: 100% 100%;
   color:#fff;
   font-size: 18px;
   .header{
        padding: 5px 0;
        display: flex;
        height: 55px;
        justify-content: space-between;
    }
    .bottom{
      flex:1
    }
}
</style>