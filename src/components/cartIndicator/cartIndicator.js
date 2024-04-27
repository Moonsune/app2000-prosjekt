import React from 'react';
import styles from './cartIndicator.module.css';

const CartIndicator = ({ items }) => {
    if (items.length === 0) {
        return null; 
    }
    const itemCounts = items.reduce((acc, item) => {
        const key = `${item.title}-${item.selectedPrice}`; 
        if (acc[key]) {
            acc[key].quantity += 1;
        } else {
            acc[key] = { ...item, quantity: 1 };
        }
        return acc;
    }, {});

    const countedItems = Object.values(itemCounts);

    return (
        <div className={styles.wrapper}>
            <div className={styles.indicator}>
                {countedItems.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <p className={styles.title}>{item.title}</p>
                        <p className={styles.quantity}>Antall: {item.quantity}</p>
                        <p className={styles.price}>{item.selectedPrice === item.priceLarge ? "Stor -" : "Liten -"} {item.name} {item.selectedPrice}kr </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartIndicator;
