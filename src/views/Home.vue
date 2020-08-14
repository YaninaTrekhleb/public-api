<template>
  <div class="home">
    <!-- <button v-on:click="fetchRecipes">RECIPES HERE</button>  -->
    <button v-on:click="sortBy('API')">Sort by title (A-Z)</button>
    <button v-on:click="sortBy('Description')">Sort by Description(A-Z)</button>
    <div v-if="apis != null" class="apisView">
      <div v-for="api in apis" v-bind:key="api.API">
        <h2>{{ api.API }}</h2>
        <p>{{ api.Description }}</p>
        <p>{{ api.Link }}</p>
      </div>
    </div>
    <!-- <ol v-if="apis != null">
      <li v-for="api in apis" :key="api.API">
        {{ api.API }} ||
        {{ api.Description }} ||
        {{ api.Link }}
      </li>
    </ol>  -->
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      url_base: 'https://api.publicapis.org/entries',
      category: '',
      apis: null
    }
  },
  methods: {
    fetchRecipes () {
      fetch(`${this.url_base}`)
        .then(res => {
          return res.json();
        })
        .then(this.setResults)
        .catch(() => console.log("Can’t access response. Blocked by browser?"));
    },
    setResults (results) {
      // console.log(results.entries[0].Description)
      this.apis = results.entries.slice(0,10);
    },
    sortBy (prop) {
      this.apis.sort((a,b) => a[prop] < b[prop] ? -1 : 1);
    }
  },
  async created() {
    this.fetchRecipes();
  }
}
</script>

<style>
  .apisView {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .apisView div {
    width: 50%;
  }
</style>