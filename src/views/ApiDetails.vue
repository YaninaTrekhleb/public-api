<template>
  <div id="api-details">
    <div v-if="apiDetails != null && apiDetails.entries && apiDetails.entries.length" class="apis-specific">
      <h1>{{ apiDetails.entries[0].API }}</h1>
      <p>{{ apiDetails.entries[0].Description }}</p>
      <a :href="apiDetails.entries[0].Link">{{ apiDetails.entries[0].Link }}</a>
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
        <a :href="apiDetails.entries[0].Link">{{ apiDetails.entries[0].Link }}</a>
        </div>
      </div> 
    </div> 
  </div>
</template>

<script>
import { apiFetcherMixin } from '../mixins/apiFetcherMixin';

export default {
  name: 'ApiDetails',
  mixins: [apiFetcherMixin],
  data () {
    return {
      id: this.$route.params.apiId
    }
  },
  async created() {
    this.fetchApiDetails(this.id, true);
  },
  watch: {
    '$route' (to) {
      if (to && to.params && to.params.apiId) {
        this.id = to.params.apiId;
        this.fetchApiDetails(this.id, true);
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
