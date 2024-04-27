
import React from 'react';
import styles from './cartIndicator.module.css';

const CartIndicator = ({ item }) => {
    return (
        <div className={styles.indicator}>
            <p>{item.title}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.selectedPrice}kr</p>
        </div>
    );
};

export default CartIndicator;
