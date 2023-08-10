import { useState } from "react";
import "./App.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/home/Home';
import Cities from './pages/cities/Cities';
import AboutUs from './pages/about-us/AboutUs';
import Login from './pages/login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: '/cities',
        element: <Cities />
      },
      {
        path: '/about-us',
        element: <AboutUs/>
      },
      {
        path: '/login',
        element: <Login/>
      },
    ]
  },
 
])

function App() {
  const [count, setCount] = useState(0)
  return (
    <RouterProvider router={router} />
  );
}

export default App;
