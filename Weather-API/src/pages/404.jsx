import React from "react";
import './404.css'

const NotFound = () => {
  return (
    <>
      <article className="NotFound-container">
        <h4>{`Sorry!\nPage not found.`}</h4>
        <img src="../src/assets/404-background.png" alt="Error" />
        <button>Go back! 🌤️</button>
      </article>
    </>
  );
};

export default NotFound;
