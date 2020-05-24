<template>
  <div class="buttonWrapper">
    <button class="button">
      <slot />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.buttonWrapper {
  background-color: #fff;
  border: 1px solid #ee337c;
  border-radius: 5px;
  color: #ee337c;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  -webkit-box-shadow: 0px 0px 34px -6px rgba(238, 51, 124, 0.67);
  -moz-box-shadow: 0px 0px 34px -6px rgba(238, 51, 124, 0.67);
  box-shadow: 0px 0px 34px -6px rgba(238, 51, 124, 0.67);
  &:hover {
    -webkit-box-shadow: 0px 0px 34px 0px rgba(238, 51, 124, 0.8);
    -moz-box-shadow: 0px 0px 34px 0px rgba(238, 51, 124, 0.8);
    box-shadow: 0px 0px 34px 0px rgba(238, 51, 124, 0.8);
    transition: 0.2s ease-in-out;
  }
  &:active {
    color: #fff;
    background: #ee337c;
    transition: 0.15s ease-in-out;
  }
  .button {
    background: none;
    border: none;
    color: inherit;
    outline: none !important;
    height: 45px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    padding-left: 30px;
    padding-right: 30px;
    font-family: Avenir;
    font-weight: normal;
    &:active {
      background: inherit;
    }
  }
}
</style>
