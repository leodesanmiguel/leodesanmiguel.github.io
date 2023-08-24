import { Typography } from "@material-tailwind/react";
import { CitiesList } from "../../components/citiesList/cityList";

const Cities = () => {
  return (
    <>
    {console.log(`pagina de cities`)}
      <div>
        <Typography variant="h1" color="purple" textGradient="true" >
          Discover our most important cities!
        </Typography>
        <CitiesList />
      </div>
      ;
    </>
  );
};
export default Cities;
