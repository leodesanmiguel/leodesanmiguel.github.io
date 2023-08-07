import PropTypes from "prop-types";

export const Logo = ({ imagen }) => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={imagen}
        alt="aplication logo"
        width="200"
        height="88"
        className="flex-none rounded-lg"
        loading="lazy"
      />
    </div>
  );
};

Logo.propTypes = {
  imagen: PropTypes.object,
};


