import React, { useState } from "react";
import "./404.css";
import Home from "./Home";

const NotFound = ({ tabletOrLess }) => {
  const [showHome, setShowHome] = useState(false);

  const handleClick = () => {
    setShowHome(true);
  };

  return (
    <>
      {showHome ? (
        <Home tabletOrLess={tabletOrLess} />
      ) : (
        <article className="NotFound-container">
          <h4>{`Sorry!\nPage not found.`}</h4>
          <img src="./assets/404-background.png" alt="Error" />
          <button onClick={handleClick}>Go back! 🌤️</button>
        </article>
      )}
    </>
  );
};

export default NotFound;
