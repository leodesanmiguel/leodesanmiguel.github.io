import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
//import { cities } from "../../common/constants";
import PropTypes from "prop-types";

export const CitieItem = ({ item }) => {
   const { imagenUrl, description, caption } = item;
  return (
    <>
      <Card
        shadow={false}
        className="
          realtive 
          h-auto
          w-full 
          lg:max-w-[20%] sm:max-w-[40%] 
          items-end 
          justify-center 
          text-center
          hover:bg-sky-700
          "
      >
        <CardHeader
          floated={false}
          shadow={false}
          //color="transparent"
          //className={"absolute inset-0 m-0 h-full w-full rounded-none bg-[url("+ imagenUrl + ")] bg-cover bg-center"}
          //className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[url("${imagenUrl}")] bg-cover bg-center`}
          //className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[url('${imagenUrl}')] bg-cover bg-center`}
          className={`absolute inset-0 m-0 h-full w-full rounded-2 ] bg-cover bg-center`}
        >
          <div className="to-bg-black-10 absolute 
          inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 cover bg-center" >

          <img src={imagenUrl} alt={caption}  className="object-cover object-center w-full h-full " />
          </div>
        </CardHeader>
        <CardBody className="absolute py-14 px-6 md:px-12">
          <Typography
            variant="h5"
            color="white"
            className="mb-2 font-medium leading-[1.5]"
          >
            {`Foto Nº ${item}`} {caption}
          </Typography>
          <Typography variant="h6" className="mb-0 text-white-300">
            {description}
          </Typography>
        </CardBody>
      </Card>
    </>
  );
};

CitieItem.propTypes = {
  item: PropTypes.string,
};

/* 
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
 
export function BackgroundBlogCard() {
  return (
    <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none 
        bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] 
        bg-cover bg-center">
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          How we design and code open-source projects?
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          Tania Andrew
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="tania andrew"
          className="border-2 border-white"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      </CardBody>
    </Card>
  );
}
*/
