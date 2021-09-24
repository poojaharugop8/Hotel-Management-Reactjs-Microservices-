import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import NavBar from "./NavBar";
import Footer from "./Footer";

const BookingDetails = ({ userID }) => {
  const history = useHistory();
  const [fromDate, setFromDate] = useState();
  const [massage, setMassage] = useState(false);
  const [airport, setAirport] = useState(false);
  const [sightTour, setSightTour] = useState(false);
  const [toDate, setToDate] = useState("");
  const [noOfDays, setNoOFDays] = useState(1);
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
    setRoom(res.data);
  };
  useEffect(() => {
    let start, end;
    if (fromDate && toDate) {
      start = moment(fromDate);
      end = moment(toDate);
      setNoOFDays(Math.floor((end - start) / (1000 * 24 * 60 * 60)));
    }
  }, [fromDate, toDate]);

  const reserve = () => {
    if (!fromDate || !toDate) {
      alert("Enter CheckIn and CheckOut Dates");
    } else {
      alert("Booking Confirmed");
      const addServ = [];
      if (massage) addServ.push("Massage & Spa");
      if (airport) addServ.push("Airport pickup");
      if (sightTour) addServ.push("Sight Tour");
      const data = {
        bookingId: userID,
        noOfDays: noOfDays,
        totalPrice:
          noOfDays * room.price +
          (massage ? 1 : 0) * 60 +
          (airport ? 1 : 0) * 30 +
          (sightTour ? 1 : 0) * 50,
        paymentMode: "credit",
        additionalServices: addServ,
        roomID: id,
      };
      axios.post(`http://localhost:8091/bookings/`, data);
      history.push(`/Summary/${id}`);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="m-3" style={{ textAlign: "center" }}>
          Booking
        </h1>
        <div className="row">
          <div className="col-sm-6">
            <img src={room.images} style={{ width: "100%" }} alt="room"></img>
          </div>
          <div className="col-md-6 col-12 my-auto">
            <h2>Room Details</h2>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Room Type</th>
                  <td>{room.name}</td>
                </tr>
                <tr>
                  <th>Capacity</th>
                  <td>{room.capacity}</td>
                </tr>
                <tr>
                  <th>Size</th>
                  <td>{room.size} sqft.</td>
                </tr>
                <tr>
                  <th>Breakfast</th>
                  <td>{room.breakfast ? `Included` : `Not Included`}</td>
                </tr>
                <tr>
                  <th>Pets</th>
                  <td>{room.pets ? `Allowed` : `Not Allowed`}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="Fromdate" className="font-weight-bolder mr-3">
                From Date{" "}
              </label>
              <input
                type="date"
                id="Fromdate"
                className="form-control"
                value={fromDate}
                onChange={(e) => {
                  setFromDate(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="Todate" className="font-weight-bolder mr-3">
                To Date{" "}
              </label>
              <input
                type="date"
                id="Todate"
                className="form-control"
                value={toDate}
                onChange={(e) => {
                  setToDate(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12">
            <h6 className="font-weight-bolder">Number of days : {noOfDays}</h6>
            <mark>Please make sure Checkin time is from 9 am to 12 pm</mark>
          </div>
          <div className="col-md-6 col-12">
            <h6 className="font-weight-bold">
              Price per day :{" "}
              <span className="text-primary">$ {room.price}</span>
            </h6>
            <h6 className="font-weight-bold">
              Total Price to be paid :{" "}
              <span className="text-primary">
                ${" "}
                {noOfDays * room.price +
                  (massage ? 1 : 0) * 60 +
                  (airport ? 1 : 0) * 30 +
                  (sightTour ? 1 : 0) * 50}
              </span>
            </h6>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="payment" className="font-weight-bolder">
                Payment Options
              </label>
              <select className="form-control">
                <option disabled>Select payment option</option>
                <option value="Credit">Credit Card</option>
                <option value="Debit">Debit Card</option>
                <option value="checkin">Pay during Checkin</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <label htmlFor="payment" className="font-weight-bolder">
              Additional Service
            </label>
            <div className="form-group">
              <input
                type="checkbox"
                checked={massage}
                onChange={(e) => {
                  setMassage(e.target.checked);
                }}
              />
              <label>Massage &amp; Spa $60</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                checked={airport}
                onChange={(e) => {
                  setAirport(e.target.checked);
                }}
              />
              <label>Airport Pickup $30</label>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                checked={sightTour}
                onChange={(e) => {
                  setSightTour(e.target.checked);
                }}
              />
              <label>Sight Seeing $50</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Link
              className="col-2 btn btn-primary"
              onClick={reserve}
              style={{ float: "right", marginBottom: "50px" }}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingDetails;
