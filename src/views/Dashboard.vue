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
          <MiniButton icon="download" disabled>Download</MiniButton>
        </div>
        <div class="dataViewWrapper">
          <MiniButton
            class="miniButton"
            icon="text-center"
            disabled
          >Tree</MiniButton>
          <MiniButton
            class="miniButton"
            icon="map"
            disabled
          >Map</MiniButton>
          <MiniButton
            class="miniButton"
            icon="bar-chart-fill"
            :active="$route.name == 'drilldown'"
            @click.native="$router.push({name: 'drilldown'})"
          >Chart</MiniButton>
          <MiniButton
            class="miniButton"
            icon="table"
            :active="$route.name == 'table'"
            @click.native="$router.push({name: 'table'})"
          >Table</MiniButton>
          <MiniButton
            class="miniButton"
            icon="list-ul"
            disabled
          >List</MiniButton>
        </div>
      </b-row>
      <b-row class="contentBody">
        <keep-alive>
          <router-view class="mt-3 w-100"></router-view>
        </keep-alive>
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
  min-height: 100px;
  display: flex;
  align-items: center;
  .title {
    font-family: Avenir;
    font-size: 1.5em;
    font-weight: lighter;
    color: #fff;
    margin-left: 20px;
    margin-bottom: 0;
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
    @media (max-width: 521px) and (min-width: 375px) {
      justify-content: center;
      .downloadData {
        margin-bottom: 5px;
      }
    }
    @media (max-width: 375px) {
      flex-direction: column;
    }
    .dataViewWrapper {
      display: flex;
      justify-content: space-between;
      & .miniButton {
        margin-left: 5px;
      }
      @media (max-width: 375px) {
        flex-direction: column;
        .miniButton {
          margin-left: 0;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
