import PropTypes from "prop-types";
export const MenuItem = ({ href, isActive, children }) => {
  return (
    <li>
      <a
        href={href}
        className={`block px-3 py-2 rounded-md  
          hover:bg-sky-800 hover:text-blue-100
          ${isActive ? 
            "bg-sky-500 text-white" 
            : "bg-slate-50"
        }`}
      >
        {children}
      </a>
    </li>
  );
};

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  children: PropTypes.object,
};
