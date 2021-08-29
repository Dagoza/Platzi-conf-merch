import React, { useContext } from 'react'
import { Map } from '../components/Map';
import { AppContext } from '../context/AppContext';
import { UseGoogleAddress } from '../hooks/useGoogleAddress';
import '../styles/components/Success.scss';

export const Success = () => {
  const {state: {buyer}} = useContext(AppContext);
  const location = UseGoogleAddress(buyer.address,buyer.state,buyer.city,buyer.country);
  return (
    <div className="success">
      <div className="success__content">
        <h2>{buyer.name}, Thanks for your purchase</h2>
        <span>Your order will arrive in 3 days at your address:</span>
        <div className="success__map">
          <Map location={location} />
        </div>
      </div>
    </div>
  );
};