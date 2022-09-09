import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const name = "Andrei Sibisan";

const element = <h1>Hello, {name}!</h1>;

root.render(element);
