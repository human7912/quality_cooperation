<template>
  <div class="RadarChart chart">
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'Radar',
  data () {
    return {
      myChart: {}
    }
  },
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.querySelector('.RadarChart'), 'shine')
    this.myChart.setOption({
      title: {
        text: '基础雷达图'
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      legend: {
        data: ['项目实际', '基准中位数']
      },
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          {name: '需求', max: 6500},
          {name: '研发', max: 16000},
          {name: '测试', max: 30000},
          {name: '发布', max: 38000},
          {name: '客服', max: 52000}
        ]
      },
      series: [{
        name: '基准雷达',
        type: 'radar',
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000],
            name: '项目实际'
          },
          {
            value: [5000, 14000, 28000, 31000, 42000],
            name: '基准中位数'
          }
        ]
      }]
    })
  }
}
</script>
