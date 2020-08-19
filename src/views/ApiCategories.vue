<template>
  <div id="api-categories">
    <div>
      <h1>{{title}}</h1>
      <div v-if="categories != null" class="apis-view">
        <div v-for="category in categories" :key="category">
          <h2>
            <router-link :to="`/category/${category}`">
              {{ category }}
            </router-link>
          </h2>
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
      title: 'All categories',
      url_base: 'https://api.publicapis.org/categories',
      categories: null
    }   
  },
  methods: {
    fetchCategories () {
      fetch(`${this.url_base}`)
        .then(res => {
          return res.json();
        })
        .then(this.setResults)
        .catch(() => console.log("Can’t access response. Blocked by browser?"));
    },
    setResults (results) {
      this.categories = results;
    }
  },
  async created() {
    this.fetchCategories();
  }
}
</script>

<style scoped>
  @media (min-width: 768px) and (max-width: 1024px) {
    .apis-view {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    .apis-view div {
      width: 30%;
    }
  }
</style>