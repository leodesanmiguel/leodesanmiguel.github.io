import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { urlApi } from "../../api/Api";
import { iconGoogle } from "../../utils/constant";

export function SignUp() {
  const [data, setData] = useState({
    nameUser: "",
    email: "",
    password: "",
    gender: "",
    terms: false,
  });

  const handleChangeData = (e) => {
    setData((prevState) => {
      return e.target.name === "terms"
        ? {
            ...prevState,
            [e.target.name]: e.target.checked,
          }
        : {
            ...prevState,
            [e.target.name]: e.target.value,
          };
    });
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();
    const userData = { ...data };
    console.log("user DATA: \n", userData);
    if (userData.terms) {
      delete userData.terms;
      const res = await urlApi.post("/auth", userData);
      console.log("RESPUESTA DE AXIOS: \n", res);
    }
  };

  return (
    <Card
      color="transparent"
      className="bg-white items-center my-2"
      shadow={true}
    >
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register. Or
      </Typography>
      <Button
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3"
      >
        <img src={iconGoogle} alt="metamask" className="h-6 w-6" />
        Continue with Google
      </Button>
      <form
        role="form"
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmitData}
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            name="nameUser"
            type="text"
            onChange={handleChangeData}
            value={data.nameUser}
            size="lg"
            label="Name User"
          />
          <Input
            name="email"
            type="email"
            onChange={handleChangeData}
            value={data.email}
            size="lg"
            label="Email"
          />
          <Input
            name="password"
            type="password"
            onChange={handleChangeData}
            value={data.password}
            size="lg"
            label="Password"
          />
          <Input
            name="gender"
            type="text"
            onChange={handleChangeData}
            value={data.gender}
            size="lg"
            label="Gender"
          />
        </div>
        <Checkbox
          name="terms"
          type="checkbox"
          onChange={handleChangeData}
          value={data.terms}
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <Link
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </Link>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />

        <Button className="mt-6" fullWidth type="submit">
          Register
        </Button>

        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
