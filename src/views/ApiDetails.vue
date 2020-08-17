<template>
  <div id="api-details">
    <div v-if="apis != null && apis.entries && apis.entries.length" class="apisView">
      <h1> {{ apis.entries[0].API }} </h1>
      <p> {{ apis.entries[0].Description }} </p>
      <a :href="apis.entries[0].Link"> {{ apis.entries[0].Link }}</a>
      <!-- <h2>
        <router-link :to="`/api/${apis.entries[0].api}`">
          {{ api.API }}
        </router-link>
      </h2>
      <p>{{ api.Description }}</p>
      <p>{{ api.Link }}</p> -->
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
    setResults (results) {
      this.apis = results;
      console.log(this.apis.entries[0].Description);
    }
  },
  async created() {
    this.fetchApis();
  }
}
</script>

<style scoped>

</style>
