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
import { apiFetcherMixin } from '../mixins/apiFetcherMixin';

export default {
  name: 'CategoryPage',
  mixins: [apiFetcherMixin],
  data () {
    return {
      title: 'All categories'
    }   
  },
  async created() {
    this.fetchCategories();
  }
}
</script>

<style scoped>
  #api-categories h1 {
    color: #646464;
  }

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

  /* iPhone version */
  @media (max-width: 767px) {
    #api-categories h1 {
      font-size: 26px;
    }
    
    .apis-view div {
      width: 50%;
    }

    #api-categories h2 {
      font-size: 16px;
    }
  }
</style>