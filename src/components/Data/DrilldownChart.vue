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
      chartOptions: {
        chart: {
          type: 'column'
        },
        title: {
          text: 'TEST'
        },
        accessibility: {
          announceNewData: {
            enabled: true
          }
        },
        xAxis: {
          type: 'category',
          title: {
            text: 'Products'
          }
        },
        yAxis: {
          title: {
            text: 'Average'
          }
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: '{point.y:.1f}'
            }
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat:
            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
        },
        series: [
          {
            name: 'Products',
            colorByPoint: true,
            data: []
          }
        ],
        drilldown: {
          series: []
        }
      }
    }
  },
  created () {
    this.$store.dispatch('getTableData')
    this.$store.dispatch('getChartData').then(() => {
      const chart = this.$store.getters.chart
      this.chartOptions.series = chart.series
      this.chartOptions.drilldown = chart.drilldown
    })
  }
}
</script>
