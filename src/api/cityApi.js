import axios from "axios";


export const cityApi = axios.create({
    baseURL: 'http://localhost:3001/api/cities'
});

export const countryApi = axios.create({
    baseURL: 'http://localhost:3001/api/country'
});

export const itineraryApi = axios.create({
    baseURL: 'http://localhost:3001/api/itinerary'
});

export const peopleApi = axios.create({
    baseURL: 'http://localhost:3001/api/people'
});