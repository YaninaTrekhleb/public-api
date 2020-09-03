<!-- On this page you can find all API categories. 
By clicking on the name of a category, you navigate to a page 
with all available APIs on this topic.-->

<template>
  <div id="api-categories">
    <div>
      <h2>{{title}}</h2>
      <div 
        v-if="categories != null" 
        class="apis-view"
      >
        <div 
          v-for="category in categories" 
          :key="category"
        >
          <h3>
            <router-link :to="`/category/${category}`">
              {{ category }}
            </router-link>
          </h3>
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
  created() {
    this.fetchCategories();
  }
}
</script>

<style>
  #api-categories {
    flex: 1;
    height: 300vh;
  }

  #api-categories h2 {
    color: #646464;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 30px;
  }

/* iPad version */
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
  #api-categories h2 {
    font-size: 22px;
  }
  
  .apis-view {
    flex: 1;
  }

  .apis-view div {
    width: 40%;
  }

  #api-categories h3 {
    font-size: 16px;
  }
}
</style>