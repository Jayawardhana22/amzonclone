import React from 'react';
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';

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
          <p>
            Yo have on items in your basket. TO  
          </p>
        </div>
      ) : (
        <div>
          <h2 className='checkout__title'>Your shopping basket</h2>
          {/* List out all of the checkout products*/}
          {basket?.map((item) =>{
           
         <CheckoutProduct
            id ={item.id}
            title ={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
      

          })}
        </div>
      )}
    </div>
  );
}

export default Checkout;
