// Laget av Markus Moen Magnussen

import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return ( 
    <div className={styles.container}>
        <div className={styles.logo}>
            <Image src="/Logohvit.png" sizes="max-width: 300" fill alt=""/>
        </div>
        
    </div>
    )
};

export default Footer;