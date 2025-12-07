<template>
    <svg :style="svgStyle">
      <use :xlink:href="prefix+name" :fill="color"></use>
    </svg>
</template>

<script setup lang="ts">
defineProps({
    prefix:{
        type:String,
        default:'#icon-',
    },
    name:{
        type:String,
        required:true,
    },
    color:{
        type:String,
    },
    svgStyle:{
        type:Object,
        default:{
            width:'30px',
            height:'30px'
        }
    }
})
</script>

<style scoped>

</style>