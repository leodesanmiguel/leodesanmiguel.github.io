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

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
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
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
