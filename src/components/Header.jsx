import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Header.scss';

export const Header = () => {
  const {state: { cart }} = useContext(AppContext);
  return (
    <header className="header">
        <h1 className="header__title"><Link to="/"> Platzi-conf-merch</Link></h1>
        <div className="header__checkout">
          <Link to="/checkout">
            <i className="fas fa-shopping-basket fa-2x" />
          </Link>
          {cart.length > 0 && <div className="header__alert">{cart.length}</div> }
        </div>
    </header>
  )
}
