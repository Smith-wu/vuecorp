<template>
   <div class="home-container">
      <el-card style="max-width: 480px">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
      </div>
    </template>
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    <template #footer>Footer content</template>
  </el-card>
  <el-card style="max-width: 480px">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
      </div>
    </template>
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    <template #footer>Footer content</template>
  </el-card>
   </div>
</template>
<script setup lang='ts'>
</script>
<style scoped lang='scss'>
.home-container{
   min-width: 1200px;
   padding: 10px;
   min-height: calc(100vh - 55px);
   background-color: #f6f7f8;
}
</style>