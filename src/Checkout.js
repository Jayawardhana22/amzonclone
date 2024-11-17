import React from 'react';
import { useStateValue } from './StateProvider';
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout_ad"
        src="https://images-na.ssl-images-amazon.com/images/G/01/amazongo/kondo/test/Mobile_750x300_01.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your shopping Basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2>Your shopping basket</h2>
        </div>
      )}
    </div>
  );
}

export default Checkout;
