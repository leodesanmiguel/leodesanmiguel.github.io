import axios from "axios";

export const  getAllCities2 = async () => {
  try {
    const response = await  axios.get(`http://localhost:3001/api/cities`);
    return response.data.cities;
  } catch (error) {
    console.log(`💥💥 E R R O R ...
        ${error}`);
  }
};

export const  getOneCities2 = async (id) => {
  try {
    const response = await  axios.get(`http://localhost:3001/api/cities/${id}`);
    return response.data.city;
  } catch (error) {
    console.log(`💥💥 E R R O R ...
        ${error}`);
  }
};