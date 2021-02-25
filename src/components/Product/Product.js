import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Product.css';

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch item into data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>{Array(rating).fill('⭐')}</p>
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
