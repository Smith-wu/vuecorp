<template>
   <div class="right-box">
      <hotSpotChart></hotSpotChart>
      <visitTimesChart></visitTimesChart>
      <orderStaChart></orderStaChart>
   </div>
</template>
<script setup lang='ts'>
import hotSpotChart from '../echart/hotSpotChart.vue';
import visitTimesChart from '../echart/visitTimesChart.vue';
import orderStaChart from '../echart/orderStaChart.vue';
</script>
<style scoped lang='scss'>
.right-box{
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 100%;
   padding: 20px 0px 20px 30px;
}
</style>