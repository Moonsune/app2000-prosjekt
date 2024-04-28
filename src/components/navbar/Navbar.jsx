// Laget av Markus Moen Magnussen og Kaisa Lien

import styles from "./navbar.module.css";
import Links from "./links/Links";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/app/lib/auth";

const Navbar = async () => {

    const session = await auth();

    console.log('session', session)

    return (
        <><div className={ styles.container }>
            
            <Link href="/" className={ styles.logo }>
                <Image src="/Logohvit.png" sizes="max-width: 300" fill alt=""/>
            </Link>
        <div>
            <div>
                <Links session={session}/>
            </div>
        </div>
        </div>
        </>
    )
}

export default Navbar;