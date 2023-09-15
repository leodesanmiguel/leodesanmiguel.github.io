import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const MenuItem = ({ href, isActive, children }) => {
  return (
    <li>
      <Link
        to={href}
        className={`px-3 
          hover:bg-sky-100 hover:text-blue-900 bg-transparent
          ${isActive ? 
            "bg-sky-100 text-white" 
            : "bg-slate-10"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  href: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.string,
};
