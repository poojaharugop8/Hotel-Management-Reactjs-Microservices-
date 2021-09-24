import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RoomList.css";

import { Form } from "react-bootstrap";
import "./Search.css";

import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";

function RoomList() {
  const [rooms, setRoom] = useState([]);
  const [type, setType] = useState("All");
  const [price, setPrice] = useState(300);
  const [capacity, setCapacity] = useState(1);
  const [breakfast, setBreakfast] = useState(false);
  const [pet, setPet] = useState(false);

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    const result = await axios.get("http://localhost:8090/rooms/");
    setRoom(result.data);
  };

  const handleChange = async (e) => {
    let result;
    e.preventDefault();
    if (type === "All") {
      result = await axios.get("http://localhost:8090/rooms/");
      setRoom(result.data);
    } else {
      const data = {
        type: type,
        price: price,
        capacity: capacity,
        breakfast: breakfast,
      };
      result = await axios.post(`http://localhost:8090/rooms/search`, data);
      setRoom(result.data);
    }
  };

  return (
    <>
      <NavBar />
      <div className="search__top">
        <br />
        <h1 style={{ fontSize: "40px", fontFamily: "-moz-initial" }}>
          Search Rooms
        </h1>
        <br />
        <div
          className="container"
          style={{ fontSize: "20px", fontFamily: "-moz-initial" }}
        >
          <Form>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Room Type</label>
                  <Form.Select
                    onChange={(e) => setType(e.target.value)}
                    name="type"
                  >
                    <option value="All">All</option>
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="family">Family</option>
                    <option value="presidential">Presidential</option>
                  </Form.Select>
                </div>
                <div className="form-group">
                  <label>Guest</label>
                  <Form.Select
                    name="capacity"
                    className="custom-select"
                    onChange={(e) => setCapacity(e.target.value)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="10">10</option>
                  </Form.Select>
                </div>
                <div className="form-group">
                  <label htmlFor="price">Room price ${price}</label>
                  <br />
                  <input
                    type="range"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    min={100}
                    max={1500}
                    step={100}
                  />
                </div>

                <br />
                <button
                  onClick={handleChange}
                  className="btn btn-primary"
                  style={{ float: "center" }}
                >
                  Check Availability
                </button>
              </div>

              <div
                className="col-md-4 col-12 ml-auto"
                style={{ fontSize: "20px", fontFamily: "-moz-initial" }}
              >
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="breakfast"
                  id="breakfast"
                  checked={breakfast}
                  onChange={(e) => setBreakfast(e.target.checked)}
                />
                <label
                  htmlFor="breakfast"
                  className="custom-control-label"
                  style={{ marginLeft: "10px" }}
                >
                  Breakfast
                </label>
                <br />
                <br />
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="pet"
                  id="pet"
                  checked={pet}
                  onChange={(e) => setPet(e.target.checked)}
                />
                <label
                  htmlFor="pet"
                  className="custom-control-label"
                  style={{ marginLeft: "10px" }}
                >
                  Pet&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <div className="search__top mt-5">
        <h1 style={{ fontSize: "40px", fontFamily: "-moz-initial" }}>
          List of Rooms
        </h1>
      </div>
      <section className="main-card--cointainer">
        {rooms.map((room, index) => {
          return (
            <div className="card-container" key={room.id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">
                    {room.id}
                  </span>
                  <span className="card-author subtle"> {room.type}</span>
                  <h5 className="card-title" style={{ fontSize: "50px" }}>
                    {" "}
                    {room.name} ({room.price})
                  </h5>

                  <div className="card-read">
                    <Link to={{ pathname: `/Rooms/${room.id}` }}>Read</Link>
                  </div>
                </div>
                <img src={room.images} alt="temp" className="card-media" />
              </div>
            </div>
          );
        })}
      </section>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default RoomList;
