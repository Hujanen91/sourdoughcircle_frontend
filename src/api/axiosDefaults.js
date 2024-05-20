import axios from 'axios';

axios.defaults.baseURL = 'https://sourdoughcircle-api-382dc0f20c45.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();