<template>
  <div class="random-api">
    <h1>Random</h1>
   <div v-if="apis != null">
      <div v-for="api in apis.entries" :key="api.API">
        <h2>{{ api.API }}</h2>
        <p>{{ api.Description }}</p>
        <p>{{ api.Link }}</p>
      </div>
    </div>
    <div class="another-random-btn">
      <button v-on:click="fetchApis">Choose another API</button> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'RandomApi',
  data () {
    return {
      url_base: 'https://api.publicapis.org/random',
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
      this.apis = results;
    }
  },
  async created() {
    this.fetchApis();
  }
}
</script>