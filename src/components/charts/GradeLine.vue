<template>
  <div class="GradeLine chart">
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'GradeLine',
  data () {
    return {
      myChart: {}
    }
  },
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.querySelector('.GradeLine'))
    this.myChart.setOption({
      title: {
        text: '度量衡得分趋势图'
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        data: ['April', 'May', 'June', 'July', 'August']
      },
      yAxis: {
        type: 'category',
        data: ['F', 'E', 'D', 'C', 'B', 'A', 'S', 'SS']
      },
      dataZoom: [
        {// 这个dataZoom组件，默认控制x轴。
          type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
          start: 10, // 左边在 10% 的位置。
          end: 60 // 右边在 60% 的位置。
        },
        { // 这个dataZoom组件，也控制x轴。
          type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
          start: 10, // 左边在 10% 的位置。
          end: 60 // 右边在 60% 的位置。
        }
      ],
      series: [{
        data: ['F', 'C', 'A', 'A', 'S'],
        type: 'line',
        symbol: 'triangle',
        symbolSize: 20,
        lineStyle: {
          normal: {
            color: '#92a1bd',
            width: 4,
            type: 'dashed'
          }
        },
        itemStyle: {
          normal: {
            borderWidth: 3,
            borderColor: 'yellow',
            color: 'blue'
          }
        },
        markLine: {
          silent: true,
          data: [{
            yAxis: 'D',
            lineStyle: {
              color: 'red'
            }
          }, {
            yAxis: 'A',
            lineStyle: {
              color: 'green'
            }
          }]
        }
      }]
    })
  }
}
</script>
