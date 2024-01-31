import styles from "./navbar.module.css";
import Links from "./links/Links";

const Navbar = () => {
    return (
        <><div className={ styles.container }>
            <div className={ styles.logo }>Logo</div>
        <div>
            <div>
                <Links />
            </div>
        </div>
        </div>
        </>
    )
}

export default Navbar;