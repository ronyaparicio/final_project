import axios from  "axios";

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
            
    }
};

// axios.get('/user?ID=12345')
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });


