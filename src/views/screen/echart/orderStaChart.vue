<template>
    <div class="r_t_chart">
        <div class="header">
            <div class="title">
                <div>预约渠道数据统计</div>
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
    let mychart = echarts.init(chart.value)
    mychart.setOption({
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            data: [
                'Direct',
                'Marketing',
                'Search Engine',
                'Email'
            ],
            textStyle:{
                color:'#fff'
            }
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                selectedMode: 'single',
                center:['50%','60%'],
                radius: [0, '30%'],
                label: {
                    position: 'inner',
                    fontSize: 14
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1548, name: 'Search Engine' },
                    { value: 775, name: 'Direct' },
                    { value: 679, name: 'Marketing', selected: true }
                ]
            },
            {
                name: 'Access From',
                type: 'pie',
                center:['50%','60%'],
                radius: ['45%', '60%'],
                labelLine: {
                    length: 30
                },
                label: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#F6F8FC',
                    borderColor: '#8C8D8E',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        a: {
                            color: '#6E7079',
                            lineHeight: 22,
                            align: 'center'
                        },
                        hr: {
                            borderColor: '#8C8D8E',
                            width: '100%',
                            borderWidth: 1,
                            height: 0
                        },
                        b: {
                            color: '#4C5058',
                            fontSize: 14,
                            fontWeight: 'bold',
                            lineHeight: 33
                        },
                        per: {
                            color: '#fff',
                            backgroundColor: '#4C5058',
                            padding: [3, 4],
                            borderRadius: 4
                        }
                    }
                },
                data: [
                    { value: 1048, name: 'Baidu' },
                    { value: 335, name: 'Direct' },
                    { value: 310, name: 'Email' },
                    { value: 251, name: 'Google' },
                ]
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
        flex: 1;
    }
}
</style>