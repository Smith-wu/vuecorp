<template>
    <div class="r_t_chart">
        <div class="header">
            <div class="title">
                <div>热门景区排行</div>
                <img src="../images/dataScreen-title.png" alt="">
            </div>
        </div>
        <!-- <div class="echarts-header">
        <span>排名</span>
        <span>景区</span>
        <span>预约数量</span>
    </div> -->
        <div class="bottom" ref="chart">

        </div>
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
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        legend: {
            textStyle:{
                color:'#fff'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            splitLine:{
               show:false
            }
        },
        yAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        series: [
            {
                name: 'Direct',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: 'Mail Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Affiliate Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
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

    .header {
        display: flex;
        height: 55px;
    }

    .echarts-header {
        box-sizing: border-box;
        display: flex;
        height: 36px;
        margin: 10px 10px 0;
        line-height: 36px;
        background: url("../images/rankingChart-bg.png") no-repeat;
        background-size: 100% 100%;

        span {
            width: 18%;
            margin-left: 4px;
            font-size: 14px;
            font-weight: bold;
            color: #fdbc52;
            text-align: center;

            &:nth-child(2) {
                margin-left: 4px;
            }

            &:last-child {
                width: 20%;
                margin-left: 60px;
            }
        }
    }

    .bottom {
        flex: 1;
    }
}
</style>