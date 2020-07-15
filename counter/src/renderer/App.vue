<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'counter'
  }
</script>

<style>
  #app {
    height: 100vh;
    width: 100%;
  }
  *::-webkit-scrollbar {
    display: none;
  }
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  button{
    outline: none;
  }

</style>
