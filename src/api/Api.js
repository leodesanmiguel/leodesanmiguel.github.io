import axios from "axios";


// const apiUrl = process.env.REACT_APP_API_URL;
// const apiUrl = process.env.URL_API_CITY || 'http://localhost:3001/api';
// const apiUrl =  'http://localhost:3001/api';
const apiUrl =  'https://my-tinerary-mern-2023.onrender.com/api';
 
// Permite crear una instancia de axios
export const urlApi = axios.create({
    baseURL: apiUrl
});