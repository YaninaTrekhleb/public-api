<template>
  <div class="home">
    <div class="header-banner"> 
      <h1>HEEELOOOO</h1>
    </div>
    <!-- <button v-on:click="fetchApis">RECIPES HERE</button>  -->
    <label>Sort by: </label>
    <select>
      <option 
        value="title" 
        :options="sortBy('API')"
      >
        Title (A-Z)
      </option>
      <option 
        value="description" 
        :options="sortBy('Description')"
      >
      Description(A-Z)
      </option>
    </select>
    <!-- <button v-on:click="sortBy('API')">Sort by title (A-Z)</button>
    <button v-on:click="sortBy('Description')">Sort by Description(A-Z)</button> -->
    <div v-if="apis != null" class="apisView">
      <div v-for="api in apis" v-bind:key="api.API">
        <h2>
          <router-link :to="`/api/${api.API}`">
            {{ api.API }}
          </router-link>
        </h2>
        <p>{{ api.Description }}</p>
        <p>{{ api.Link }}</p>
      </div>
    </div>    
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
    fetchApis () {
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
    this.fetchApis();
  }
}
</script>

<style>
  .apisView {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .header-banner {
    background-image: url('/src/images/background.jpg');
  }

  .apisView div {
    width: 50%;
  }
</style>