<template>
   <div class="l_c_chart">
    <div class="header">
        <div class="title">
            <div>男女比例</div>
            <img src="../images/dataScreen-title.png" alt="">
        </div>
    </div>
    <div class="center">
        <div class="man">
            <div class="man-title">男士</div>
            <div class="man-avatar"></div>
        </div>
        <div class="woman">
            <div class="woman-title">女士</div>
            <div class="woman-avatar"></div>
        </div>
    </div>
    <div class="rate">
        <div>
            <span>男士60%</span>
            <span>女士40%</span>
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
        xAxis:{
            show:false,
            min:0,
            max:100
        },
        yAxis:{
            type:'category',
            show:false
        },
        series:[{
            type:'bar',
            data:[60],
            barWidth:20,
            itemStyle:{
                borderRadius:10
            }
        },{
            type:'bar',
            data:[100],
            barWidth:20,
            barGap:'-100%',
            z:1,
            itemStyle:{
                color:'hotpink',
                borderRadius:10
            }
        }],
        grid:{
            // top:0,
            left:60,
            right:60
        }
    })
})
</script>
<style scoped lang='scss'>
.l_c_chart{
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
    .center{
        flex:1.3;
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 14px;
        align-items: flex-end;
        .man{
            height: 80%;
            width: 40%;
            background:url(../images/man-bg.png) no-repeat;
            background:cover;
            background-position:center;
            display: flex;
            justify-content: center;
            flex-direction: column;
            .man-title{
                display: flex;
                justify-content: center;
            }
            .man-avatar{
                flex: 1;
                background: url(../images/man.png) no-repeat;
                background:cover;
                background-position:center;
            }
        }
        .woman{
            height: 80%;
            width: 40%;
            background:url(../images/woman-bg.png) no-repeat;
            background-position:center;
            display: flex;
            justify-content: center;
            flex-direction: column;
            .woman-title{
                display: flex;
                justify-content: center;
            }
            .woman-avatar{
                flex: 1;
                background: url(../images/woman.png) no-repeat;
                background:cover;
                background-position:center;
            }
        }
    }
    .rate{
        width: 100%;
        height: 1em;
        font-size: 14px;
        display: flex;
        justify-content: center;
        position: relative;
        top: 22px;
        div{
            display: flex;
            width: calc(100% - 140px);
            justify-content: space-between;
        }
    }
    .bottom{
        flex:0.8;
    }
}
</style>