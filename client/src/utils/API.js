import axios from  "axios";

export default {
    saveUser:(userData)=> {
         axios.post("/api/authRoutes/register", userData)
            .then((res)=> {
                if (res && res.token) {
                    document.cookie = 'movieListUser='+res.token+'; Path=/;'
                    localStorage.setItem('movieListUserId', res.id + '');
                }
            })
    },
    exampleRequest: (movieData)=> {
        let movieToken = document.cookie.split("movieListUser=")[1]
        let headers = {headers: {"Authorization": movieToken}}
        axios.post("/api/movie", movieData, headers)
            
    }
};

// axios.get('/user?ID=12345')
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });


