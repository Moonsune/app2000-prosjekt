import styles from "./links.module.css";
import Link from "next/link";

const Links = () => {
    const links = [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
        {title: 'Blog', path: '/blog'},
        {title: 'Menu', path: '/menu'}
    ];
    return (
        <div className={styles.links}>
            {links.map((link => (
                <Link href={link.path} key={link.title}> {link.title} </Link>
            )))}
        </div>
    );
}

export default Links;