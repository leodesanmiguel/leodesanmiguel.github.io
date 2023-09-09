import { urlApi } from "../../api/Api.js";

export const getAllItineraries = (id) => {
  return async (dispach, getState) => {

    dispach(starLoadingItinearies(true));

    const { data } = await urlApi.get(`/itinerary/${id}`);

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
