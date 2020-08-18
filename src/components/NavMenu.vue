<template>
  <div id="nav-menu">
    <div class="fixed-top">
      <h1>{{ title }}</h1>
      <router-link to="/">Home</router-link> 
      <router-link to="/category">Category</router-link>
      <router-link to="/category/food">Food</router-link>
      <router-link to="/category/animals">Animals</router-link>
      <router-link to="/category/books">Books</router-link>
      <router-link to="/random">Random Api</router-link>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      name: 'NavMenu',
      title: 'Public API'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

  .fixed-top {
    position: fixed;
    display: flex;
    flex-direction: row;
    background-color: #b7cdcc;
    width: 100%;
    top: 0;
  }

  #nav-menu {
    font-family: 'Roboto', sans-serif;
    display: flex;   
    justify-content: space-around;
    padding-top: 150px;
  }

  #nav-menu a {
    display: flex;
    flex-direction: row;
    align-self: center;
    flex: 1;

    font-size: 26px;
    color: #faf6f1;
    text-decoration: none;
  }

  #nav-menu a:hover {
    color: #4b6665;
    transition: 0.4s;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 40px;
    display: flex;
    color: #516d6d;
    flex: 2;
    padding: 20px;
  }
</style>