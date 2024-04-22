
"use client";
import React, { useState, useEffect } from 'react';
import Cart from '@/components/cart/Cart';
import styles from './cartpage.module.css';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    return (
        <div>
            <Cart cartItems={cartItems} />
        </div>
    );
};

export default CartPage;
