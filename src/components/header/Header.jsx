import { useEffect, useState } from "react";
import { Login, Logo } from "./Components";
import Imagen from "../../assets/logo_my_tinerary.png";
import { MenuBar } from "./MenuBar";
import {
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";

export const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    "resize", () => window.innerWidth >= 768 && setOpenNav(false);
  }, []);

  const navList = (
    <>
      <div className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <MenuBar />
        <Login />
      </div>
    </>
  );

  return (
    <>
      <Navbar className="mx-auto max-w-screen-xl p-1 y-4 bg-transparent ">
        <div className="sm:p-2 lg:p-4 xl:p-6 ">  {/*  p-4         */}
          <div className="flex items-center justify-between  text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="cursor-pointer p-2 font-medium"
            >
              <Logo imagen={Imagen} />
            </Typography>
            <div className="hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto 
                hover:bg-transparent 
                focus:bg-transparent 
                active:bg-transparent 
                lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          <div className="container flex justify-center mx-1">{navList}</div>
        </MobileNav>
      </Navbar>
    </>
  );
};
