<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card title="登入" align="center">
          <b-row>
            <b-col>
              <b-alert v-show="loginErrMsg" show variant="danger">
                {{ loginErrMsg }}
              </b-alert>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col>
              <b-form-input v-model="username" placeholder="請輸入帳號" />
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col>
              <b-form-input
                v-model="password"
                type="password"
                placeholder="請輸入密碼"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-button variant="success" @click="login">
                登入
              </b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { userLogin } from "~/components/firebase/userFunction"
export default {
  data() {
    return {
      username: "",
      password: "",
      loginErrMsg: ""
    }
  },
  methods: {
    userLoginSuccess(uid) {
      this.$store.dispatch("setLoginStatus", uid)
      this.$store.dispatch("setUsername", this.username)
      this.$store.dispatch("setShouldUpdateFavorite", true)
      this.$router.replace("/")
    },
    userLoginFail(msg) {
      this.loginErrMsg = msg
    },
    login() {
      if (!this.username || !this.password) {
        alert("請正確輸入帳號及密碼")
      } else {
        userLogin(
          this.username,
          this.password,
          this.userLoginSuccess,
          this.userLoginFail
        )
      }
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 200px;
  max-width: 300px;
}
</style>
