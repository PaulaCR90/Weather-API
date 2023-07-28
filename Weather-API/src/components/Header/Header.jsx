import React from 'react'
import BurguerMenu from '../BurgerMenu/BurguerMenu'
import './Header.css'
import Select from '../Select/Select'


const Header = ({ tabletOrLess }) => {
  return (
    <header>
      {tabletOrLess ? <BurguerMenu /> : <Select /> }
    </header>
  )
}

export default Header;