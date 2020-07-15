<template>
    <div class="container">
        <button @click="login">到登录页面</button>
    </div>
</template>

<script>
  export default {
    name: 'index',
    methods: {
      login () {
        console.log(`tologin。。。`)
        this.$electron.ipcRenderer.send('switchToLogin')
      }
    }
  }
</script>

<style scoped>

</style>
