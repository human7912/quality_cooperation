<template>
  <div class="GaugeChart chart">
  </div>
</template>

<script>
// import axios from 'axios'
import echarts from 'echarts'
export default {
  name: 'Gauge',
  data () {
    return {
      myChart: {}
    }
  },
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.querySelector('.GaugeChart'))
    this.myChart.setOption({
      title: {
        text: '完成度仪表盘'
      },
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      // color: {
      //   type: 'radial',
      //   x: 0.5,
      //   y: 0.5,
      //   r: 0.5,
      //   colorStops: [{
      //     offset: 0, color: 'red' // 0% 处的颜色
      //   }, {
      //     offset: 1, color: 'blue' // 100% 处的颜色
      //   }],
      //   globalCoord: false // 缺省为 false
      // },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: '完成度指标',
          type: 'gauge',
          detail: {formatter: '{value}%'},
          data: [{value: 90, name: '完成率'}],
          axisLine: {
            lineStyle: {
              color: [[0.3, '#c23531'], [0.7, '#c3bf25'], [1, '#43c75e']]
            }
          }
        }
      ]
    })
  }
}
</script>
