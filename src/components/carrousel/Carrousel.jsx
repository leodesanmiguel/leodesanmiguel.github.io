/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CitieItem } from "./citieItem";

export const Carrousel = () => {
  const [indiceP, setIndiceP] = useState(0);
  const [finP, setFinP] = useState(indiceP + 3);
  const [packCarrousel, setPackCarrousel] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const listCities = useSelector((store) => store.cities.data);

  useEffect(() => {
    setPackCarrousel(
      listCities.filter((c, i) => i >= indiceP && i <= indiceP + 3)
    );
  }, [indiceP]);

  const handlePrev = () => {
    const hasta = indiceP;
    if (indiceP <= 0) {
      setIndiceP(listCities.length - 4);
    } else {
      setIndiceP(hasta - 4);
    }
  };

  const handleNext = () => {
    const hasta = indiceP;
    if (indiceP >= listCities.length - 4) {
      setIndiceP(0);
    } else {
      setIndiceP(hasta + 4);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Avanzar al siguiente índice de ciudad
      // setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
      setIndiceP((prevIndex) => (prevIndex + 1) % 4);
    }, 3000); // Cambiar de ciudad cada 3 segundos (ajusta el valor según tus preferencias)

    return () => {
      // Limpia el intervalo cuando el componente se desmonta
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        className=" 
        bg-white-500 w-full h-auto flex mb-[5rem]
        flex-row justify-between items-center"
      >
        <div
          className="
          bg-transparent 
          mx-1 w-8 p-1 h-full
          flex items-center"
        >
          <IconButton
            variant="text"
            color="white"
            size="md"
            onClick={handlePrev}
            className="translate-y-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        </div>
        <div
          className=" 
          bg-transparent
          mx-1 w-full p-1 h-[25vh]
          flex flex-wrap gap-4 justify-between "
        >
          {packCarrousel.map(({ nameCity, imageUrl, _id, countryName }, i) => {
            return (
              <CitieItem
                key={_id}
                nameCity={nameCity}
                imageUrl={imageUrl}
                country={countryName}
              />
            );
          })}
        </div>
        <div
          className="
          bg-transparent 
          mx-1 w-8 p-1 h-full
          flex items-center"
        >
          <IconButton
            variant="text"
            color="white"
            size="md"
            onClick={handleNext}
            className="translate-y-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        </div>
      </div>
    </>
  );
};
