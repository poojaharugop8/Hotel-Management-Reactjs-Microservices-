import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const details = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Email or Password can't be Empty");
    } else {
      const data = {
        email: email,
        password: password,
      };
      let res = await axios.post("http://localhost:8093/users/login", data);
      const userID = res.data;
      if (userID) {
        history.push({
          pathname: "/Home",
          state: {
            userID: userID,
          },
        });
      } else {
        alert("Check the Credential");
        setEmail("");
        setPassword("");
      }
    }
  };
  const divStyle = {
    margin: "auto",
    display: "table",
  };
  return (
    <div className="container">
      <br />
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <br />
      <form style={divStyle}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <br />
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
          <br />
        </div>
        <div className="form-group my-2">
          <button onClick={details} className="btn btn-primary">
            Login
          </button>
          <Link to="/SignUp">
            <button className="btn btn-primary" style={{ marginLeft: "15px" }}>
              Sign Up
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
