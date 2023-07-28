import React from "react";
import { citiesCoords } from "../Select/InfoSelect";
import "./NavBar.css";

const NavBar = ({ column, isOpen, setIsOpen }) => {
  return (
    <>
      <nav>
        <ul id="nav-list" style={{ flexDirection: column ? "column" : "row" }}>
          {Object.keys(citiesCoords).map((city) => (
            <li key={city}>
              <a
                href={`#${city}`}
                onClick={() => (isOpen ? setIsOpen(!isOpen) : null)}
              >
                {city}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
