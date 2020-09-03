<!-- Random API page render a random API from random categories.-->

<template>
  <div class="random-api">
    <h2>{{ title }}</h2>
    <div 
      v-if="randomApi != null" 
      class="random-api-view"
    >
      <div 
        v-for="api in randomApi.entries" 
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
      </div>
    </div>
    <div class="another-random-btn">
      <button v-on:click="fetchRandomEntries">
        Choose another API
      </button> 
    </div>
  </div>
</template>

<script>
import { apiFetcherMixin } from '../mixins/apiFetcherMixin';

export default {
  name: 'RandomApi',
  mixins: [apiFetcherMixin],
  data () {
    return {
      title: 'Get some random API'
    }
  },
  created() {
    this.fetchRandomEntries();
  }
}
</script>

<style>
  .random-api {
    flex: 1;
    min-height: calc(100vh - 200px);
  }

  .random-api h2 {
    color: #646464;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 40px;
  }
  .another-random-btn {
    margin-top: 70px;
  }

  .another-random-btn button {
    color: #505f72;
    background: #f3ede67e;
    border-radius: 6px;
    border: 1px solid #c9c8c7e7;
    box-shadow: 2px 2px 6px 4px #d8d7d6e7;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 15px;
    margin-bottom: 250px;
}

/* iPad version */
@media (min-width: 768px) and (max-width: 1024px) {
  .another-random-btn button {
    margin-bottom: 465px;
  }
}

/* iPhone version */
@media (max-width: 767px) { 
  .random-api h2 {
    font-size: 22px;
  }
  .another-random-btn button { 
    margin-bottom: 200px;
    font-size: 14px;
  }
}
</style>