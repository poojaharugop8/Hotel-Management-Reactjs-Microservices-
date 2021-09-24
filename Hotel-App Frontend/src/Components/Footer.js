import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-center text-white"
      style={{ position: "relative", bottom: "0", width: "100%" }}
    >
      <div className="container p-4">
        <section className="mb-4">
          <span style={{ margin: "5px" }}>
            <FaFacebook />
          </span>
          <span style={{ margin: "5px" }}>
            <FaGoogle />
          </span>
          <span style={{ margin: "5px" }}>
            <FaGithub />
          </span>
          <span style={{ margin: "5px" }}>
            <FaInstagram />
          </span>
          <span style={{ margin: "5px" }}>
            <FaLinkedin />
          </span>
        </section>
        <div className="text-center">
          <span>&copy; 2021 Copyright: Hotel-App</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
