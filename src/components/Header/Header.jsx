import "./Header.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NavBar from "../NavBar/NavBar";

const Header = ({ tabletOrLess }) => {
  return (
    <header>
      {tabletOrLess ? (
        <BurgerMenu />
      ) : (
        <NavBar />
      )}
    </header>
  );
};

export default Header;
