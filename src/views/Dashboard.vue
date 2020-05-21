<template>
  <p>TEST</p>
</template>

<script>

export default {
  async created () {
    await this.$store.dispatch('getTableData')
    await this.$store.dispatch('getChartData')
  }
}
</script>

<style>
.test {
  color: red;
}
</style>
