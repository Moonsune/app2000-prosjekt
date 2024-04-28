"use client";
/*
    Laget av Kaisa Lien
 */
import React, { useState, useEffect } from 'react';
import Cart from '@/components/cart/Cart';
import styles from './cartpage.module.css';
import {SessionProvider} from "next-auth/react";

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    const removeFromCart = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      };

      const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
    };

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    return (
        <SessionProvider>
        <div className="container mx-auto bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-1 mt-auto mb-auto">
                    <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />
                </div>
                <div className="md:col-span-1 mt-10 mb-10 mr-5 ml-5">
                     {/*Form er inspirert og hentet fra https://v1.tailwindcss.com/components/forms*/} 
                                     
                <form class="w-full">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Fornavn
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Fornavn"></input>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Etternavn
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Etternavn"></input>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-address">
                        Epost-adresse
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="address" placeholder="Epost-adresse"></input>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-card-number">
                        Kortnummer
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-card-number" type="text" placeholder="Kortnummer"></input>
                    </div>
                    <div class="w-full md:w-1/3 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-exp-date">
                        Utløpsdato
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-exp-date" type="text" placeholder="Utløpsdato"></input>
                    </div>
                    <div class="w-full md:w-1/3 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-cvc">
                        CVC
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-cvc" type="text" placeholder="CVC"></input>
                    </div>
                </div>
                </form>
                <div className="text-center">
                    <button className="text-gray-800 bg-gray-300 text-xl font-semibold rounded-lg p-3 hover:bg-gray-400 duration-300">Betal</button>
                </div>
                </div>
            </div>
        </div>
        </SessionProvider>
    );
};

export default CartPage;