import { urlApi } from "../../api/cityApi";
import { setCountry, starLoadingCountry } from "../slices";

export const getCountry = () => {
    // dispach : es para el dispach de otra accion
    // getState: es para llamar el rootState (usuarios, autenticaciones)
  return async (dispach, getState) => {

    // llama a la funcion starLoadingCountry e inicia la carga
    dispach(starLoadingCountry(true));

    const {data} = await urlApi.get(`/Country`);

    console.log('**** ciudades en contradas\n', data.Country);

    // hace otro dispach para recargar las ciudades
     dispach(setCountry({ 
      data: data.Country, 
      capital: data.capital,
      continent: data.continent,
      countryName: data.countryName,
      flag: data.flag    ,
      cities: data.cities,
     })); 
  };
};


