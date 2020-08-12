<template>
  <div id="nav-menu">
    <h1>{{ title }}</h1>
    <router-link to="/">Home</router-link> 
    <router-link v-bind:to="{ name: 'Breakfast' }">Breakfast</router-link>
    <router-link to="/lunch">Lunch</router-link>
    <router-link to="/dinner">Dinner</router-link>
    <router-link to="/random">Random recipe</router-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: 'nav-menu',
      title: 'Title Title'
    }
  }
}
</script>

<style scoped>
  #nav-menu {
    display: flex;   
    justify-content: space-around;
  }

  #nav-menu a {
    display: flex;
    flex-direction: row;
    align-self: center;
    flex: 1;

    font-size: 20px;
    color: rgb(236, 236, 236);
    text-decoration: none;
  }

  #nav-menu a:hover {
    color: rgb(173, 85, 85);
    transition: 0.4s;
  }

  h1 {
    display: flex;
    flex: 2;
    padding: 30px;
  }
</style>