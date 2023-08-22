
import { getAllCities } from "../../services/cityServices";
import { City } from "../City/City";

export const CitiesList = () => {
  return (
    <>
      {getAllCities ? (
        <div className="container">
          {console.log(`citi list: \n ${getAllCities()}`)}
          <div className="">
            {getAllCities.map((city, i) => {
              return (
                <City
                  key={i}
                  id={city._id}
                  name={city.name}
                  imageUrl={city.imageUrl}
                  country={city.country.countryName}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <p>💥 No Matches‼ 💥</p>
      )}
    </>
  );
};
