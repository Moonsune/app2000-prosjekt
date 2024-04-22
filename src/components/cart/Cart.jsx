
import React from 'react';

const Cart = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <p>{item.name} - {item.price}kr</p>
                            <p>Title: {item.title}</p>
                            <p>Description: {item.desc}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Handlekurven er tom</p>
            )}
            <p>Sum: {totalPrice}kr</p>
        </div>
    );
};

export default Cart;
