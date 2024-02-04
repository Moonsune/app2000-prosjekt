// import styles from "./page.module.css";
import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
    return (
    <div className={styles.container}>
        <div className={styles.textContainer}> 
            <h1 className={styles.title}>Pizzafjoset</h1>
            <p className={styles.description}>Best pizza in town</p>
        </div>
        <div className={styles.button}>
            <button>Order now</button>
        </div>
        <div className={styles.imageContainer}> 
            <Image src="https://www.pizzafjoset.no/wp-content/uploads/2022/06/Logohvit.png" fill alt=""/>
        </div>
    </div>
    )
};

export default Home;