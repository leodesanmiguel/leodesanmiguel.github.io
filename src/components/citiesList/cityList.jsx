import { useEffect, useState } from "react";
import { getAllCities } from "../../services/cityServices";
import { City } from "../City/City";


export const CitiesList = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getAllCities()
      .then((data) => setCities(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">

      {cities ? (
        <>
          {cities.map((city, i) => {
            return (
              <>
             
                <City 
                  key={i}
                  id={city._id}
                  nameCity={city.nameCity} 
                  country={city.country.countryName} 
                  imageUrl={city.imageUrl}  />
       
              </>
            );
          })}
        </>
      ) : (
        <p>💥 No Matches‼ 💥</p>
      )}
    </div>
  );
};
