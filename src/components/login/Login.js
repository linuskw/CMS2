import React, { useState } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";

import "./Login.css";

const Login = ({ setPageState, setUser }) => {
  const [loginUsername, setLoginUsername] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const dispatch = useDispatch();

  const onRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1337/auth/local/register", {
        username: registerUsername,
        email: email,
        password: registerPassword,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        localStorage.setItem("username", response.data.user.username);
        localStorage.setItem("userid", response.data.user.id);
        console.log("User token", response.data.jwt);
        localStorage.setItem("userJWT", response.data.jwt);
        setPageState(true);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1337/auth/local", {
        identifier: loginUsername,
        password: loginPassword,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        setUser(response.data.user);
        localStorage.setItem("username", response.data.user.username);
        localStorage.setItem("userid", response.data.user.id);
        console.log("User token", response.data.jwt);
        localStorage.setItem("userJWT", response.data.jwt);
        setPageState(true);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <div className="loginRegisterDiv">
      <form className="loginDiv" onSubmit={(e) => onLogin(e)}>
        <label>Login</label>
        <input
          type="text"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input type="submit" />
      </form>

      <form className="registerDiv" onSubmit={(e) => onRegister(e)}>
        <label>Register</label>
        <input
          type="text"
          value={registerUsername}
          onChange={(e) => setRegisterUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
