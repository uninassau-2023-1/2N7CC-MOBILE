import axios from "axios";

const api =  axios.create({
    baseURL: "http://10.86.32.44:8000/api/"
})

export default api;