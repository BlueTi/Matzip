import axios from 'axios';

//baseURL 정의
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3030',
  withCredentials: true,
});

export default axiosInstance;
