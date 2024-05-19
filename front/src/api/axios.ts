import axios from 'axios';

//baseURL 정의
import {Platform} from 'react-native';

const axiosInstance = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'http://172.30.1.23:3030'
      : 'http://172.30.1.23:3030',

  withCredentials: true,
});

export default axiosInstance;
