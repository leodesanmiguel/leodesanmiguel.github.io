import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Cities from "./pages/cities/Cities";
import AboutUs from "./pages/about-us/AboutUs";
import Login from "./pages/login/Login";
import LayoutMain from "./layouts/LayoutMain";
import { useSelector } from "react-redux";

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
  const { counter } = useSelector((state) => state.counter);

  return (
    <>
      <RouterProvider router={router} />
      <button type="button" onClick={()=>{}}>
        count is: {counter}
      </button>
    </>
  );
}

export default App;
