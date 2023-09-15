/* eslint-disable react-hooks/exhaustive-deps */
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { 
  AboutUs, 
  Home, 
  Cities, 
  Login, 
  LayoutMain 
} from "./pages";

import "./App.css";
import { CityDetail } from "./pages/cities/CityDetail";
import { CardCity } from "./pages/cities/CardCity";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCities } from "./redux/thunk/thunkCity";
import { SignUp } from "./components/signup/SignUp";
import { Page404 } from "./pages/404/Page404";
import { urlApi } from "./api/Api";
import { setAuth } from "./redux/slices/user/userSlice";
import { SignIn } from "./components/signIn/SignIn";
import {  LoggedIn2 } from "./components/signIn/LoggedIn2";
import { LoggedIn1 } from "./components/signIn/LoggedIn1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/cities/:id",
        element: <CityDetail />,
      },
      {
        path: "/cardcity/:id",
        element: <CardCity />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: '/loggedin1',
        element: <LoggedIn1 />
      },
      {
        path: '/loggedin2',
        element: <LoggedIn2 />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
    ],
  },
]);

function App() {

  const dispach = useDispatch();

 
  useEffect(() => {
    dispach(getAllCities());
    let token = localStorage.getItem("token");
    urlApi.post(`/auth/token`, null, {
      headers:{
        Authorization: "Bearer "+token
      }
    })
    .then(response => {
      console.log(token)

      localStorage.setItem("token", token)
      //localStorage.removeItem("token")

      dispach(setAuth(response.data.userData ))

      


    })
    .catch(error => console.log(error))

  }, []);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
