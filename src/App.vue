<template>
  <div id="app">
    <NavMenu />
    <router-view />  
    <button v-on:click="fetchRecipes">RECIPES HERE</button> 
    <ul v-if="apis != null">
      <li v-for="api in apis.entries" :key="api.API">
        {{ api.API }} ||
        {{ api.Description }} ||
        {{ api.Link }}
      </li>
    </ul>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue'

export default {
  name: 'App',
  components: {
    NavMenu,
  },
  data () {
    return {
      url_base: 'https://api.publicapis.org/entries',
      category: 'animals',
      apis: null
    }
  },

  methods: {
    fetchRecipes () {
      fetch(`${this.url_base}?category=${this.category}`)
        .then(res => {
          return res.json();
        })
        .then(this.setResults)
        .catch(() => console.log("Can’t access response. Blocked by browser?"));
    },
    setResults (results) {
      // console.log(results.entries[0].Description)
      this.apis = results;
    }
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
