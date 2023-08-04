import PropTypes from "prop-types";
import "./styles.css";

export const Hero = ({
  title = "El Titulo",
  subtitle = "subitulito",
  link=
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
          {/* <img src={`https://unsplash.it/${width}/${height}?image=${number}`} /> */}
          <button className="hero_button" onClick={cardContainer} yo={link}>
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
