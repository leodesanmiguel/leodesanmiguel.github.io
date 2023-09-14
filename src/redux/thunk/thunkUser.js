import { urlApi } from "../../api/Api.js";
import { setUser, starLoadingUser } from "../slices/index.js";

export const getUser = () => {
    // dispach : es para el dispach de otra accion
    // getState: es para llamar el rootState (usuarios, autenticaciones)
  return async (dispach, getState) => {

    // llama a la funcion starLoadingUser e inicia la carga
    dispach(starLoadingUser(true));

    const {data} = await urlApi.get(`/User`);

    console.log('**** ciudades en contradas\n', data.User);

    // hace otro dispach para recargar las ciudades
     dispach(setUser({ 
      data: data.User, 
      capital: data.capital,
      continent: data.continent,
      countryName: data.countryName,
      flag: data.flag    ,
      cities: data.cities,
     })); 
  };
};


