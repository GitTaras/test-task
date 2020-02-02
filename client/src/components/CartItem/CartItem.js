import React from "react";
import styles from './CartItem.module.css';
import QuantityControls from "./QuantityControls";

const CartItem = React.memo(({id, title, description, price, quantity, image}) => (
  <div className={styles.cartItem}>
    <div className={styles.infoContainer}>
      <div className={styles.infoSubContainer}>  
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.itemImage}/>
        </div>
        <div className= {styles.shortInfo}>
          <span className={styles.itemTitle}>{title}</span>
          <span className={styles.itemDescription}>
            {description}
          </span>
        </div>
      </div>
      <QuantityControls price={price} quantity={quantity} id={id}/>
    </div>
  </div>
));

export default CartItem;