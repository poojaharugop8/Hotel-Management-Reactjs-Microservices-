import React from "react";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const logout = () => {
    history.push({
      pathname: "/",
    });
    // window.location.reload(false);
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ fontSize: "20px", fontFamily: "-moz-initial" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <h3>Hotel-App</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Rooms">
                Rooms
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">
                Services
              </Link>
            </li>
          </ul>
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
