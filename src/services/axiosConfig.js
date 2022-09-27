import axios from 'axios';
const axiosConfig = axios.create({
    baseURL:'https://api.github.com/users/'
})
export default axiosConfig;