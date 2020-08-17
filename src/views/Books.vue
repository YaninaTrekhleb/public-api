<template>
  <div class="books">
    <h1>{{this.category}}</h1>
    <!-- <button v-on:click="fetchApis">RECIPES HERE</button>  -->
   <div v-if="apis != null">
    <div v-for="api in apis.entries" :key="api.API">
      <h2>{{ api.API }}</h2>
      <p>{{ api.Description }}</p>
      <p>{{ api.Link }}</p>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Books',
   data () {
    return {
      url_base: 'https://api.publicapis.org/entries',
      category: 'books',
      apis: null
    }
  },
  methods: {
    fetchApis () {
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
  },
  async created() {
    this.fetchApis();
  }
}
</script>