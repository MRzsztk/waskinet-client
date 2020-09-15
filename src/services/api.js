import axios from "axios";

const api = axios.create({
    baseURL: 'https://waskinet-server.herokuapp.com/'
});

export default api;