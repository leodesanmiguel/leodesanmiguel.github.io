import { urlApi } from "../../api/cityApi";
import { setCities, starLoadingCities } from "../slices";

export const getAllCities = (page = 0) => {
  // dispach : es para el dispach de otra accion
  // getState: es para llamar el rootState (usuarios, autenticaciones)
  return async (dispach, getState) => {
    // llama a la funcion starLoadingCities e inicia la carga
    dispach(starLoadingCities(true));

    const { data } = await urlApi.get(`/cities`);

    // hace otro dispach para recargar todas las ciudades encontradas
    dispach(
      setCities({
        data: data.cities,
        page: page + 1,
        counter: data.cities.length,
      })
    );
  };
};
