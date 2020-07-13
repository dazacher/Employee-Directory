import axios from "axios";

// const BASEURL = "https://randomuser.me/api/?inc=id,picture,name,email,phone";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";
const BASEURL = "http://dummy.restapiexample.com/api/v1/employees";
// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    // return axios.get(BASEURL + query + APIKEY);
    return axios.get(BASEURL + query);
  }
};