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
     < div className='home_row'>
      <Product 
        id="12321341"
        title="Sample Product" 
        price={11.96}
        rating={5}
        image="/product1.jpg" 
      />
      <Product 
        id="12321341"
        title="Sample Product" 
        price={11.96}
        rating={5}
        image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400" 
      />
      
      </div>
      <div className='home_row'>
      <Product 
        id="12321341"
        title="Sample Product" 
        price={11.96}
        rating={5}
        image="https://suhadha.lk/wp-content/uploads/2024/02/PRODUCT_169668163467.jpg.webp" 
      />
      <Product 
        id="12321341"
        title="Sample Product" 
        price={11.96}
        rating={5}
        image="https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw58d8f63b/1_JBL_PARTYBOX_710_HERO_0031_x8.png?sw=535&sh=535" 
      />
      <Product 
        id="12321341"
        title="Sample Product" 
        price={11.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/517D9rSAztL.jpg" 
      />

      </div>
      <div className='home_row'>
      <Product 
        id="12321341"
        title="Sample Product" 
        price={11.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/61HQByMUOJL.jpg" 
      />

         
      </div>
    </div>
  );
}

export default Home;
