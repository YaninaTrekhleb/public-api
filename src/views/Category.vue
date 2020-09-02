<template>
  <div id="category-page">
    <div>
      <h1>{{this.category}}</h1>
      <div v-if="categoryApis != null" class="apis-view">
        <div v-for="api in categoryApis.entries" :key="api.API">
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
import { apiFetcherMixin } from '../mixins/apiFetcherMixin';

export default {
  name: 'CategoryPage',
  mixins: [apiFetcherMixin],
  data () {
    return {
      category: this.$route.params.categoryId,
    }
  },
  async created() {
    this.fetchCategoryEntries(this.category);
  }
}
</script>
