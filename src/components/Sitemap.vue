<template>
  <div id="sitemap">
    <h2>Sitemap</h2>
    <div v-if="paths != null && paths.length">
      <div v-for="path in paths" v-bind:key="path">
        <ul class="sitemap-list">
          <li> 
            <router-link :to="path.path">
             {{ path.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sitemap',
  data () {
    return {
      paths: null
    }
  },
  created () {
    const routesList = getRoutesList(this.$router.options.routes, '');
    this.paths = routesList;
  }
}

function getRoutesList(routes, pre) {
  return routes.reduce((array, route) => {
    const path = `${pre}${route.path}`;
    const routeInfo = {
      path: path,
      name: route.name
    }

    if (route.path !== '*') {
      array.push(routeInfo);
    }

    if (route.children) {
      array.push(...getRoutesList(route.children, `${path}/`));
    }

    return array;
  }, []);
}
</script>

<style>
  h2 {
    color: #c79072;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 36px;
    margin-bottom: 50px;
  }
  
  .sitemap-list {
    display: flex;
    justify-content: stretch;
    margin-left: 100px;
  }

 .sitemap-list li {
   color: #b7cdcc;
   list-style-type: square;
  }
</style>

