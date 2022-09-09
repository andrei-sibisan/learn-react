import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: "Andrei",
  lastName: "Sibisan",
};

const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you are here!</h2>
  </div>
);

root.render(element);
