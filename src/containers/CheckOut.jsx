import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/CheckOut.scss';
import { handleSumTotal } from '../utils';

export const CheckOut = () => {
  const {state, removeFromCart} = useContext(AppContext)
  const { cart } = state;
  const handleRemove = (index) => () => {
    removeFromCart(index);
  };

  return (
    <div className="check-out">
      <div className="check-out__content">
        <h3>{cart.length > 0 ? 'Order list' : 'No orders'}</h3>
        {cart.map((item, index) => 
          <div key={`${item.id}${index}`} className="check-out__item">
            <div className="check-out__element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button onClick={handleRemove(index)} type="button"><i className="fas fa-trash-alt"/></button>
          </div>
        )}
      </div>
      {cart.length &&
        <div className="check-out__sidebar">
          <h3>Total price: ${handleSumTotal(cart)}</h3>
          <Link to="/checkout/information">
            <button type="button">Continue order</button>
          </Link>
        </div>
      }
    </div>
  );
};