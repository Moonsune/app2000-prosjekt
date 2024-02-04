import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
    return (
        <div className={styles.imageContainer}>
            <Image src="https://docs.github.com/assets/cb-34248/mw-1440/images/help/repository/repo-create-global-nav-update.webp" fill/>
        </div>
    )
};

export default AboutPage;