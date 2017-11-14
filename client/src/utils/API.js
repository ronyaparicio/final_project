import axios from  "axios";

export default {
    saveUser:(userData)=> {
        return axios.post("/api/users", userData);
    }
};