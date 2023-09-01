import { Typography } from "@material-tailwind/react";
import { CitiesList } from "../../components/citiesList/cityList";

export const Cities = () => {
  return (
    <>
      <div>
        <Typography variant="h1" color="purple"  >
          Discover our most important cities!
        </Typography>
        <CitiesList />
      </div>
      ;
    </>
  );
};

