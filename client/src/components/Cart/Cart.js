import React from 'react';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Cart = ({ items, totalPrice }) => (
  <>
    {items.map(item => (
      <CartItem key={item.id} {...item} />
    ))}
    <div className={styles.bottomContainer}>
      <p className={styles.totalPrice}>{Math.round(totalPrice *100)/100}</p>
      <Link to={'/Shipping'} className={styles.link}>
        Buy
      </Link>
    </div>
  </>
);

export default Cart;
