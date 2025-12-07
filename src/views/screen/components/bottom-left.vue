<template>
   <div class="left_box">
      <visit-sta-chart></visit-sta-chart>
      <humen-chart></humen-chart>
      <age-chart></age-chart>
   </div>
</template>
<script setup lang='ts'>
import ageChart from '../echart/ageChart.vue';
import visitStaChart from '../echart/visitStaChart.vue';
import humenChart from '../echart/humenChart.vue';

</script>
<style scoped lang='scss'>
.left_box{
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 100%;
   padding: 20px 0px 20px 30px;
}
</style>