<template>
  <div id="app">
    <NavMenu />
    <router-view /> 
    <Category />
    <Footer />
  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavMenu,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

  body {
    margin: 0;
  }

  #app {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    width: 100%;
  }

  h1 {
    color: #516d6d;
  }

</style>
