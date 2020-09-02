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
      randomApi: null,
      apiDetails: null,
      similarApis: null
    }
  },
  methods: {
    fetchCategories() {
      fetchApi('categories')
        .then((response) => {
          this.categories = response;
        })
    },
    fetchLatestEntries(quantity = 10) {
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
    fetchRandomEntries() {
      fetchApi('random')
        .then((response) => {
          this.randomApi = response;
        })
    },
    fetchApiDetails(id, fetchSimilar = false, similarQuantity = 3) {
      fetchApi(`entries?title=${id}`)
        .then((response) => {
          this.apiDetails = response;
          if (fetchSimilar && response && response.entries && response.entries.length) {
            const categoryId = response.entries[0].Category;
            this.fetchSimilarApis(categoryId, similarQuantity);
          }
        })
    },
    fetchSimilarApis(categoryId, quantity = 3) {
      fetchApi(`entries?category=${categoryId}`)
        .then((response) => {
          if (response && response.entries && response.entries.length) {
            this.similarApis = response.entries.slice(0, quantity);
          }
        })
    }
  }
}