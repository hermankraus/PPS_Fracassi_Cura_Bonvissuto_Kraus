import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:44307/api', // aca va donde levanta el back en su local. (en un futuro ira el link del deploy)
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;