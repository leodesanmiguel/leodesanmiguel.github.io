import { Link } from "react-router-dom";
import Imagen from "../../assets/logo_my_tinerary.png";

export const Logo = () => {
  return (
    <div className="flex items-center space-x-4">
      <Link to="/">
        <img
          src={Imagen}
          alt="aplication logo"
          width="200"
          height="88"
          className="flex-none rounded-lg"
          loading="lazy"
        />
      </Link>
    </div>
  );
};
