import { CitiesList } from "../../components/citiesList/cityList";

const Cities = () => {
  return (
    <>
    {console.log(`pagina de cities`)}
      <div>
        <h1 className="text-center text-white m-4">
          Discover our most important cities!
        </h1>
        <CitiesList />
      </div>
      ;
    </>
  );
};
export default Cities;
