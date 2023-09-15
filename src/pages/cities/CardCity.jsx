/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { filterOneCityById } from "../../redux/slices";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  // Tooltip,
  IconButton,
  Alert,
} from "@material-tailwind/react";
import { RatingRO } from "../../common/raiting/RaitingRO";
import { SpinnerC } from "../../common/spinner/SpinnerC";
import { TableItinery } from "../../common/tableItinery/TableItinery";
import { getCityById } from "../../redux/thunk/thunkCity";

export function CardCity() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.cities);

  const { nameCity, country, imageUrl, rateCity, description, itineraries } =
    useSelector((state) => state.cities.cityById);

  // console.log("CIUDAD DEVUELTA POR REDUX :>>>", {
  //   nameCity,
  //   country,
  //   imageUrl,
  //   rateCity,
  //   description,
  //   itineraries,
  // });

  useEffect(() => {
    dispatch(getCityById(id));

    if (data !== undefined || data.length > 0) {
      dispatch(filterOneCityById(id));
    }
  }, [nameCity]);

  return (
    <>
      {nameCity && nameCity ? (
        <>
          <Card className="w-full max-w-[90vw] shadow-lg mt-[2rem]">
            <CardHeader floated={false} color="blue-gray">
              <img
                src={imageUrl}
                alt={nameCity}
                className="w-full max-h-[50rem] "
              />
              <div
                className="
                to-bg-black-10 absolute 
                inset-0 h-full w-full 
                bg-gradient-to-tr 
                from-transparent via-transparent to-black/60 "
              />
              <IconButton
                size="sm"
                color="red"
                variant="text"
                className="!absolute top-4 right-4 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                <Typography variant="p" color="white">
                  {rateCity}
                </Typography>
              </IconButton>
              <Button
                color="sky"
                className="absolute top-4 left-4 rounded-full "
              >
                <img
                  src={country.flag}
                  alt={country.countryName}
                  className="w-[3rem] h-[2rem]"
                />
              </Button>
              <div
                className="
                to-bg-black-10 absolute 
                inset-0 h-full w-auto  
                bg-gradient-to-tr 
                from-transparent via-transparent to-black/60 "
              ></div>
            </CardHeader>

            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-medium"
                >
                  {nameCity}, {country.countryName}
                </Typography>
                <Link to={"#itinearies"}>
                  <Button>Itineraries Count: {itineraries.length}</Button>
                </Link>
                <RatingRO raiting={rateCity % 5} />
              </div>
              <Typography color="gray">{description}</Typography>

              <div className="my-3 bg-blue-gray-500 rounded-lg flex flex-col items-center justify-center">
                {itineraries && itineraries.length > 0 ? (
                  <TableItinery itineraries={itineraries} />
                ) : (
                  <div className="flex w-full flex-col gap-2">

                  <Alert color="red" className="text-center">We have not been able to find loaded itineraries.</Alert>
                  </div>
                )}
              </div>
            </CardBody>
            <CardFooter className="pt-3">
              {/* <SpinnerC /> */}
              <Link to={"/cities"} className="">
                <Button className="my-[2rem] " fullWidth={true} size="lg">
                  Return to City List
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </>
      ) : (
        <Typography variant="h2" className="mb-2 text-gray-400">
          Loading ...
        </Typography>
      )}
    </>
  );
}
