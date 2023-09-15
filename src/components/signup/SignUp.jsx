import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { urlApi } from "../../api/Api";

import { current } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/user/userSlice";

export function SignUp() {
  const nameUser = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const gender = useRef(null);

  const inputs = useRef(null);

  const dispach = useDispatch();
  //   const [data, setData] = useState({
  //     nameUser: "",
  //     email: "",
  //     password: "",
  //     gender: "",
  //     terms: false,
  //   });

  // const handleChangeData = (e) => {
  //   setData((prevState) => {
  //     return e.target.name === "terms"
  //       ? {
  //           ...prevState,
  //           [e.target.name]: e.target.checked,
  //         }
  //       : {
  //           ...prevState,
  //           [e.target.name]: e.target.value,
  //         };
  //   });
  // };

  const handleSubmitData = async  (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(inputs.current));

    await urlApi.post(`/auth`, data)
      .then(response => {
        console.log(response.data)

        localStorage.setItem("token", response.data.token)

        dispach(setUser(response.data.userData ))



      })
      .catch(error => console.log(error))

      
    // const data = {

    //   nameUser: nameUser.current.value,
    //   email: email.current.value,
    //   password: password.current.value,
    //   gender: gender.current.value,
    // };
    console.log(data);

    // const userData = { ...data };
    // console.log("user DATA: \n", userData);
    // if (userData.terms) {
    //   delete userData.terms;
    //   const res = await urlApi.post("/auth", userData);
    //   console.log("RESPUESTA DE AXIOS: \n", res);
    // }
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

      <form
        role="form"
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmitData}
        ref={inputs}
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            name="nameUser"
            type="text"
            // ref={nameUser}
            size="lg"
            label="Name User"
          />
          <Input
            name="email"
            type="email"
            // ref={email}
            size="lg"
            label="Email"
          />
          <Input
            name="password"
            type="password"
            // ref={password}
            size="lg"
            label="Password"
          />
          <Input
            name="gender"
            type="text"
            // ref={gender}
            size="lg"
            label="Gender"
          />
        </div>
        <Checkbox
          name="terms"
          type="checkbox"
      
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
          <a href="/signin" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
