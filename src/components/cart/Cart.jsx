"use client"

import React from 'react';
import styles from './Cart.module.css';
import {connectToDb} from "@/app/lib/connectToDb";
import {addOrder} from "@/app/lib/actions";
const Cart = ({ cartItems, removeFromCart, clearCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + (item.post.selectedPrice * item.quantity), 0);

    return (
        <div className={styles.cartContainer}>
            {cartItems.length > 0 ? (
                <ul className={styles.cartList}>
                    <h1 className={styles.cartTopText}>Handlekurv:</h1>
                    {cartItems.map((item, index) => (
                        <li key={index} className={styles.cartItem}>
                            <p>Tittel: {item.post.title}</p>
                            <p>Innhold: {item.post.desc}</p>
                            <p>{item.post.selectedPrice} {item.post.name}kr </p>
                            <button onClick={() => removeFromCart(index)} className={styles.cartButton}>Fjern</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Handlekurven er tom</p>
            )}
            <p className={styles.cartTotal}>Sum: {totalPrice}kr</p>
            <button onClick={clearCart} className={styles.cartButton}>Tøm handlekurven</button>
        </div>
    );
};

export default Cart;
