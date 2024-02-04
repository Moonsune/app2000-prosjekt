"use client";

import Link from 'next/link'; // Ensure you import Link from 'next/link'
import styles from './NavLink.module.css'; // Assuming the CSS module is correctly named and imported
import { usePathname } from 'next/navigation';

const NavLink = ({ item }) => {
    const pathName = usePathname();

    return (
        <Link 
            href={item.path} 
            className={`${styles.container} ${pathName === item.path ? styles.active : ''}`}
        > 
            {item.title} 
        </Link>
    );
};

export default NavLink;


