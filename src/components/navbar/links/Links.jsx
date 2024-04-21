// Laget av Markus Moen Magnussen

'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './links.module.css';
import NavLink from './navLink/navLink';
import {SessionProvider} from "next-auth/react";
import LoginLogoutButton from "@/components/loginLogoutButton/LoginLogoutButton";

const Links = () => {
    const [showMenu, setShowMenu] = useState(false);
    const hamburgerRef = useRef(null);
    const dropdownRef = useRef(null);

    const links = [
        { title: 'Hjem', path: '/' },
        { title: 'Om oss', path: '/about' },
        { title: 'Kontakt', path: '/contact' },
        { title: 'Meny', path: '/menu' },
        { title: 'Endre Meny', path: '/endremeny'},
        { title: 'Logg Inn', path: '/signin'}
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !hamburgerRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className={styles.links}>
            <div
                ref={hamburgerRef}
                className={`${styles.hamburger} ${showMenu ? styles.closeMenu : ''}`}
                onClick={toggleMenu}
            >
                <div className={`${styles.bar} ${showMenu ? styles.barX1 : ''}`}></div>
                <div className={`${styles.bar} ${showMenu ? styles.hideMiddleBar : ''}`}></div>
                <div className={`${styles.bar} ${showMenu ? styles.barX2 : ''}`}></div>
            </div>
            <div
                className={`${styles.linksContainer} ${showMenu ? styles.showOnSmall : styles.hideOnSmall}`}
                ref={dropdownRef}
            >
                {links.map(link => (
                    <div key={link.title} onClick={() => setShowMenu(false)}>
                        <NavLink item={link} />
                    </div>
                ))}
                {/* TODO: Denne er kun her for debugging, flytt til egen side login*/}
                <SessionProvider>
                    <LoginLogoutButton />
                </SessionProvider>
            </div>
        </div>
    );
}

export default Links;
