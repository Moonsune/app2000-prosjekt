import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return ( 
    <div className={styles.container}>
        <div className={styles.logo}>
            <Image src="/Logohvit.png" fill alt=""/>
        </div>
        
    </div>
    )
};

export default Footer;