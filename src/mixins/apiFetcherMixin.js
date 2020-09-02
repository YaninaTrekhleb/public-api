const apiBaseUrl = 'https://api.publicapis.org';

const fetchApi = (apiPath) => {
  return fetch(`${apiBaseUrl}/${apiPath}`)
    .then(response => {
      return response.json();
    })
    .catch((error) => console.error('Something went wrong. Can\'t fetch the data', error));
};

export const apiFetcherMixin = {
  data() {
    return {
      categories: null,
      latestApis: null,
      categoryApis: null,
      randomApi: null
    }
  },
  methods: {
    fetchCategories () {
      fetchApi('categories')
        .then((response) => {
          this.categories = response;
        })
    },
    fetchLatestEntries (quantity = 10) {
      fetchApi('entries')
        .then((response) => {
          this.latestApis = response.entries.slice(0, quantity);
        })
    },
    fetchCategoryEntries(categoryId) {
      fetchApi(`entries?category=${categoryId}`)
        .then((response) => {
          this.categoryApis = response;
        })
    },
    fetchRandomEntries () {
      fetchApi('random')
        .then((response) => {
          this.randomApi = response;
        })
    }
  }
}