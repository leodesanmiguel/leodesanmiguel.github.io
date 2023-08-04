import PropTypes from "prop-types";
import "./styles.css";
export const CallToAction = ({ title, description, cardId }) => {
  return (
    <div
      className="card text-center mt-5 call_to_action_container"
      id={"card" + cardId}
    >
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <h5 className="card-title cta-card-title">{title}</h5>
        <p className="card-text cta-card-text">
          <em>{description}</em>
        </p>
      </div>
    </div>
  );
};

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  cardId: PropTypes.string.isRequired,
  link: PropTypes.string,
};

CallToAction.defaultProps = {
  title: 'Titulo de una ciudad',
  description: 'Subtitulo de la ciudad',
  cardId: 0,
  link: '/home',
};
