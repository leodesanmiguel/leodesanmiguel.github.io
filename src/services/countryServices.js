import axios from "axios";

const countryQuieries = axios.create({
    baseURL: 'http://localhost:3001/api/country',
})

export const getAllCountry = async (queryParams='') =>{
    try {
        const response = await countryQuieries(queryParams);
        console.log(`
        💚 Estos son los P-A-I-S-E-S
            --> ${response.data.response} `);
        return response.data.response;

    } catch (error) {
        console.log(`💥💥 E R R O R ...
        ${error}`);
    }

}