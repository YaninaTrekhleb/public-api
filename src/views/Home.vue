<template>
  <div class="home">
    <div class="header-banner"> 
      <div class="home-banner"></div>
      <h1>{{ title }}</h1>
    </div>
    <div class="sorting">
      <label>Sort by: </label>
      <select @change="onSortChange($event)" v-model="sortingKey">
        <option value="API">
          Title (A-Z)
        </option>
        <option value="Description">
          Description (A-Z)
        </option>
      </select>
    </div>
    <div v-if="latestApis != null" class="apis-view">
      <div v-for="api in latestApis" v-bind:key="api.API">
        <h2>
          <router-link :to="`/api/${api.API}`">
            {{ api.API }}
          </router-link>
        </h2>
        <p>{{ api.Description }}</p>
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
  methods: {
    sortBy (prop) {
      this.latestApis.sort((a,b) => a[prop] < b[prop] ? -1 : 1);
    },
    onSortChange(event) {
      this.sortBy(event.target.value);
    },
  },
  created() {
    this.fetchLatestEntries();
  }
}
</script>

<style>
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

  .header-banner h1 {
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

  h2 {
    color: #a9b8c9;
    font-weight: 500;
    font-size: 22px;
  }

  p {
    font-size: 16px;
    color: #767879;
    font-weight: 400;
    margin: 2px;
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
    /* flex-direction: column; */
    flex-direction: row;
    align-items: center;
  }
}

/* iPhone version */
@media (max-width: 767px) { 
  .home-banner {
    height: 150px;
  }

  .header-banner h1 {
    font-size: 24px;
    padding: 20px;
    margin: 0;
  }

 .apis-view {
    flex-direction: column;
    align-items: center;
  }

   .apis-view div {
    width: 70%;
    padding: 5px;
  }

   h2 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }
}
</style>