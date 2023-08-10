import PropTypes from "prop-types";

export const CallToAction = ({ title, description, cardId }) => {
  return (
    <div id={"card" + cardId} className="mx-auto bg-orange-400 my-2">
      <h5 className="">{title}</h5>
      <p className="">
        <em>{description}</em>
      </p>
    </div>
  );
};

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  cardId: PropTypes.string.isRequired,
};

CallToAction.defaultProps = {
  title: "las ciudades populares",
  description: "Las ciudades más visitadas por nuestros clientes",
  cardId: 0,
};
