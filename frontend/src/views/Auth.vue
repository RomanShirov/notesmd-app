<template>
  <div class="app-container">
    <div class="auth-container">
      <h1 class="auth-title">Introduction</h1>
      <input type="text" class="input" v-model="formData.username" placeholder="Username"/>
      <input type="password" class="input" @keyup.enter="authUser('login')" v-model="formData.password"
             placeholder="Password"/>
      <div class="login-btn-group">
        <input type="button" class="login-btn" value="Login" @keyup.enter="authUser('login')"
               @click="authUser('login')"/>
        <span class="btn-between">or</span>
        <input type="button" class="login-btn" value="Create Account" @keyup.enter="authUser('register')"
               @click="authUser('register')"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Auth',
  data() {
    return {
      formData: {
        username: '',
        password: '',
        mode: '',
      },
    };
  },
  methods: {
    authUser(mode) {
      this.formData.mode = mode;
      this.$store.commit('authorizeUser', this.formData);
    },
  },
};
</script>

<style lang="sass" scoped>
@import '@/styles/Auth/Auth'
</style>