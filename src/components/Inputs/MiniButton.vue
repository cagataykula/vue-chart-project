<template>
  <div
    class="buttonWrapper"
    :class="active && 'active'"
  >
    <button class="button">
      <b-icon
        class="mr-2"
        v-if="icon"
        :icon="icon"
      ></b-icon>
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      required: false,
      type: String,
      default: ''
    },
    active: {
      required: false,
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.buttonWrapper {
  background-color: #fff;
  border-radius: 5px;
  color: #5b5b5b;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  -webkit-box-shadow: 20px 20px 71px -14px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: 20px 20px 71px -14px rgba(0, 0, 0, 0.71);
  box-shadow: 20px 20px 71px -14px rgba(0, 0, 0, 0.71);
  &:hover {
    transition: 0.2s ease-in-out;
  }
  &:active {
    color: #fff;
    background: #ee337c;
    transition: 0.15s ease-in-out;
  }
  &.active {
    color: #fff;
    background-color: #ee337c;
  -webkit-box-shadow: 0px 0px 34px -6px rgba(238, 51, 124, 0.67);
  -moz-box-shadow: 0px 0px 34px -6px rgba(238, 51, 124, 0.67);
  box-shadow: 0px 0px 34px -6px rgba(238, 51, 124, 0.67);
    &:hover {
      transition: 0.2s ease-in-out;
      background: #fff;
      color: #5b5b5b;
    }
    &:active {
      color: #fff;
      background: #ee337c;
      transition: 0.15s ease-in-out;
    }
  }
  .button {
    background: none;
    border: none;
    color: inherit;
    outline: none !important;
    height: 35px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    font-family: Avenir;
    font-weight: bold;
    &:active {
      background: inherit;
    }
  }
}
</style>
