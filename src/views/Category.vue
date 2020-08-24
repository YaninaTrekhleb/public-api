<template>
  <div id="category-page">
    <div>
      <h1>{{this.category}}</h1>
      <div v-if="apis != null" class="apis-view">
        <div v-for="api in apis.entries" :key="api.API">
          <h2>
            <router-link :to="`/api/${api.API}`">
              {{ api.API }}
            </router-link>
          </h2>
          <p>{{ api.Description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',
  data () {
    return {
      url_base: 'https://api.publicapis.org/entries',
      category: this.$route.params.categoryId,
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
      this.apis = results;
    }
  },
  async created() {
    this.fetchApis();
  }
}
</script>
