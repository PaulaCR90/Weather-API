import React, { useState } from "react";
import Navbar from "../NavBar/NavBar";
import "./BurgerMenu.css";

const MenuHamburguesa = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <h5 className="burger-menu" onClick={() => setIsOpen(!isOpen)}>¡Más ciudades!</h5>
        <div id="burger-menu" className={isOpen ? "isOpen" : "isClosed"}>
            <Navbar column isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    </>
  )
}

export default MenuHamburguesa;
