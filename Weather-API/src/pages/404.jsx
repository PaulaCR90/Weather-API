import React from "react";

const NotFound = () => {
  return (
    <>
      <article className="NotFound-container">
        <h4>{`Sorry!\nPage not found.`}</h4>
        <img src="../assets/404-background.png" alt="Error" />
        <button>Go back! 🌤️</button>
      </article>
    </>
  );
};

export default NotFound;
