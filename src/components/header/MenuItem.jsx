import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const MenuItem = ({ href, isActive, children }) => {
  return (
    <li>
      <Link
        to={href}
        className={`px-3 
          hover:bg-sky-800 hover:text-blue-100 bg-transparent
          ${isActive ? 
            "bg-sky-500 text-white" 
            : "bg-slate-50"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  children: PropTypes.object,
};
