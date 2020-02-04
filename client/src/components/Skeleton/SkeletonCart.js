import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from '../CartItem/CartItem.module.css';

const SkeletonCart = () => (
  <div className={styles.cartItem}>
    <div className={styles.infoContainer}>
      <div className={styles.infoSubContainer}>
        <div className={styles.imageContainer}>
          <Skeleton circle={true} height={75} width={75} />
        </div>
        <div className={styles.shortInfo}>
          <span className={styles.itemTitle}>
            <Skeleton />
          </span>
          <span className={styles.itemDescription}>
            <Skeleton count={5} />
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default SkeletonCart;
