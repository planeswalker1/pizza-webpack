import React from 'react';

import classes from './PizzaImage.css';
import image from '../../images/pizza.jpg';

const pizzaImage = props => (
  <div className={classes['pizza-image']}>
    <img src={image} className={classes['pizza-img']} alt="pizza"/>
  </div>
);

export default pizzaImage;