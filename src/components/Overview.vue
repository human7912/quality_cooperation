<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 ">
      <h1 class="h2">Dashboard</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          Select Project
        </button>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-sm">
        <thead>
        <tr>
          <th>测试负责人</th>
          <th>开发负责人</th>
          <th>产品负责人</th>
          <th>运维负责人</th>
          <th>客服负责人</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Abby</td>
          <td>Bob</td>
          <td>Chris</td>
          <td>David</td>
          <td>Emily</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="row" style="margin-bottom: 15px">
      <div class="col-lg-6">
        <div class="content-panel">
          <div class="panel-body text-center">
            <radar-chart></radar-chart>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="content-panel">
          <div class="panel-body text-center">
            <gauge-chart></gauge-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-bottom: 15px">
      <div class="col-lg-12">
        <div class="content-panel">
          <div class="panel-body text-center">
            <gl-chart></gl-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-bottom: 15px">
      <div class="col-lg-12">
        <div class="content-panel">
          <div class="panel-body text-center">
            <bar-chart></bar-chart>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Radar from './charts/Radar.vue'
import Guage from './charts/Gauge.vue'
import GradeLine from './charts/GradeLine.vue'
import BarChart from './charts/Bar.vue'

export default {
  name: 'Overview',
  components: {
    'radar-chart': Radar,
    'gauge-chart': Guage,
    'gl-chart': GradeLine,
    'bar-chart': BarChart
  }
}
</script>
