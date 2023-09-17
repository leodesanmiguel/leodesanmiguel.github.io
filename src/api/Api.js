import axios from "axios";

// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_API_URL;

// Permite crear una instancia de axios
export const urlApi = axios.create({
    baseURL: apiUrl
});