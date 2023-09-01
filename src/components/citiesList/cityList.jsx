import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { City } from "../City/City";
import { Button, Typography } from "@material-tailwind/react";
import { getAllCities } from "../../redux/thunk/thunkCity";

export const CitiesList = () => {
  // dispara las acciones
  const dispach = useDispatch();

  const { data, counter, isLoading, page } = useSelector(
    (state) => state.cities
  );

  useEffect(() => {
    dispach(getAllCities());
  }, []);


  return (
    <>
      {data ? (
        <>
          <section>
            <Typography className="block" color="white" variant="p">
              ❤ Cities: {counter.toString().padStart(4, "0")} {}
              💦 Page: {page + 1} {} 🔅Loading: {isLoading ? "✅" : "❌"}
            </Typography>
          </section>
          <section className=" flex justify-between">
            <Button
              className="my-[2rem]  w-[200px]"
              onClick={() => dispach(getAllCities(page))}
            >
              PREVIEW PAGE
            </Button>
            <input 
              type="text" 
              placeholder="filtro" 
              className="my-[2rem]  h-[2rem] w-[400px] " />
            <Button
              className="my-[2rem]  w-[200px]"
              onClick={() => dispach(getAllCities(page))}
            >
              NEXT PAGE
            </Button>
          </section>

          <div
            className=" 
              w-full
              grid grid-cols-1 gap-2
              md:grid-cols-2 lg:grid-cols-3 
              "
          >
            {data.map((city, i) => {
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
        </>
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
