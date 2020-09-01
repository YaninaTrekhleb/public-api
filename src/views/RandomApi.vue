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
      this.apis = results;
    }
  },
  async created() {
    this.fetchApis();
  }
}
</script>

<style scoped>
  .random-api {
    flex: 1;
  }

  .random-api h1 {
    color: #646464;
  }
  .another-random-btn {
    margin-top: 70px;
  }

  .another-random-btn button {
    color: #505f72;
    background: #f3ede67e;
    border-radius: 6px;
    border: 1px solid #c9c8c7e7;
    box-shadow: 2px 2px 6px 4px #d8d7d6e7;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 15px;
    margin-bottom: 250px;
}

/* iPad version */
@media (min-width: 768px) and (max-width: 1024px) {
  .another-random-btn button {
    margin-bottom: 465px;
  }
}

/* iPhone version */
@media (max-width: 767px) { 
  .random-api h1 {
    font-size: 26px;
  }
  .another-random-btn button { 
    margin-bottom: 200px;
    font-size: 14px;
  }
}
</style>