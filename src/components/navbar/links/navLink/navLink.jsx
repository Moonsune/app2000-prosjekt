import { Component } from 'react';
import styles from './navLink.module.css';
import { usePathname } from 'next/navigation';

const navLink = ( {item} ) => {

    const pathName = usePathname();

    return (
        <Link href={item.path} className={`${ styles.container }` `${ 
            pathName === item.path && styles.active
            }`}
        > 
            {item.title} 
        </Link>
    );
};

export default navLink;

