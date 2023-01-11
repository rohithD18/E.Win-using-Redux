import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginInfo } from "../redux/Action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });
  const { username, password } = info;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // console.log(info);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://52.139.224.15:9191/account/login/", info)
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          dispatch(loginInfo(res.data));
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log("Error", err);
        alert("Invalid username/password!");
      });
  };

  return (
    <center className="loginpage">
      <h1>E.WIN</h1>
      <div className="login">
        <form onSubmit={handleSubmit}>
          Username: <br />
          <input
            className="loginInput"
            type={"text"}
            value={username}
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />{" "}
          <br />
          <br />
          Password: <br />
          <input
            className="loginInput"
            type={"password"}
            value={password}
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <br />
          <br />
          <button id="loginbtn">Login</button>
        </form>
      </div>
    </center>
  );
};

export default Login;
