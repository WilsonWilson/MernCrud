import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import Nav from "../nav/Nav";
import { authenticate, getUser } from "../../helpers";

const Login = (props) => {
  const [state, setState] = useState({
    name: "",
    password: "",
  });
  const { name, password } = state;

  useEffect(() => {
    getUser() && props.history.push("/");
  }, []);

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table({ name, password });
    axios
      .post(`${process.env.REACT_APP_API}/login`, { name, password })
      .then((response) => {
        console.log(response);
        // response will contain token and name
        authenticate(response, () => props.history.push("/"));
        // redirect to create page
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className="container">
      <Nav />
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input onChange={handleChange("name")} value={name} type="text" placeholder="Enter your log-in name" required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input onChange={handleChange("password")} value={password} type="password" placeholder="Enter your password" required />
        </div>

        <button className="btn">Log In Now</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
