import React, { useContext, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { OrderSummary } from '../components/OrderSummary';
import { AppContext } from '../context/AppContext';
import '../styles/components/Information.scss';

export const Information = () => {
  const { addToBuyer} = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();
  
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apartment': formData.get('apartment'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment')
  };

  return(
    <section className="information">
      <div className="information__content">
        <h2>Contact Information:</h2>
        <form className="Information__form" ref={form}>
            <label htmlFor="name">
                Full Name
                <input type="text" placeholder="Full Name" name="name" id="name" />
            </label>
            <label htmlFor="email">
                Email
                <input type="text" placeholder="Email" name="email" id="email" />
            </label>
            <label htmlFor="address">
                Address
                <input type="text" placeholder="Address" name="address" id="address"/>
            </label>
            <label htmlFor="apartment">
                Apartment
                <input type="text" placeholder="Apartment" name="apartment" id="apartment"/>
            </label>
            <label htmlFor="country">
                Country
                <input type="text" placeholder="Country" name="country" id="country"/>
            </label>
            <label htmlFor="state">
                State
                <input type="text" placeholder="State" name="state" id="state" />
            </label>
            <label htmlFor="city">
                City
                <input type="text" placeholder="City" name="city" id="city" />
            </label>
            <label htmlFor="cp">
                Postal Code
                <input type="text" placeholder="Postal Code" name="cp" id="cp" />
            </label>
            <label htmlFor="phone">
                Phone
                <input type="text" placeholder="Prone" name="phone" id="phone" />
            </label>
        </form>
        <nav className="information__buttons">
          <button 
            type="button"
            onClick={history.goBack} 
            className="information__buttons--back">
            Go Back
          </button>
          <button 
            className="information__buttons--next" 
            onClick={handleSubmit} 
            type="button">
            Pay
          </button>
        </nav>
      </div>
      <aside className="information__sidebar">
        <OrderSummary />
      </aside>
    </section>
  )};