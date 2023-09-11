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
  }, []);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
