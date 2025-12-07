<template>
   <div class="l_b_chart">
    <div class="header">
        <div class="title">
            <div>年龄比例</div>
            <img src="../images/dataScreen-title.png" alt="">
        </div>
    </div>
    <div class="bottom" ref="chart">

    </div>
   </div>
</template>
<script setup lang='ts'>
import * as echarts from 'echarts'
import { ref,onMounted } from 'vue';
const chart = ref()
onMounted(()=>{
    let mycharts = echarts.init(chart.value)
    mycharts.setOption({
        title:{
            text: '本日总数', // 主标题
            left: '32%', 
            top: 'center', // 垂直居中
            textStyle:{
                color:'#fff',
                fontSize:'16px',
                fontWeight:'normal'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: 'middle',
            right:'28',
            orient:'vertical',
            textStyle:{
                color:'#fff'
            },
            itemGap:15
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            center: ['40%', '50%'], // 饼图圆心位置（与标题对齐）
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            padAngle: 5,
            itemStyle: {
                borderRadius: 10,
            },
            label: {
                show: false,
                position: 'center'
            },
            // emphasis: {
                // label: {
                //     show: true,
                //     fontSize: 40,
                //     fontWeight: 'bold'
                // }
            // },
            labelLine: {
                show: false
            },
            data: [
                    { value: 10, name: '10岁以下' },
                    { value: 12, name: '10-18岁' },
                    { value: 28, name: '18-30岁' },
                    { value: 26, name: '30-40岁' },
                    { value: 20, name: '40-60岁' },
                    { value: 4, name: '60岁以上' }
                ]
            }
        ]
        })
})
</script>
<style scoped lang='scss'>
.l_b_chart{
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: 15px;
    color: #fff;
    font-size: 18px;
    background:url(../images/dataScreen-main-lt.png) no-repeat;
    background-size: 100% 100%;
    .header{
        display: flex;
        height: 55px;
        justify-content: space-between;
    }
    .bottom{
        flex:1
    }
}
</style>