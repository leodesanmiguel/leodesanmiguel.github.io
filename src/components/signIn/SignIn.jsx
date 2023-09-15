import { Button } from "@material-tailwind/react";
import { iconGoogle } from "../../utils/constant";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, startingLogin } from "../../redux/slices/user/userSlice";
import { urlApi } from "../../api/Api";
import { LoggedIn2 } from "./LoggedIn2";
import { LoggedIn1 } from "./LoggedIn1";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const inputs = useRef(null);
  const dispach = useDispatch();

//  const [logged, setLogged] = useState(true);
  const {user, isLogged} = useSelector((state) => state.user);

  const handleSubmitData = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(inputs.current));

    await urlApi
      .post(`/auth/login`, data)
      .then((response) => {
        console.log("Respuesta del AXIOS: ", response.data);

        localStorage.setItem("token", response.data.token);

        dispach(setUser(response.data.userData));

        if (response.data.email) {
          console.log(">>>> ESTA LOGUEADO");
          
          dispach(startingLogin({ logged: true }));
        }
      })
      .catch((error) => console.log(error));
    console.log(data);
  };



  //  useEffect(() => {
    
  //   console.log("Paso por llamar Logged In", isLogged);

  //  }, [user]);

  return (
    <div>
      {isLogged ? (
        <div className="flex justify-center my-5">
        <LoggedIn1 />
        </div>
      ) : (
        <div className="relative flex flex-col justify-center my-5">
          <div className="lg:flex lg:gap-x-4 justify-center items-center mx-4">
            <div className="lg:max-w-xl lg:h-[30rem] ">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://cdn.pixabay.com/photo/2022/09/07/17/26/vintage-pocket-watch-7439233__340.jpg"
                alt="sign up with image"
              />
            </div>
            <div className="w-full bg-white rounded-md lg:max-w-xl lg:h-[30rem] ">
              <h1 className="text-2xl my-[1rem] font-semibold text-center text-gray-700">
                My Account
              </h1>
              <h6>Do you have a customer account? Access your account</h6>
              <div className="flex flex-auto justify-center my-5">
                <Button
                  size="lg"
                  variant="outlined"
                  color="blue-gray"
                  className="flex  gap-3 "
                >
                  <img src={iconGoogle} alt="metamask" className="h-6 w-6" />
                  Continue with Google
                </Button>
              </div>

              <form
                role="form"
                className="mt-6"
                onSubmit={handleSubmitData}
                ref={inputs}
              >
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                {/* <p className="text-xs text-gray-800 font-bold">
          Password must be at least 8 characters long
        </p> */}
                <div className="mt-6">
                  <button className="w-full py-4 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-600">
                    Log In
                  </button>
                </div>
              </form>

              <p className="mt-2 text-xs text-center text-gray-700">
                {" "}
                {"Don't have an account?"}{" "}
                <a
                  href="/signup"
                  className="font-medium text-gray-600 hover:underline"
                >
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
