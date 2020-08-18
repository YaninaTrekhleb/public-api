<template>
  <div class="random-api">
    <h1>{{ title }}</h1>
   <div v-if="apis != null" class="random-api-view">
      <div v-for="api in apis.entries" :key="api.API">
        <h2>
          <router-link :to="`/api/${api.API}`">
            {{ api.API }}
          </router-link>
        </h2>
        <p>{{ api.Description }}</p>
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
      title: 'Get some random API',
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

<style scoped>
  .random-api h1 {
  }

  .random-api-view h2 {
    color: #587474;
  }

  .another-random-btn {
    margin-top: 70px;
  }

  .another-random-btn button {
    color: #516d6d;
    background: #f3ede67e;
    border-radius: 6px;
    border: 1px solid #e4dcd2c2;
    box-shadow: 2px 2px 6px 4px #e4dcd2c2;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 15px;
    margin: 0.5rem 0.25rem;
}
</style>