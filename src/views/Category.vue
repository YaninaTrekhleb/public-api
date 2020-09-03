<template>
  <div id="category-page">
    <div>
      <h2>{{this.category}}</h2>
      <div 
        v-if="categoryApis != null" 
        class="apis-view"
      >
        <div 
          v-for="api in categoryApis.entries" 
          :key="api.API"
        >
          <h3>
            <router-link :to="`/api/${api.API}`">
              {{ api.API }}
            </router-link>
          </h3>
          <p>{{ api.Description }}</p>
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
      category: this.$route.params.categoryId,
    }
  },
  created() {
    this.fetchCategoryEntries(this.category);
  }
}
</script>

<style>
  #category-page {
    display: flex;
    flex-direction: column;
  }

  h2 {
    color: #646464;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 30px;
    margin: 40 0 0 0;
  }
</style> 
