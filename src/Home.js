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
        title="Wireless Bluetooth Headset
High-quality sound, noise cancellation." 
        price={35}
        rating={4}
        image="https://m.media-amazon.com/images/I/712fHsfyIFL._AC_SY355_.jpg" 
      />
      <Product 
        id="12321342"
        title="Fujifilm X-H2s Mirrorlesss camera" 
        price={2499}
        rating={5}
        image="https://m.media-amazon.com/images/I/71z7B11WBlL._AC_UL480_FMwebp_QL65_.jpg" 
      />
      
      </div>
      <div className='home_row'>
      <Product 
        id="12321343"
        title="Smart watch for men/Women" 
        price={35}
        rating={5}
        image="https://suhadha.lk/wp-content/uploads/2024/02/PRODUCT_169668163467.jpg.webp" 
      />
      <Product 
        id="12321344"
        title="JBL party Box. " 
        price={11.96}
        rating={5}
        image="https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw58d8f63b/1_JBL_PARTYBOX_710_HERO_0031_x8.png?sw=535&sh=535" 
      />
      <Product 
        id="12321345"
        title="I pad" 
        price={115}
        rating={5}
        image="https://m.media-amazon.com/images/I/517D9rSAztL.jpg" 
      />

      </div>
      <div className='home_row'>
      <Product 
        id="12321346"
        title="Smart Moniter" 
        price={3000}
        rating={5}
        image="https://m.media-amazon.com/images/I/61HQByMUOJL.jpg" 
      />

         
      </div>
    </div>
  );
}

export default Home;
