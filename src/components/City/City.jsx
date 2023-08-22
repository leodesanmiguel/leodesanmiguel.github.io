import "./styles.css";
import { Link } from "react-router-dom";
export const City = (key, { id, name, country, imageUrl }) => {
  return (
    <div className="card text-bg-dark card-city mb-3" key={key}>
      <img src={imageUrl} className="card-img" alt={name} />
      <div className="card-img-overlay">
        <h5 className="card-title">{name}</h5>
        <h6 className="badge text-bg-primary mb-2">{country}</h6>
        <button className="btn-card">
          <Link to={`/${id}`} className="link-card">
            View More ...
          </Link>
        </button>
      </div>
    </div>
  );
};
