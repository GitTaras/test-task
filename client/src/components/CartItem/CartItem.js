import React from 'react';
import styles from './CartItem.module.css';
import QuantityControls from './QuantityControls';

function CartItem(props) {
  const { id, title, description, price, quantity, image } = props;
  return (
    <div className={styles.cartItem}>
      <div className={styles.infoContainer}>
        <div className={styles.infoSubContainer}>
          <div className={styles.imageContainer}>
            <img src={image} alt={title} className={styles.itemImage} />
          </div>
          <div className={styles.shortInfo}>
            <span className={styles.itemTitle}>{title}</span>
            <span className={styles.itemDescription}>{description}</span>
          </div>
        </div>
        <QuantityControls price={price} quantity={quantity} id={id} />
      </div>
    </div>
  );
}

function areEqual(prevProps, nextProps) {
  return (
    prevProps.id === nextProps.id && prevProps.quantity === nextProps.quantity
  );
}

export default React.memo(CartItem, areEqual);
