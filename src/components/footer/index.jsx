import React from "react";
import  "./styles.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="d-flex flex-lg-row flex-sm-column justify-content-center">
      <div className="col-lg-2 col-sm-0"></div>
      <div className="col-lg-8 col-sm-12">
        <div className="flex-lg-row flex-sm-column">
          <div className="footer-logo text-center py-3">
            <h3>MyTinerary</h3>
          </div>
          <div className="footer-links text-center py-3">
            <i
              className="fa-brands fa-facebook fa-2xl"
              style={{ color: "#005eff" }}
            />
            <i
              className="fa-brands fa-instagram fa-2xl"
              style={{ color: "#d22d9e" }}
            />
            <i
              className="fa-brands fa-twitter fa-2xl"
              style={{ color: "#00bfff" }}
            />
          </div>
          <div className="footer-nav text-center py-3">
          <Link to={"/home"} className="footer_nav_link">
              Home
            </Link>
            <Link to={"/cities"} className="footer_nav_link">
              Explore Cities
            </Link>
            <Link to={"/hotels"} className="footer_nav_link">
              Explore Hotels
            </Link>
          </div>
          <div className="footer-copyright text-center py-3">
            {"All rights reserved"} © {new Date().getFullYear()}{" "}
            {" developed by Leonardo Martinez and Jeronimo Lago"}
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-sm-0"></div>
    </footer>
  );
};

export default Footer;
