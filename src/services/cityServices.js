import axios from "axios";

const citiesQuieries = (query) => {
  axios.get(`http://localhost:3001/api/cities/${query}`).then((res) => {
    const cities = res.data.cities;
    console.log(`cantidad de ciudades: ${cities[1].nameCity}`);
    return cities;
  });
};

export const getAllCities = (queryParams = '') => {
  try {
    const response = {... citiesQuieries(queryParams)};
    console.log(`💚 Bieeen obtuviste las ciudades\n ${response[1].nameCity}`);
    return response;
  } catch (error) {
    console.log(`💥💥 E R R O R ...
        ${error}`);
  }
};
