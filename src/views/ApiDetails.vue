<template>
  <div id="api-details">
    <div v-if="apis != null && apis.entries && apis.entries.length" class="apis-specific">
      <h1>{{ apis.entries[0].API }}</h1>
      <p>{{ apis.entries[0].Description }}</p>
      <a :href="apis.entries[0].Link">{{ apis.entries[0].Link }}</a>
      <div class="see-more">
        <h2>You may also like</h2>
      </div>
      <div v-if="similarApis != null" class="similar-api-view">
        <div v-for="api in similarApis" v-bind:key="api.API">
        <h2>
          <router-link :to="`/api/${api.API}`">
            {{ api.API }}
          </router-link>
        </h2>
        <p>{{ api.Description }}</p>
        <a :href="apis.entries[0].Link">{{ apis.entries[0].Link }}</a>
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
    },
    setSimilarResults (results) {
      if (results && results.entries && results.entries.length) {
        this.similarApis = results.entries.slice(0, 3);
      } 
    }
  },
  async created() {
    this.fetchApis();
  },
  watch: {
    '$route' (to) {
      if (to && to.params && to.params.apiId) {
        this.id = to.params.apiId;
        console.log(to.params.apiId);
        this.fetchApis();
      }
    }
  }
}
</script>

<style scoped>
  /* #api-details {
    color: #704c4c;
  } */

  .apis-specific {
    display: flex;
    flex-direction: column;
  }

  /* .apis-specific h1 {
    color: #516d6d;
  }  */

  .see-more h2 {
    font-size: 24px;
    margin-top: 120px;
    margin-bottom: 10px;
  }

  .similar-api-view {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .similar-api-view div {
    width: 20%;
    border: 1px solid #e4dcd2c2;
    padding: 5px;
    font-weight: bold;
    box-shadow: 2px 2px 6px 4px #e4dcd2c2;
    margin: 10px 0;
    background-color: #f3ede67e;
  }

  .similar-api-view a {
    font-weight: 500;
  }

/* iPad version */
@media (min-width: 768px) and (max-width: 1024px) {
  .similar-api-view {
    flex-direction: row;
    align-items: center;
  }

  .similar-api-view div {
    width: 25%;
    padding: 10px 5px;
  }

  .apis-specific h1 {
    margin-bottom: 0;
  }

  .see-more h2 {
    margin-top: 80px;
  }

  .similar-api-view a {
    word-break: break-all;
  }
}

/* iPhone version */
@media (max-width: 767px) { 

  .apis-specific h1 {
    font-size: 26px;
  }
  .similar-api-view {
    flex-direction: column;
    align-items: center;
  }

  .similar-api-view div {
    width: 60%;
  }

  .similar-api-view a {
    word-break: break-all;
    padding: 5px;
  } 

  .see-more h2 {
    margin-top: 50px;
  }
}
</style>
