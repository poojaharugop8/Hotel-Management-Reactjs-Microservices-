import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";
import "./SingleRoom.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

function SingleRoom() {
  const [room, setRoom] = useState({
    name: "",
    type: "",
    price: "",
    size: "",
    capacity: "",
    breakfast: "",
    description: "",
    extras: "",
    images: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:8090/rooms/id/${id}`);
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
          <div className="row">
            <div className="col-sm-6 image__class">
              <img src={room.images} alt="room-image" />
            </div>
            <div className="col-md-6 col-12 my-auto">
              <div className="single-room-info">
                <article className="desc">
                  <h3>details:</h3>
                  <p>{room.description}</p>
                </article>
                <article className="info">
                  <h3>info:</h3>
                  <h6>price : ${room.price}</h6>
                  <h6>size : {room.size} SQFT</h6>

                  <h6>{room.pets ? "pets allowed" : "no pets allowed"}</h6>
                  <h6>{room.breakfast && "free breakfast included"}</h6>
                </article>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="single-room-info">
            <Link
              className="col-2 btn btn-primary float-right"
              to={`/booking/${id}`}
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SingleRoom;
