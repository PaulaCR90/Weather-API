import React, { useState } from "react";
import "./404.css";
import { NavLink } from "react-router-dom";

const NotFound = ({ tabletOrLess }) => {
  return (
    <>
      <article className="NotFound-container">
        <h4>{`Sorry!\nPage not found.`}</h4>
        <img src="./assets/404-background.png" alt="Error" />
        <button>
          <NavLink to="/">Go back! 🌤️</NavLink>
        </button>
      </article>
    </>
  );
};

export default NotFound;
