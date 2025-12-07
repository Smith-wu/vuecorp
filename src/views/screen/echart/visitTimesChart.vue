<template>
    <div class="r_t_chart">
        <div class="header">
            <div class="title">
                <div>年度游客量对比</div>
                <img src="../images/dataScreen-title.png" alt="">
            </div>
        </div>
        <div class="bottom" ref="chart"></div>
    </div>
</template>
<script setup lang='ts'>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue';
const chart = ref()
onMounted(() => {
    let mycharts = echarts.init(chart.value)
    mycharts.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            textStyle:{
                color:'#fff'
            },
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine:{
                    show:false
                }
            }
        ],
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            }
        ]
    })
})

</script>
<style scoped lang='scss'>
.r_t_chart {
    display: flex;
    flex-direction: column;
    flex: 1.2;
    color: #fff;
    font-size: 18px;
    background: url(../images/dataScreen-main-lt.png) no-repeat;
    background-size: 100% 100%;
    margin-top: 15px;

    .header {
        display: flex;
        height: 55px;
    }

    .bottom {
        flex: 1
    }
}
</style>