import { IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CitieItem } from "./citieItem";

export const Carrousel = () => {
  const [indiceP, setIndiceP] = useState(0);
  const [packCarrousel, setPackCarrousel] = useState([]);

  const listcities = useSelector((store) => store.cities.data);

  useEffect(() => {
    console.log(listcities[indiceP], listcities[indiceP + 3]);
    setPackCarrousel(listcities.filer((city,indiceP) =>  city[indiceP] ));
    console.log(`\n
  ... Cantidad de Ciudades.: ${packCarrousel.length}
  ... Ultima ciudad .......: ${packCarrousel.length - 1}`);
  }, []);

  const [mueve, setMueve] = useState(0);

  const handlePrev = () => {
    if (indiceP <= 0) {
      return setIndiceP(packCarrousel.length - 4);
    }
    setMueve(mueve - 4);

    return setIndiceP(indiceP - 4);
  };

  const handleNext = () => {
    if (indiceP >= packCarrousel.length - 4) {
      return setIndiceP(0);
    }

    setMueve(mueve + 4);

    return setIndiceP(indiceP + 4);
  };

  useEffect(() => {
    console.log(`ciudad desde ${indiceP} hasta ${indiceP + 3}`);
  }, [mueve]);

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
          {packCarrousel.map(({ nameCity, imageUrl, _id, country }) => (
            <CitieItem
              key={_id}
              nameCity={nameCity}
              imageUrl={imageUrl}
              country={country}
            />
          ))}
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
