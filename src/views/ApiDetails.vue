<template>
  <div id="api-details">
    <div v-if="apis != null && apis.entries && apis.entries.length" class="apisView">
      <h1> {{ apis.entries[0].API }} </h1>
      <p> {{ apis.entries[0].Description }} </p>
      <a :href="apis.entries[0].Link"> {{ apis.entries[0].Link }}</a>

      <h2>You may also like</h2>
      <div v-if="similarApis != null" class="similarApisView">
        <div v-for="api in similarApis" v-bind:key="api.API">
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
  </div>
</template>

<script>
export default {
  name: 'ApiDetails',
  data () {
    return {
      url_base: 'https://api.publicapis.org/entries',
      category: '',
      apis: null,
      similarApis: null,
      id: this.$route.params.apiId
    }
  },
  methods: {
    fetchApis () {
      fetch(`${this.url_base}?title=${this.id}`)
        .then(res => {
          return res.json();
        })
        .then(this.setResults)
        .catch(() => console.log("Can’t access response. Blocked by browser?"));
    },
    fetchSimilarApis (categoryId) {
      console.log(`${this.url_base}?category=${categoryId}`)
      fetch(`${this.url_base}?category=${categoryId}`)
        .then(res => {
          return res.json();
        })
        .then(this.setSimilarResults)
        .catch((error) => console.log("Can’t access response. Blocked by browser?", error));
    },
    setResults (results) {
      this.apis = results;
      if (results && results.entries && results.entries.length) {
        const categoryId = results.entries[0].Category;
        this.fetchSimilarApis(categoryId);
      }
      // console.log(this.apis.entries[0].Description);
    },
    setSimilarResults (results) {
      if (results && results.entries && results.entries.length) {
        this.similarApis = results.entries.slice(0, 3);
      } 
    }
  },
  async created() {
    this.fetchApis();
  }
}
</script>

<style scoped>

</style>
