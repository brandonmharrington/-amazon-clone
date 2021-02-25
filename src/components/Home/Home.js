import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51LH9DtmipL._AC_SL1200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Fitbit Charge 3 Advanced Fitness Tracker with Heart Rate, Swim Tracking & 7 Day Battery"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
