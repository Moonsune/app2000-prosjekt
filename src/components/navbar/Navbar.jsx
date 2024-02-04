import styles from "./navbar.module.css";
import Links from "./links/Links";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <><div className={ styles.container }>
            
            <Link href="/" className={ styles.logo }>
                <Image src="https://www.pizzafjoset.no/wp-content/uploads/2022/06/Logohvit.png" fill alt=""/>
            </Link>
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