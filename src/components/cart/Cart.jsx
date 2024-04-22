
import React from 'react';
import styles from './Cart.module.css';
const Cart = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className ={styles.cartContainer}>
            {cartItems.length > 0 ? (
                <ul className={styles.cartList}>
                                <h1>Handlekurv:</h1>
                    {cartItems.map((item, index) => (
                        <li key={index} className={styles.cartItem}>
                            <p>Title: {item.title}</p>
                            <p>Description: {item.desc}</p>
                            <p>{item.name} {item.price}kr</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Handlekurven er tom</p>
            )}
            <p className={styles.cartTotal}>Sum: {totalPrice}kr</p>
        </div>
    );
};

export default Cart;
