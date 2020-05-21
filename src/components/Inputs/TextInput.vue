<template>
  <div class="textInputWrapper">
    <input
      :type="password ? 'password' : 'text'"
      class="form-control textInput"
      :value="value"
      @input="updateSelf()"
      ref="input"
      required
      :name="name"
      :disabled="disabled"
      placeholder="Please enter your value"
    />
    <span class="inputTitle">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: false,
      type: String,
      default: ''
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    name: {
      required: false,
      type: String,
      default: ''
    },
    password: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateSelf () {
      this.$emit('input', this.$refs.input.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.textInputWrapper {
  position: relative;
  border-radius: 10px;
  height: 75px;
  width: 100%;
  overflow: hidden;
  -webkit-box-shadow: 10px 10px 31px -17px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 31px -17px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 31px -17px rgba(0, 0, 0, 0.75);

  input {
    box-shadow: none !important;
    outline: none;
    height: 100%;
    border: 0;
    padding-top: 20px;
    padding-left: 15px;
    font-family: Avenir;
    font-size: 17px;
  }

  .inputTitle {
    position: absolute;
    top: 0;
    margin-top: 15px;
    margin-left: 15px;
    font-family: Avenir;
    font-weight: normal;
    font-size: 13px;
    color: #a0a0a0;
  }
}
</style>
