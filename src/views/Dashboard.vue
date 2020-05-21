<template>
  <p>TEST</p>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['getTableData', 'getChartData'])
  },
  async created () {
    await this.getTableData()
    await this.getChartData()
  }
}
</script>

<style>
.test {
  color: red;
}
</style>
