import PropTypes from "prop-types";
import "./styles.css";

export const Hero = ({
  title = "El Titulo",
  subtitle = "subitulito",

  // number = 11,
}) => {
  // const width = 400; //window.innerWidth;
  // const height = 400; // window.innerHeight;

  const cardContainer = () => {};

  return (
    <>
      <div className="hero" id="hero">
        <div className="hero_content">
          <h1 className="hero_title">{title}</h1>
          <h3 className="hero_subtitle">
            <em>{subtitle}</em>
          </h3>
          <button
            onClick={cardContainer}
            className="
            mx-auto font-bold text-4x1 rounded-xl h-10 
            flex items-center justify-center 
            transition-all duration-500 
            border border-orange-500 hover:border-orange-800 bg-orange-200 
            hover:translate-y-3 w-1/2  hover:bg-orange-800 hover:text-orange-200 hover:scale-100 
            "
          >
            View More ↓
          </button>
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  number: PropTypes.number,
};

Hero.defaultProps = {
  title: "No hay un titulo",
  subtitle: "No hay un subtitutlo",
  number: 12,
};
