<template>
  <div id="nav-menu">
    <div class="fixed-top">
      <h1>{{ title }}</h1>
      <div class="nav-links">
        <router-link to="/">Home</router-link> 
        <router-link to="/apiCategories">API Categories</router-link>
        <router-link to="/random">Random Api</router-link>
      </div>
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
  .fixed-top {
    position: fixed;
    display: flex;
    flex-direction: row;
    background-color: #afc3da;
    width: 100%;
    top: 0;
    padding: 30px 15px;
  }

  #nav-menu {
    font-family: 'Roboto', sans-serif;
    display: flex;   
    justify-content: space-evenly;
    padding-top: 100px;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    flex: 2;
  }

  #nav-menu a {
    display: flex;
    flex-direction: row;
    align-self: center;
    flex: 1;
    font-size: 22px;
    color: #f5f4f4;
    text-decoration: none;
  }

  #nav-menu a:hover {
    color: #5e7088;
    transition: 0.4s;
  }

  .fixed-top h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 36px;
    display: flex;
    flex: 2;
    color: #474747;
    margin: 0;
  }

/* iPad version */
@media (min-width: 768px) and (max-width: 1024px) { 
  .fixed-top {
    flex-direction: column;
    height: 100px;
    padding: 0;
  }

  #nav-menu a {
    justify-content: center;
    font-size: 22px;
    padding: 5px;
  }

  .fixed-top h1 {
    justify-content: center;
    font-size: 34px;
  }
}

/* iPhone version */
@media (max-width: 767px) { 
  .fixed-top {
    flex-direction: column;
    padding: 0;
  }

  #nav-menu {
    padding-top: 80px;
  }

  #nav-menu a {
    font-size: 16px;
    flex-direction: column;
    padding: 5px 0;
  }

  .fixed-top h1{
    font-size: 30px;
    padding: 10px;
    align-self: center;
    margin-bottom: 5px;
  }
}
</style>