import axios from "axios";

axios.defaults.withCredentials = true;

let server = null

server = axios.create({
    baseURL : import.meta.env.VITE_API_URL
    // baseURL : 'https://api.supermetricsplatform.com'
})


export default server;