import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Summary = ({ userID }) => {
  //   const id = userID;
  const { id } = useParams();
  const [room, setRoom] = useState({
    name: "",
    capacity: "",
  });
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const [bookingDetails, setBookingDetails] = useState({
    noOfDays: "",
    totalPrice: "",
    paymentMode: "",
    additionalServices: "",
  });
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:8093/users/${userID}`);
    setUserDetails(res.data);
    const res1 = await axios.get(`http://localhost:8091/bookings/${userID}`);
    setBookingDetails(res1.data);
    const res2 = await axios.get(`http://localhost:8090/rooms/id/${id}`);
    setRoom(res2.data);
    // console.log(userDetails, bookingDetails);
  };
  return (
    <>
      <NavBar />
      <div className="container py-4">
        <h1 className="display-4">Booking Summary:</h1>
        <Link className="btn btn-primary" to="/Home">
          Back to Home
        </Link>
        <hr />
        <h2>User Info</h2>
        <ul className="list-group w-50">
          <li className="list-group-item">Name: {userDetails.name}</li>
          <li className="list-group-item">Email: {userDetails.email}</li>
          <li className="list-group-item">Password: {userDetails.password}</li>
          <li className="list-group-item">Address: {userDetails.address}</li>
          <li className="list-group-item">Phone No: {userDetails.phone}</li>
        </ul>
        <hr />
        <h2>Booking Details:</h2>
        <ul className="list-group w-50">
          <li className="list-group-item">Name: {room.name}</li>
          <li className="list-group-item">Capacity: {room.capacity}</li>

          <li className="list-group-item">
            No Of Days: {bookingDetails.noOfDays}
          </li>
          <li className="list-group-item">
            Total Price: {bookingDetails.totalPrice}
          </li>
          <li className="list-group-item">
            PaymentMode: {bookingDetails.paymentMode}
          </li>
          <li className="list-group-item">
            additionalServices: {bookingDetails.additionalServices}
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Summary;
