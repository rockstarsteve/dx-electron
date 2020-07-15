<template>
    <div id="wrapper" :style="{backgroundImage:`url(${imageUrl})`}">
    </div>
</template>

<script>
  export default {
    name: 'landing-page',
    data () {
      return {
        imageUrl: 'static/images/common/welcome.jpg'
      }
    }
  }
</script>

<style scoped>
    #wrapper {
        width: 100vw;
        height: 100vh;

        background-size: 100% 100%;
    }

</style>
