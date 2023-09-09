import axios from "axios";

// Permite crear una instancia de axios
export const urlApi = axios.create({
    baseURL: 'http://localhost:3001/api'
});
