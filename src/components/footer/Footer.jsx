import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return ( 
    <div className={styles.container}>
        <div className={styles.logo}>
            <Image src="https://www.pizzafjoset.no/wp-content/uploads/2022/06/Logohvit.png" fill alt=""/>
        </div>
        
    </div>
    )
};

export default Footer;