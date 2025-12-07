<template>
   <div class="l_t_chart">
    <div class="header">
        <div class="title">
            <div>实时游客统计</div>
            <img src="../images/dataScreen-title.png" alt="">
        </div>
        <div class="tip">
            可预约总量<span>9999999</span>人
        </div>
    </div>
    <div class="center">
      <div v-for="(item, index) in actualTotal.split('')" :key="index" class="center-item">
        {{ item }}
      </div>
      <div class="center-item">人</div>
    </div>
    <div class="bottom" ref="charts"></div>
   </div>
</template>
<script setup lang='ts'>
import { ref,onMounted } from 'vue';
import * as echarts from 'echarts'
import 'echarts-liquidfill'
const charts = ref()
const actualTotal = ref("216908");
onMounted(()=>{
    //获取echarts实例
    let mychart = echarts.init(charts.value)
    //设置配置项
    mychart.setOption({
        title: [
            {
            text: (0.5 * 100).toFixed(0) + "%",
            left: "49%",
            top: "35%",
            textAlign: "center",
            textStyle: {
                fontSize: "16",
                fontWeight: "normal",
                color: "#ffffff",
                align: "center",
                textBorderColor: "rgba(0, 0, 0, 0)",
                textShadowColor: "#000",
                textShadowBlur: 0,
                textShadowOffsetX: 0,
                textShadowOffsetY: 1
            }
            },
            {
            text: "预约量",
            left: "49%",
            top: "25%",
            textAlign: "center",
            textStyle: {
                fontSize: "15",
                fontWeight: "normal",
                color: "#ffffff",
                align: "center",
                textBorderColor: "rgba(0, 0, 0, 0)",
                textShadowColor: "#000",
                textShadowBlur: 0,
                textShadowOffsetX: 0,
                textShadowOffsetY: 1
            }
            }
        ],
        grid: {
            top: "0",
            left: "0px",
            right: "0px",
            bottom: "0",
            containLabel: true
        },
        polar: {
            radius: ["75%", "85%"],
            center: ["50%", "50%"]
        },
        angleAxis: {
            max: 120,
            clockwise: false,
            axisLine: {
            show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            },
            startAngle: 188
        },
        radiusAxis: {
            type: "category",
                show: true,
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        series: [
            {
            type: "liquidFill",
            radius: "70%",
            z: 2,
            center: ["50%", "50%"],
            data: [0.4, 0.4, 0.4],
            itemStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: "#35FAB6" },
                        { offset: 1, color: "rgba(40, 209, 247,0.3)" }
                    ],
                    global: false
                }
            },
            outline: {
                borderDistance: 0,
                itemStyle: {
                    borderWidth: 2,
                    borderColor: "#31d8d5",
                    shadowBlur: 20,
                    shadowColor: "#50c1a7"
                }
            },
            label: {
                show: false
            },
                backgroundStyle: {
                borderWidth: 1,
                    color: {
                        type: "radial",
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [
                            { offset: 0, color: "#0D2648" },
                            { offset: 0.8, color: "#0D2648" },
                            { offset: 1, color: "#228E7D" }
                        ],
                        global: false
                    }
                }
            },
            {
                type: "pie",
                radius: ["80%", "80%"],
                center: ["50%", "50%"],
                z: 1,
                label: { show: false },
                silent: true,
                itemStyle: {
                    borderWidth: 2,
                    borderType: [8, 10],
                    borderDashOffset: 15,
                    borderColor: "#31d8d5",
                    color: "#11144e",
                    borderCap: "round"
                },
                data: [100]
            },
            {
                type: "bar",
                data: [55],
                z: 10,
                coordinateSystem: "polar",
                roundCap: true,
                color: "#31d8d5"
            }
        ]
        })
})
</script>
<style scoped lang='scss'>
.l_t_chart{
    display: flex;
    flex-direction: column;
    flex: 1.2;
    color: #fff;
    font-size: 18px;
    background:url(../images/dataScreen-main-lt.png) no-repeat;
    background-size: 100% 100%;
    .header{
        padding: 5px 0;
        display: flex;
        height: 55px;
        justify-content: space-between;
        .tip{
            padding-right: 10px;
            align-content: flex-end;
            span{
                color: orange;
            }
        }
    }
    .center{
        display: flex;
        justify-content: center;
        padding-top: 10px;
        .center-item{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 52px;
            height: 50px;
            margin-right: 1px;
            font-size: 32px;
            color: #66ffff;
            background: url("../images/total.png") no-repeat;
            background-size: 100% 100%;
        }
    }
    .bottom{
        flex: 1;
    }
}
</style>