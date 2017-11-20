import axios from  "axios";


const SEARCHURL = `https://api.themoviedb.org/3/search/movie?api_key=dfc918e89334423f004fdc14fda75e92&query=zoolander`;

export default {
    saveUser:(userData)=> {
         axios.post("/api/authRoutes/register", userData)
    },
    login: (userData)=> {
        axios.post("/api/authRoutes/login", userData);
    },
    exampleRequest: (movieData)=> {
        let movieToken = document.cookie.split("movieListUser=")[1]
        let headers = {headers: {"Authorization": movieToken}}
        axios.post("/api/movie", movieData, headers)
    },
    moviedetails: function(query) {
      return axios.get(SEARCHURL);
    },

    topMovies: function(query) {
        return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=dfc918e89334423f004fdc14fda75e92&sort_by=popularity.desc&page=1`);
    }
};


