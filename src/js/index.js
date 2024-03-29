//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/TodoList.css";

//import your own components
import { ControlledImput } from "./component/home.js";

//render your react application
ReactDOM.render(<ControlledImput />, document.querySelector("#app"));
