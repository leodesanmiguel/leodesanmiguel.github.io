import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  startingLogin,
  startingLogout,
} from "../../redux/slices/user/userSlice";
import { useEffect } from "react";

export const Login = () => {
  const { user, isLogged } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log("que hay en el USER", user);
    if (user && user.email.lenght>0) {
      dispatch(startingLogin({ logged: true }));
    }
  }, [isLogged]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(startingLogout(false));
    history.pushState("/home");
  };

  const loginUrl = isLogged ? "/loggedin" : "/signin";
  const loginUrlName = isLogged ? "Log OUT" : "Log IN";

  return (
    <div>
      <Link
        to={loginUrl}
        className="
          hover:bg-green-300 hover:text-green-950 
          group flex items-center justify-center rounded-md 
          bg-green-700 text-white 
          text-sm font-medium 
          pl-2 pr-3 py-2 shadow-sm w-[150px]"
      >
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="mr-2"
          aria-hidden="true"
        >
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
        </svg>
        {loginUrlName}
      </Link>
      {/* Renderiza un botón de "Log OUT" si el usuario está autenticado */}
      {user && user.isLogged && (
        <button onClick={handleLogout} className="text-red-600">
          Log Out
        </button>
      )}
    </div>
  );
};
