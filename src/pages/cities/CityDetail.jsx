/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { filterOneCityById } from "../../redux/slices";
import { Button, Typography } from "@material-tailwind/react";

export const CityDetail = () => {
  let { id } = useParams();
  
  const dispatch = useDispatch();
  
  const {data} = useSelector((store) => store.cities);

  const city = useSelector((store) => store.cities.cityFound);

  useEffect(() => {
   
    if (data.length > 0) {
 
      dispatch(filterOneCityById(id));
   
    }
  }, [city]);

  return (
    <>
      {city && city? (
        <>
          {" "}
          <Button 
            className="my-[2rem]  w-[300px]">
            <Link to={"/cities"} className="">
            Return to City List
            </Link>
          </Button>
          <div
            className=""
            
            style={{ 
              background: "url(" + city.imageUrl + ")",
              height: "50vh",
              width: "auto",
             }}
          >
            <div className="">
            <Typography variant="h2" className="mb-2 text-gray-400">
            Welcome to {city.nameCity}
          </Typography>
              <Link
                to={`https://www.google.com/maps/place/${city.nameCity}`}
                target="_blank"
                className=""
              >
                Explore in Google® Maps
              </Link>
            </div>
          </div>
        </>
      ) : (
        <Typography variant="h2" className="mb-2 text-gray-400">
           Loading ...
          </Typography>
      )}
    </>
  );
};
