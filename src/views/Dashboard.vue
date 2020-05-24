<template>
  <div class="dashboardPage pt-5">
    <div class="optionsWrapper mt-2 mb-2">
      <b-container>
        <b-row>
          <div class="selectWrapper">
            <span class="selectTitle">
              Date
            </span>
            <span class="selectBox">01-31 Jun 2018</span>
          </div>
          <div class="selectWrapper">
            <span class="selectTitle">
              Project
            </span>
            <span class="selectBox">All</span>

          </div>
          <div class="selectWrapper">
            <span class="selectTitle">
              Channel
            </span>
            <span class="selectBox">All</span>

          </div>
        </b-row>
      </b-container>

    </div>
    <div class="titleWrapper">
      <b-container>
        <h1 class="title">Competitor Comparative Product Availability</h1>

      </b-container>
    </div>
    <b-container class="content">
      <b-row class="contentHeader">
        <div class="downloadData">
          <MiniButton icon="download">Download</MiniButton>
        </div>
        <div class="dataViewWrapper">
          <MiniButton
            class="ml-2"
            icon="text-center"
          >Tree</MiniButton>
          <MiniButton
            class="ml-2"
            icon="map"
          >Map</MiniButton>
          <MiniButton
            class="ml-2"
            icon="bar-chart-fill"
            @click.native="$router.push({name: 'drilldown'})"
          >Chart</MiniButton>
          <MiniButton
            class="ml-2"
            icon="table"
            @click.native="$router.push({name: 'table'})"
          >Table</MiniButton>
          <MiniButton
            class="ml-2"
            icon="list-ul"
          >List</MiniButton>
        </div>
      </b-row>
      <b-row class="contentBody">
        <router-view class="mt-3 w-100"></router-view>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MiniButton from '../components/Inputs/MiniButton'

export default {
  components: {
    MiniButton
  }
}
</script>

<style lang="scss" scoped>
.dashboardPage {
  background-image: url("../assets/images/bg-dashboard.jpg");
  background-size: cover;
  background-position: 50% 50%;
  background-attachment: fixed;
  min-height: 100%;
}

.titleWrapper {
  width: 100%;
  background-color: #00000088;
  height: 100px;
  display: flex;
  align-items: center;
  .title {
    font-family: Avenir;
    font-size: 40px;
    font-weight: lighter;
    color: #fff;
    margin-left: 20px;
  }
}

.optionsWrapper {
  font-family: Avenir;
  .selectWrapper {
    margin-left: 5px;
    margin-right: 5px;
    .selectTitle {
      color: #fff;
    }
    .selectBox {
      background-color: #00000088;
      padding: 7px;
      border-radius: 5px;
      font-size: 14px;
      color: #fff;
      height: 50px;
    }
  }
}

.content {
  background-color: rgba(255, 255, 255, 0.651);
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;
  .contentHeader {
    display: flex;
    justify-content: space-between;
    .dataViewWrapper {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
