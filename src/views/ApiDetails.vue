<!-- On ApiDetails page is displayed one API with title and description.
API returns an array with just one element. To get it I use first element of array.-->

<template>
  <div id="api-details">
    <div 
      v-if="apiDetails != null && apiDetails.entries && apiDetails.entries.length" 
      class="apis-specific"
    >
      <h2>
        {{ apiDetails.entries[0].API }}
      </h2>
      <p>
        {{ apiDetails.entries[0].Description }}
      </p>
    <a :href="apiDetails.entries[0].Link">
        {{ apiDetails.entries[0].Link }}
      </a>
      <div class="see-more">
        <h3>You may also like</h3>
      </div>
      <div 
        v-if="similarApis != null" 
        class="similar-api-view"
      >
        <div 
          v-for="api in similarApis" 
          :key="api.API"
        >
          <h3>
            <router-link :to="`/api/${api.API}`">
              {{ api.API }}
            </router-link>
          </h3>
          <p>
            {{ api.Description }}
          </p>
          <a :href="apiDetails.entries[0].Link">
            {{ apiDetails.entries[0].Link }}
          </a>
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
  created() {
    this.fetchApiDetails(this.id, true);
  },
  // Watch function is called when user clicks on API link. 
  // It accept parameter 'to' which holds the next API.
  // Each time a new link is clicked, the function 'watch' is called to render data for the next API.
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

<style>
  #api-details {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 200px);
  }

  .apis-specific {
    display: flex;
    flex-direction: column;
  }

  .apis-specific h2 {
    color: #646464;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 30px;
    margin: 40px 0 0 0;
  } 

  .see-more h3 {
    color: #a9b8c9;
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
    padding: 5px 15px;
    font-weight: bold;
    box-shadow: 2px 2px 6px 4px #e4dcd2c2;
    margin: 10px 0;
    background-color: #f3ede67e;
  }

  .similar-api-view a {
    font-weight: 500;
    word-break: break-all;
  }

/* iPad version */
@media (min-width: 768px) and (max-width: 1024px) {
  .similar-api-view {
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin-bottom: 30px;
  }

  .similar-api-view div {
    width: 30%;
    padding: 10px 5px;
  }

  .apis-specific h2 {
    margin-bottom: 0;
  }

  .see-more h3 {
    margin-top: 80px;
  }

  .similar-api-view a {
    word-break: break-all;
  }
}

/* iPhone version */
@media (max-width: 767px) { 
  .apis-specific h2 {
    font-size: 26px;
  }
  .similar-api-view {
    flex-direction: column;
    align-items: center;
  }

  .similar-api-view div {
    width: 40%;
  }

  .similar-api-view a {
    word-break: break-all;
    padding: 5px;
  } 

  .see-more h3 {
    margin-top: 50px;
  }
}
</style>
