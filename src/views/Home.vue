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
    <div v-if="apis != null" class="apis-view">
      <div v-for="api in apis" v-bind:key="api.API">
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
export default {
  name: 'Home',
  data () {
    return {
      title: 'Get latest free APIs',
      sortingKey: 'API',
      url_base: 'https://api.publicapis.org/entries',
      category: '',
      apis: null
    }
  },
  methods: {
    fetchApis () {
      fetch(`${this.url_base}`)
        .then(res => {
          return res.json();
        })
        .then(this.setResults)
        .catch(() => console.log("Can’t access response. Blocked by browser?"));
    },
    setResults (results) {
      this.apis = results.entries.slice(0, 10);
    },
    sortBy (prop) {
      this.apis.sort((a,b) => a[prop] < b[prop] ? -1 : 1);
    },
    onSortChange(event) {
      this.sortBy(event.target.value);
    },
  },
  async created() {
    this.fetchApis();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

  .home-banner {
    height: 300px;
    width: 100%;
    background-image: url('../images/background-img.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .home-banner img {
    margin: 0;
    padding: 0;
  }

  h1 {
    color: #c79072;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 36px;
    margin-bottom: 50px;
  }

  .apis-view {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-items: center;
    padding: 30px;
  }
 
  .apis-view div {
    width: 40%;
    border: 1px solid #e4dcd2c2;
    border-radius: 8px;
    padding: 16px;
    font-weight: bold;
    box-shadow: 2px 2px 6px 4px #e4dcd2c2;
    margin: 30px;
    background-color: #f3ede67e;
  }

  h2 {
    font-weight: 500;
    font-size: 28px;
  }

  p {
    font-size: 22px;
    color: #686767;
    font-weight: 400;
  }

  a:link {
    text-decoration: none;
    color: #516d6d;
  }

  a:visited {
    color: #587474;
  }

  a:hover {
   color: #c79072;
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
  .apis-view {
    flex-direction: column;
    align-items: center;
  }
}

/* iPhone version */
@media (max-width: 812px) { 
  h1 {
    font-size: 30px;
    padding: 20px;
    margin: 0;
  }

 .apis-view {
    flex-direction: column;
    align-items: center;
  }

   .apis-view div {
    width: 80%;
    padding: 10px;
  }

   h2 {
    font-size: 22px;
  }

  p {
    font-size: 18px;
  }
}
</style>