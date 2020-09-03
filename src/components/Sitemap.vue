<template>
  <div id="sitemap">
    <h2>Sitemap</h2>
      <div 
        v-if="paths != null && paths.length"
      >
        <div 
          v-for="path in paths" 
          :key="path.path"
        >
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

    // Filter out the '*' path.
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

<style scoped>
  #sitemap {
    display: flex;
    flex-direction: column;
    height: 100vh;
 }

  h2 {
    color: #646464;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 30px;
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

  /* iPhone version */
  @media (max-width: 767px) {
    h2 {
      font-size: 26px;
    }
  }
</style>

