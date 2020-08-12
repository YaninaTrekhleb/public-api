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
  },
  // data () {
  //   return {
  //     message: 'Title title'
  //   }
  // }
}
</script>

<style scoped>
  body {
    margin: 0;
    background: rgb(138, 155, 199);
  }

  #app {
    background-color: rgb(177, 161, 161);
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    width: 100%;
  }

  h1 {
    color: rgb(86, 86, 138);
    background-color: lavender;
  }

</style>
