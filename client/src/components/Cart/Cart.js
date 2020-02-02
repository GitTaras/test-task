import React from 'react';
import CartItem from "../CartItem/CartItem";
import {Link} from "react-router-dom";
import styles from "./Button.module.css";

const Cart = ({items, totalPrice}) => (
  <>
  {
    items.map((item)=> 
      <CartItem key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        quantity={item.quantity}
        image={item.image}
      />
    )
  }
  <div className={styles.bottomContainer}>
    <p className={styles.totalPrice}>{totalPrice}</p>
    <Link to={"/Shipping"} className={styles.link}>Buy</Link>
  </div>
  </>  
);

export default Cart;