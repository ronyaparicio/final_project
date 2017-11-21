import axios from  "axios";


const SEARCHURL = `https://api.themoviedb.org/3/search/movie?api_key=dfc918e89334423f004fdc14fda75e92&query=zoolander`;

export default {
    saveUser:(userData)=> {
         axios.post("/api/authRoutes/register", userData)
            .then((res)=> {
                console.log(res);
                let data = res.data;
                if (data && data.token) {
                    document.cookie = 'movieListUser='+data.token+'; Path=/;'
                    localStorage.setItem('movieListUserId', data.id + '');
                }
            })
    },
    login: (userData)=> {
       return axios.post("/api/authRoutes/login", userData);

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

    },

    topAction: function(query) {
        return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=dfc918e89334423f004fdc14fda75e92&sort_by=popularity.desc&with_genres=28`);
    }
};




