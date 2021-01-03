import React from "react";
import axios from "axios";

const Main = () => {
  axios
    .post("http://localhost:1337/auth/local", {
      identifier: "reader@strapi.io",
      password: "password",
    })
    .then((response) => {
      // Handle success.
      console.log("Well done!");
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
    });

  return <p>main</p>;
};

export default Main;
