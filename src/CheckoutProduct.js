import React from 'react'

function CheckoutProduct({id,title,image,price,rating}) {
  return (
    <div className='CheckoutProduct'>
        <img src={image} alt=''/>
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
            <button>Remove from basket</button>
        </div>

    </div>
  )
}

export default CheckoutProduct