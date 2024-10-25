import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img 
        className='home__image'
        src='/amzonhomebackground.jpg'
        alt=''
      />
      {/* Product id, title, price, rating, image */}
      <Product 
        id="12321341"
        title="Sample Product" 
        price={11.96}
        rating={5}
        image="/product1.jpg" 
      />
    </div>
  );
}

export default Home;
