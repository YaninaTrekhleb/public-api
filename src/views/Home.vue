<!-- At home page prints out the last 10 APIs. -->
<template>
  <div class="home">
    <div class="header-banner"> 
      <div class="home-banner"></div>
      <h2>{{ title }}</h2>
    </div>
    <div class="sorting">
      <label for="sorting">
        Sort by: 
      </label>
      <select v-model="sortingKey">
        <option value="API">
          Title (A-Z)
        </option>
        <option value="Description">
          Description (A-Z)
        </option>
      </select>
    </div>
    <div 
      v-if="sortedApis != null" 
      class="apis-view"
    >
      <div 
        v-for="api in sortedApis"
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
  </div>
</template>

<script>
import { apiFetcherMixin } from '../mixins/apiFetcherMixin';

export default {
  name: 'Home',
  mixins: [apiFetcherMixin],
  data () {
    return {
      title: 'Get latest free APIs',
      sortingKey: 'API'
    }
  },
  computed: {
    sortedApis: function() {
      const compare = (a, b) => {
        if (a[this.sortingKey] < b[this.sortingKey])
          return -1;
        if (a[this.sortingKey] > b[this.sortingKey])
          return 1;
        return 0;
      }
      if (!this.latestApis) {
        return this.latestApis;
      }
      return [...this.latestApis].sort(compare);
    }
  },
  created() {
    this.fetchLatestEntries();
  }
}
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 200px);
  }

  .home-banner {
    height: 250px;
    width: 100%;
    background-image: url('../images/background-img.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .home-banner img {
    margin: 0;
    padding: 0;
  }

  .header-banner h2 {
    color: #646464;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 40px;
  }

  .apis-view {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    padding: 10px;
    margin-bottom: 30px;
  }
 
  .apis-view div {
    width: 20%;
    margin: 10px;
    border: 1px solid #c9c8c7e7;
    border-radius: 10px;
    font-weight: bold;
    box-shadow: 2px 2px 6px 4px #d8d7d6e7;
    background-color: #eddcd450;
  }

  .apis-view h3 {
    color: #a9b8c9;
    font-weight: 500;
    font-size: 22px;
    word-wrap: break-word;
  }

  p {
    font-size: 16px;
    color: #767879;
    font-weight: 400;
    margin: 2px;
    word-wrap: break-word;
  }

  a:link {
    text-decoration: none;
    color: #505f72;
    font-weight: 500;
  }

  a:visited {
    color: #a9b8c9;
  }

  a:hover {
   color: #6e819a;
  }

  .sorting {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .sorting label {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    padding-right: 10px;
  }

  .sorting select {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding-right: 10px;
    border: 1px #808080 solid;
  }

/* iPad version */
@media (min-width: 768px) and (max-width: 1024px) {
  .home-banner {
    height: 200px;
  }

  .apis-view div {
    flex-direction: row;
  }
}

/* iPhone version */
@media (max-width: 767px) { 
  .home {
    margin-bottom: 30px;
  }

  .home-banner {
    height: 150px;
  }

  .header-banner h2 {
    font-size: 24px;
    padding: 20px;
    margin: 0;
  }

  .apis-view {
    flex-direction: row;
  }

  .apis-view div {
    width: 40%;
    padding: 5px;
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }
}
</style>