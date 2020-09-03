// Basic APIs link.
const apiBaseUrl = 'https://api.publicapis.org';

// A function that indicates the further path from the main API link (f.e. /category, /random).
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
    // Fetch APIs by category.
    fetchCategories() {
      fetchApi('categories')
        .then((response) => {
          this.categories = response;
        })
    },
    // Fetch latest 10 APIs at Home page.
    fetchLatestEntries(quantity = 10) {
      fetchApi('entries')
        .then((response) => {
          this.latestApis = response.entries.slice(0, quantity);
        })
    },
    // Fetch all APIs for selected category.
    fetchCategoryEntries(categoryId) {
      fetchApi(`entries?category=${categoryId}`)
        .then((response) => {
          this.categoryApis = response;
        })
    },
    // Fetch random API at Random API page.
    fetchRandomEntries() {
      fetchApi('random')
        .then((response) => {
          this.randomApi = response;
        })
    },
    // Fetch API by its Id. Also fetch several similar APIs if required.
    fetchApiDetails(id, fetchSimilar = false, similarQuantity = 3) {
      fetchApi(`entries?title=${id}`)
        .then((response) => {
          this.apiDetails = response;
          // Checking that there is all the data from the API, to avoid errors.
          if (fetchSimilar && response && response.entries && response.entries.length) {
            const categoryId = response.entries[0].Category;
            this.fetchSimilarApis(categoryId, similarQuantity);
          }
        })
    },
    // Fetch similar 3 pages from the same category.
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