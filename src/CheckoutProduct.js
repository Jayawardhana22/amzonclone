import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';


function CheckoutProduct({id,title,image,price,rating}) {
  const [{ basket },dispatch] = useStateValue();

  console.log(id,title,image,price,rating);
  
  const removeFromBasket = () =>{
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id:id,
    });

  }
  return (

    <div className='CheckoutProduct'>
        <img className='CheckoutProduct__image' src={image} alt=''/>

        <div className='CheckoutProduct__info'>
            <p className='CheckoutProduct__title'>{title}</p>

            <p className='CheckoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='ChekoutProduct__rating'>
              {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} className='star'>★</span>
            ))}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>

    </div>
  )
}

export default CheckoutProduct