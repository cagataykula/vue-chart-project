<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import highcharts from 'highcharts'
import { Chart } from 'highcharts-vue'
import drilldown from 'highcharts/modules/drilldown'

drilldown(highcharts)

export default {
  components: {
    highcharts: Chart
  },
  data () {
    return {
      chartOptions: {}
    }
  },
  created () {
    this.$store.dispatch('getChartData').then(() => {
      const { series, drilldown } = this.$store.getters.chart

      this.chartOptions = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Mock Data'
        },
        yAxis: {
          title: {
            text: ''
          }
        },
        series,
        drilldown
      }
    })
  }
}
</script>
