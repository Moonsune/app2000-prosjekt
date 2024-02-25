'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './links.module.css';
import logOutStyle from './navLink/navLink.module.css';
import NavLink from './navLink/navLink';
import { handleLogout, handleLoginGithub } from '@/app/lib/auth';

const Links = ({ session }) => {
    const [showMenu, setShowMenu] = useState(false);
    const hamburgerRef = useRef(null);
    const dropdownRef = useRef(null);

    const links = [
        { title: 'Hjem', path: '/' },
        { title: 'Om oss', path: '/about' },
        { title: 'Kontakt', path: '/contact' },
        { title: 'CRUD-test', path: '/blog' },
        { title: 'Meny', path: '/menu' },
        { title: 'serverActionTest', path: '/serveractiontest'}
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
                {session?.user ? (
                    <>
                        {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                        <form>
                            <button onClick={handleLogout} className={logOutStyle.container}>Logg ut</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ title: "Logg inn", path: "/login" }} />
                )}
            </div>
        </div>
    );
}

export default Links;
