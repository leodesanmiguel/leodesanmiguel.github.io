import {
  IconButton,
} from "@material-tailwind/react";
import { cities } from "../../common/constants";
import { useEffect, useState } from "react";
import { CitieItem } from "./citieItem";

const fnNext = (n) => (n === cities.length - 1 ? 0 : n + 1);
const fnPrev = (n) => (n === 0 ? cities.length - 1 : n - 1);
console.log(`\n
Cantidad de Ciudades.: ${cities.length}\n
Ultima ciudad .......: ${cities.length - 1}`);

export const Carrousel = () => {
  const [indice0, setIndice0] = useState(0);
  const [indice1, setIndice1] = useState(indice0 + 1);
  const [indice2, setIndice2] = useState(indice1 + 1);
  const [indice3, setIndice3] = useState(indice2 + 1);
  const [mueve, setMueve] = useState(0);

  const handlePrev = () => {
    setIndice0(fnPrev(indice0));
    setIndice1(fnPrev(indice1));
    setIndice2(fnPrev(indice2));
    setIndice3(fnPrev(indice3));
    setMueve(mueve - 1);
  };

  const handleNext = () => {
    setIndice0(fnNext(indice0));
    setIndice1(fnNext(indice1));
    setIndice2(fnNext(indice2));
    setIndice3(fnNext(indice3));
    setMueve(mueve + 1);
  };

  useEffect(() => {
    console.log(indice0, indice1, indice2, indice3);
  }, [mueve]);

  return (
    <>
      <div className=" 
        bg-transparent w-full h-auto flex 
        flex-row justify-between items-center">
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
          <CitieItem item={cities[indice0]} />
          <CitieItem item={cities[indice1]} />
          <CitieItem item={cities[indice2]} />
          <CitieItem item={cities[indice3]} />
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
