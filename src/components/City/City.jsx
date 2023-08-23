import "./styles.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export const City = ({ key, id, nameCity, country, imageUrl }) => {
  return (
    <div
      className="
        grid grid-cols-[90vw] 
        my-[1.5rem] mx-[2rem]
        hover:-translate-y-[0.5rem] hover:scale-[105%] hover:bg-sky-500 duration-100"
      key={key}
    >
      <Card
        shadow={false}
        className=" grid  grid-col grid-flow-col gap-[1.5rem]
        h-[20rem] w-[30%] 
         justify-center  
        overflow-hidden text-center
        
        "
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="
          absolute inset-0 
          m-0 h-full w-full 
          rounded-3 
          bg-cover bg-center"
        >
          <div
            className="
          to-bg-black-10 
          absolute inset-0 h-full w-full 
          bg-gradient-to-t from-black/80 via-black/50"
          />
          <img
            src={imageUrl}
            alt={nameCity}
            className="object-cover object-center w-full h-full "
          />
        </CardHeader>
        <CardBody
          className="
          relative 
          py-[80%] px-3 md:px-12
          flex flex-col justify-center items-center"
        >
          <Typography
            variant="h2"
            color="white"
            className="mb-2 font-medium leading-[2]"
          >
            {" "}
            {nameCity}
          </Typography>
          <Typography variant="h4" className="mb-2 text-gray-400">
            {country}
          </Typography>
        </CardBody>
        <CardFooter
          className="
          relative h-[1rem] mt-[6rem]
          bg-sky-gray-900 
        "
        >
          <Link
            className=" rounded-2 btn-card
            transition ease-in-out delay-150 
            hover:-translate-y-2 hover:scale-100 hover:bg-indigo-500 duration-100 ..."
            to={`/city/${id}`}
          >
            View More ...
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};



City.propTypes = {
  key: PropTypes.string,
  id: PropTypes.string,
  nameCity: PropTypes.string,
  country: PropTypes.string,
  imageUrl: PropTypes.string,
};
