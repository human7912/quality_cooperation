<template>
  <div class="BarChart chart">
  </div>
</template>

<script>
import echarts from 'echarts'
import axios from 'axios'
export default {
  name: 'BarChart',
  created () {
  },
  data () {
    return {
      barData: [],
      hours: [],
      myChart: {}
    }
  },
  mounted () {
    this.myChart = echarts.init(document.querySelector('.BarChart'))
    this.myChart.setOption({
      title: {
        text: '成交量分时图'
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [],
        markLine: {
          silent: true,
          data: [{
            yAxis: '100',
            lineStyle: {
              color: 'red'
            }
          }]
        },
        type: 'bar',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#83bff6'},
                {offset: 0.5, color: '#188df0'},
                {offset: 1, color: '#188df0'}
              ]
            )
          },
          emphasis: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#2378f7'},
                {offset: 0.7, color: '#2378f7'},
                {offset: 1, color: '#83bff6'}
              ]
            )
          }
        }
      }]
    })
    axios.get('/api/front/tradeDataByHours').then((res) => {
      console.log(res.data)
      this.hours = res.data.hours
      this.barData = res.data.data
      this.myChart.setOption({
        xAxis: {
          type: 'category',
          data: this.hours
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.barData,
          type: 'bar'
        }]
      })
    })
    this.freshDate()
  },
  methods: {
    freshDate: function () {
      // setInterval属于window，使用前将this赋值给that
      let that = this
      setInterval(function () {
        axios.get('/api/front/tradeDataByHours').then((res) => {
          console.log(res.data)
          that.hours = res.data.hours
          that.barData = res.data.data
          that.myChart.setOption({
            xAxis: {
              type: 'category',
              data: that.hours
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: that.barData,
              type: 'bar'
            }]
          })
        })
      }, 60 * 60 * 1000)
    }
  }
}
</script>
