import axios from "axios";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const history = useHistory();
  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !address || !phoneNo) {
      alert("Fields can't be Empty");
    } else {
      const url = "http://localhost:8093/users/";
      const val = {
        name: name,
        email: email,
        password: password,
        address: address,
        phone: phoneNo,
      };
      axios.post(url, val).then(
        (res) => {
          console.log("Success");
          setName("");
          setPassword("");
          setEmail("");
          history.push({
            pathname: "/",
          });
        },
        (fail) => {
          alert("Error");
          console.log(fail);
        }
      );
    }
  };
  const divStyle = {
    margin: "auto",
    display: "table",
  };
  return (
    <div className="container">
      <br />
      <h1 style={{ textAlign: "center" }}> Register yourself</h1>
      <br />
      <form style={divStyle}>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
            id="Name"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="textbox"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="form-control"
            id="address"
            placeholder="address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">phoneNo</label>
          <input
            type="tel"
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
            className="form-control"
            id="phoneNo"
            placeholder="phoneNo"
          />
          <br />
        </div>
        <button type="submit" onClick={submit} className="btn btn-primary">
          Signup
        </button>
        <Link to="/">
          <button className="btn btn-primary" style={{ marginLeft: "15px" }}>
            Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
