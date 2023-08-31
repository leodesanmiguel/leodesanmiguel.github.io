import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setCities } from "./redux/slices";

import { 
  AboutUs, 
  Home, 
  Cities, 
  Login, 
  LayoutMain 
} from "./pages";

import "./App.css";

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
  const dispach = useDispatch();
  
  const getCities = async () => {
    await axios.get("http://localhost:3001/api/cities").then((res) => {
      console.log(res.data.cities);
      dispach(setCities(res.data.cities));
    });
  };

  useEffect(() => {
    getCities();
  }, []);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
