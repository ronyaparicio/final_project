import axios from  "axios";

export default {
    saveUser:(userData)=> {
        return axios.post("/api/routes", userData);
    }
};

// axios.get('/user?ID=12345')
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });


