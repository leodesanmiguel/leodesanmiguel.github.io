/* eslint-disable no-unused-vars */
import { urlApi } from "../../api/Api.js";
import { 
  setItineraries,
  starLoadingItinearies
 } from '../slices'
export const getAllItineraries = (listItineraries) => {
  console.log('itinearrio pasados -->\n', listItineraries);
  return async (dispach, getState) => {

    dispach(starLoadingItinearies(true));

    const newIti = await listItineraries.map( thisIti => {
      const  dataIti  =  urlApi.get(`/itinearies/pack/${thisIti}`);

    })

    // hace otro dispach para recargar todas las ciudades encontradas
    dispach(
      setItineraries({
        data: newIti,
      })
    );
  };
};
