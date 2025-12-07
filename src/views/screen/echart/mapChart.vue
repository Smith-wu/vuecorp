<template>
   <div class="c_t_chart" ref="mapChart">

   </div>
</template>
<script setup lang='ts'>
import { ref,onMounted } from 'vue';
import * as echarts from 'echarts'
import chinaJson from './map.json'
const mapChart = ref()
echarts.registerMap('china',chinaJson as any)
onMounted(()=>{
   var chart = echarts.init(mapChart.value);
    chart.setOption({
        geo: [{
            map: 'china',
            zoom:1.3,
            top:160,
            label:{
               show:true,
               color:'#fff'
            },
            itemStyle:{
               areaColor:'#409EFF'
            },
            emphasis:{
               itemStyle:{
                  areaColor:'#402EFF'
               },
               label:{
                  color:'#fff'
               }
            }
        }],
    });
})
</script>
<style scoped lang='scss'>
.c_t_chart{
   display: flex;
   align-items: center;
   justify-content: center;
   flex: 3;
}
</style>