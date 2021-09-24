import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Service = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    const result = await axios.get("http://localhost:8094/Service/");
    setService(result.data);
  };

  console.log(service);
  return (
    <div>
      <NavBar />
      <br />
      <h1
        style={{
          fontSize: "40px",
          fontFamily: "-moz-initial",
          textAlign: "center",
        }}
      >
        Services
      </h1>

      <div className="row" style={{ paddingLeft: 100, paddingTop: 50 }}>
        {service.map((s) => {
          return (
            <div className="col-sm-4" key={s.id} style={{ paddingBottom: 50 }}>
              <div className="card" style={{ width: 280 }}>
                <img
                  className="card-img-top"
                  src={s.images}
                  alt="Card image cap"
                  height="200"
                ></img>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "30px" }}>
                    {s.name}
                  </h5>
                  <p className="card-text">{s.description}</p>
                  <Link to={`/Services/${s.id}`} className="btn btn-primary">
                    Rs. {s.charges}/-
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        <div className="col-sm-4">
          <div className="card" style={{ width: 280 }}>
            <img
              className="card-img-top"
              src="add.png"
              alt="Click below button to book services"
              height="200"
            ></img>
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "30px" }}>
                Click To Book
              </h5>
              <p className="card-text">
                Click the below button to order any of the above services, in
                just 30 seconds !!
              </p>
              <Link
                to="/Sauna"
                className="btn btn-primary"
                style={{ backgroundColor: "#4CAF50" }}
              >
                Click to Book !!
              </Link>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Service;
