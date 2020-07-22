import axios from 'axios';
const baseURL = process.env.REACT_APP_API_BASEURL;

const API = axios.create({ baseURL });

export default API;
