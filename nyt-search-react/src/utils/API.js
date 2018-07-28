import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "d927051dc8dc4557b55310e520bc283c";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(search, begin_date, end_date) {
    return axios.get(`${BASEURL}q=${search}&begin_date=${begin_date}&end_date=${end_date}&api-key=${APIKEY}`);
  },

  displaySavedArticles: function() {
    return axios.get('/api/headlines/saved');
  },

  handleArticleSave: function (result) {

    console.log('THIS IS AXIOS RESULT: ' + result.headline.main)
    return (axios({
      method: 'post',
      url: '/api/headlines',
      data: {
        title: result.headline.main,
        pub_date: result.pub_date,
        link: result.web_url
      },
      timeout: 5000
    })    
    .then((response) => {
      console.log(response);
    })
  .catch((error) => {
      // Error
      if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('error.response.data: ' + error.response.data);
          console.log('error.response.status: ' + error.response.status);
          console.log('error.response.headers: ' + error.response.headers);
      } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('error.request :' + error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          console.log('error.message: ' + error.message);
      }
      console.log(error.config);
  })
    )},

    handleArticleDelete: function(id) {
      return axios.delete(`/api/headlines/${id}`);
    },
};