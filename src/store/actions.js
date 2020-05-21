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
          store.commit('setChartData', data)
          resolve(data)
        })
    })
  }
}
