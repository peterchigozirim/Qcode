import axios from "axios";


axios.defaults.withCredentials = true;
axios.defaults.baseurl = 'http://127.0.0.1:8000'

axios.get('/sanctum/csrf-cookie').then(response => {
    // Login...
});

// const axiosClient = axios.create({
//     baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
// })