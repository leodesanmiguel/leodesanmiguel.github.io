/* eslint-disable no-unused-vars */
import { urlApi } from "../../api/Api.js";
import { 
  setItineraries,
  starLoadingItinearies,
 } from '../slices'
export const getAllItineraries = (listItineraries) => {

  console.log('itinearrio pasados -->\n', listItineraries);
 
  const listItine = [{...listItineraries} ]

  return async (dispach, getState) => {
    console.log('preparando el array de objeto', listItine);

    dispach(starLoadingItinearies(true));

    const newIti =  listItine.map( async thisIti => {
      //console.log(`buscando .. ${thisIti}`);
      const  dataIti  = await urlApi.get(`/itinerary/search/${thisIti}`);
      //console.log(dataIti);
      return dataIti
    })

    if (!newIti){
      console.log('No hay itinerarios');
      return null
    }

    console.log(`\n----------------------\n`);
    console.log(`lista de itinerarios`);
    console.log(`\n----------------------\n`);
    console.log(newIti);

    dispach(
      setItineraries({
        data: newIti,
      })
    );
  };
};
