<template>
  <div class="app-container">
    <div class="auth-container">
      <h1 class="auth-title">Introduction</h1>
      <input type="text" class="input" v-model="formData.email" placeholder="E-Mail"/>
      <input type="password" class="input" v-model="formData.password" placeholder="Password"/>
      <div class="login-btn-group">
        <input type="button" class="login-btn" value="Login" @click="authUser('login')"/>
        <span class="btn-between">or</span>
        <input type="button" class="login-btn" value="Create Account" @click="authUser('register')"/>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';

export default {
  name: 'Auth',
  data() {
    return {
      formData: {
        email: '',
        password: '',
        mode: ''
      }
    }
  },
  methods:{
    authUser(mode) {
      console.log("Start auth")
      this.formData.mode = mode;
      console.log("FORM: ", this.formData)
      this.$store.commit('authorizeUser', this.formData)
      // this.$router.push('/')
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/Auth/Auth'
</style>