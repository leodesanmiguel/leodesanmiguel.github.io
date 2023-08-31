// import { useEffect, useState } from "react";
// import { getAllCities } from "../../services/cityServices";
import { useDispatch, useSelector } from "react-redux";
import { City } from "../City/City";
import { Typography } from "@material-tailwind/react";

export const CitiesList = () => {
  // const [cities, setCities] = useState([]);

  // useEffect(() => {
  //   getAllCities()
  //     .then((data) => setCities(data))
  //     .catch((error) => console.log(error));
  // }, []);

  const cities = useSelector((store) => store.cities.data);

  return (
    <>
      {cities ? (
        <div
          className=" w-full
        grid grid-cols-1 gap-2
        md:grid-cols-2 lg:grid-cols-3 
        "
        >
          {cities.map((city, i) => {
            return (
              <>
                <City
                  key={i}
                  id={city._id}
                  nameCity={city.nameCity}
                  country={city.country.countryName}
                  imageUrl={city.imageUrl}
                  description={city.description}
                />
              </>
            );
          })}
        </div>
      ) : (
        <div
          className=" 
            w-full h-[50vh] 
            flex flex-nowrap justify-center
            items-center"
        >
          <Typography className="block" color="white" variant="h1">
            💥 No Matches‼ 💥
          </Typography>
        </div>
      )}
    </>
  );
};
