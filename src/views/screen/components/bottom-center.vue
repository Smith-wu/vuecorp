<template>
   <div class="center-box">
      <mapChart></mapChart>
      <visitiTrendChart></visitiTrendChart>
   </div>
</template>
<script setup lang='ts'>
import mapChart from '../echart/mapChart.vue';
import visitiTrendChart from '../echart/visitiTrendChart.vue';
</script>
<style scoped lang='scss'>
.center-box{
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 100%;
   padding: 20px 0px 20px 30px;
}
</style>