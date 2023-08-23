import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a target="_blank" href="https://github.com/sit4234/Weather-app-react">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sandeep-verma-b32b34221/"
        >
          Sandeep Verma
        </a>{" "}
        |
      </div>
    </React.Fragment>
  );
}

export default App;
