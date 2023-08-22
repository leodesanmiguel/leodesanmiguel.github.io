import "./App.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/home/Home';
import Cities from './pages/cities/Cities';
import AboutUs from './pages/about-us/AboutUs';
import Login from './pages/login/Login';
import LayoutMain from "./layouts/LayoutMain";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain/>,
    children: [
      {
        path: '/home',
        element: <Home />
      },
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
  return (
    <RouterProvider router={router} />
  );
}

export default App;
