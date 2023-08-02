import PropTypes from "prop-types";

export const Hero = ({
  title = "El Titulo",
  subtitle = "subitulito",
  number = 11,
}) => {
  const width = 400; //window.innerWidth;
  const height = 400; // window.innerHeight;

  const styleImg = {
    position: "relative",
    border: "2px red solid",
    top: "50px",
    left: "50px",
    "min-width": "60%",
    "min-height": "60%",
  };

  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div style={styleImg}>
        <img src={`https://unsplash.it/${width}/${height}?image=${number}`} />
      </div>
      <button>View More</button>
    </>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  number: PropTypes.number,
};
