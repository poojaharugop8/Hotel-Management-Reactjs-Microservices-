import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";
import "./SingleRoom.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

function SingleRoom() {
  const [room, setRoom] = useState({
    images: "",
    name: "",
    description: "",
    charges: "",
  });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:8094/Service/${id}`);
    console.log(res);
    setRoom(res.data);
  };

  return (
    <>
      <NavBar />
      <section className="single-room">
        <div className="container">
          <div className="top__class">
            <h2>{room.name.toUpperCase()}</h2>
          </div>
          <div className="image__class">
            <img
              src={room.images}
              alt="room-image"
              style={{ width: "350px", height: "350px" }}
            />
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{room.description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${room.charges}</h6>

              <Link
                className="col-2 btn btn-primary"
                to={`/Services`}
                style={{ float: "right" }}
              >
                Back to Service
              </Link>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SingleRoom;
