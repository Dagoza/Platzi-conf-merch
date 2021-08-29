import React, { useContext } from 'react'
import { PayPalButton } from 'react-paypal-button-v2';
import { OrderSummary } from '../components/OrderSummary';
import { AppContext } from '../context/AppContext';
import '../styles/components/Payment.scss';
import { handleSumTotal } from '../utils';
import { config } from '../config'
import { useHistory } from 'react-router-dom';

export const Payment = () => {
  const { state: { cart }, addNewOrder} = useContext(AppContext);
  const history = useHistory();
  const paypalOptions = {
    clientId: config.clientIdPaypal,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  const handlePaymentCancel = (data) => {
      history.push('/checkout/success');
  };

  return (
    <div className="payment">
      <div className="payment__content">
        <OrderSummary />
        <div className="payment__button">
          <PayPalButton
             paypalOptions={paypalOptions}
             buttonStyles={buttonStyles}
             amount={handleSumTotal(cart)}
             onPaymentStart={() => console.log('Start Payment')}
             onSuccess={(data) => handlePaymentSuccess(data)}
             onError={(error) => console.log(error)}
             onCancel={(data) => history.push('/checkout/success')}
          ></PayPalButton>
        </div>
      </div>
      <div></div>
    </div>
  );
};