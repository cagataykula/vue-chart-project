<template>
  <div
    class="tableWrapper"
    v-if="isDataLoaded"
  >
    <vs-table
      max-items="10"
      pagination
      :data="this.$store.getters.table.rows"
    >
      <template slot="thead">
        <vs-th
          v-for="title in this.$store.getters.table.headers"
          :key="title"
          class="th"
          :sort-key="getDataKey(title)"
        >
          {{title}}
        </vs-th>
      </template>
      <template slot-scope="{data}">
        <vs-tr
          :key="i"
          v-for="(tr, i) in data"
        >
          <vs-td class="rowText" :data="data[i].salesPointNumber">
            {{data[i].salesPointNumber}}
          </vs-td>

          <vs-td class="rowText" :data="data[i].city">
            {{data[i].city}}
          </vs-td>

          <vs-td class="rowText" :data="data[i].salesPointName">
            {{data[i].salesPointName}}
          </vs-td>

          <vs-td class="rowText" :data="data[i].researchGroupName">
            {{data[i].researchGroupName}}
          </vs-td>

          <vs-td class="rowText" :data="data[i].productName">
            {{data[i].productName}}
          </vs-td>

          <vs-td class="rowText" :data="data[i].availability">
            {{data[i].availability}}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getTableData').then(() => {
      this.isDataLoaded = true
    })
  },
  data () {
    return {
      isDataLoaded: false
    }
  },
  methods: {
    getDataKey (headerName) {
      switch (headerName) {
        case 'SalesPoint Number':
          return 'salesPointNumber'
        case 'City':
          return 'city'
        case 'SalesPoint Name':
          return 'salesPointName'
        case 'ResearchGroupName':
          return 'researchGroupName'
        case 'Product':
          return 'productName'
        case 'Availability':
          return 'availability'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tableWrapper {
  font-family: Avenir;
}
.th {
  height: 60px;
  background-color: #efefef;
  border: 2px solid #fff;
  color: #5b5b5b;
}

.rowText {
  color: #8d8d8d;
}
</style>
