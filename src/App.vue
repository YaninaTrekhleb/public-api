<template>
  <div id="app">
    <NavMenu />
    <router-view /> 
  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue'

export default {
  name: 'App',
  components: {
    NavMenu
  }
}
</script>

<style scoped>
  body {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    width: 100%;
  }

  h1 {
    color: rgb(86, 86, 138);
    background-color: lavender;
  }

</style>
