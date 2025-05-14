import React from 'react';
import styles from './Cart.module.css';
import { useCart } from '@/context/CartContext';

const Cart = () => {
    const { cartItems, clearCart, removeFromCart} = useCart();

    const totalPrice = cartItems.reduce((total, item) => total + (item.selectedPrice * item.quantity), 0);

    return (
        <div className={styles.cartContainer}>
            {cartItems.length > 0 ? (
                <ul className={styles.cartList}>
                    <h1 className={styles.cartTopText}>Handlekurv:</h1>
                    {cartItems.map((item, index) => (
                        <li key={index} className={styles.cartItem}>
                            <p>Tittel: {item.title}</p>
                            <p>Innhold: {item.desc}</p>
                            <p>{item.selectedPrice === item.priceLarge ? "Stor -" : "Liten -"} {item.name} {item.selectedPrice}kr </p>
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
