import _ from 'lodash'
const baseURL = `http://${window.location.host}`

export default {
  getTableData (store) {
    return new Promise(function (resolve, reject) {
      fetch(`${baseURL}/mockData/table.json`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => {
          const { data } = res
          store.commit('setTableData', data)
          resolve(data)
        })
    })
  },
  getChartData (store) {
    return new Promise(function (resolve, reject) {
      fetch(`${baseURL}/mockData/drilldown-column-chart.json`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => {
          const { data } = res
          const series = [
            {
              name: 'Products',
              colorByPoint: true,
              data: []
            }
          ]

          const drilldown = {
            series: []
          }

          data.forEach(item => {
            const average = _.meanBy(item.data, (j) => j[1])
            item.y = average
            item.drilldown = item.id

            series[0].data.push({
              drilldown: item.drilldown,
              name: item.name,
              y: average
            })

            drilldown.series.push({
              data: item.data,
              id: item.id,
              name: item.name
            })
          })

          store.commit('setChartData', { series, drilldown })
          resolve({ series, drilldown })
        })
    })
  }
}
