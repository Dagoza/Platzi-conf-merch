import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/components/Information.scss';


export const OrderSummary = () => {
  const { state: { cart } } = useContext(AppContext);
  return (
    <>
      <h3>Order Summary:</h3>
      {cart.map((item, index) => 
        <div key={`${item.id}${index}`} className="information__item">
          <div className="information__element">
            <h4>{item.title}</h4>
            <span>${item.price}</span>
          </div>
        </div>
      )}
    </>
  )
}
