<template>
  <b-container class="loginPage" fluid>
    <b-container>
      <img id="logo" src="@/assets/images/logo.png" alt="rem inStore" />
      <b-row class="content">
        <b-col>
          <h2 id="welcomeText">
            Welcome to
            <br />
            <u>rem</u>inStore
            <br />BI tool
          </h2>
        </b-col>
      </b-row>
      <b-row class="inputWrapper">
        <b-col class="p-2" sm="12" md="6">
          <TextInput>Email</TextInput>
        </b-col>
        <b-col class="p-2" sm="12" md="6">
          <TextInput password>Password</TextInput>
          <b-row class="forgotAndLoginWrapper">
              <span class="forgotText">Forgot Password</span>
              <Button @click.native="$router.push({name: 'Dashboard'})">Test</Button>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import TextInput from '../components/Inputs/TextInput'
import Button from '../components/Inputs/Button'

export default {
  components: { TextInput, Button }
}
</script>

<style lang="scss" scoped>
.loginPage {
  background-image: url("../assets/images/bg-login.jpg");
  background-size: cover;
  background-position: 50% 50%;
  background-attachment: fixed;
  min-height: 100%;
}

#logo {
  width: 90px;
  height: 90px;
}

#welcomeText {
  font-size: 40px;
  font-family: Avenir;
  font-weight: lighter;
}

.content {
  margin-top: 50px;
}

.inputWrapper {
  margin-top: 50px;
  max-width: 650px;
}

.forgotAndLoginWrapper {
    margin-top: 20px;
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
    justify-content: flex-end;
    .forgotText {
        font-size: 14px;
        font-family: Avenir;
        font-weight: lighter;
        color: #818181;
        cursor: pointer;
        margin-right: 20px;
    }
}
</style>
