import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'https://api.football-data.org/v2',
  headers: {
    'x-auth-token': `${process.env.REACT_APP_APIKEY}`,
    'content-type': 'application/json'
  }
});

export default axiosInstance;
