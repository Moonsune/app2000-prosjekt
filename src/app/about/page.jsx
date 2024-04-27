
// Laget av Kaisa Lien

import Image from 'next/image';
import styles from './about.module.css';
import {SessionProvider} from "next-auth/react";

const AboutPage = () => {
    return (
        <SessionProvider>
        <main className="flex min-h-screen flex-col items-center text-lg md:text-64xl lg:text-6xl text-white w-full font-montserrat">
            <div className="py-12 text-center w-full container bg-orange-300">
                <p className=" font-bold text-3xl md:text-5xl lg:text-6xl  text-white">Om oss</p>
            </div>
            <div className="container flex relative items-center py-32 font-semibold bg-orange-200">
                <div className="w-1/2 pt-20 p-20 ">
                    <p className="text-xl md:text-1xl lg:text-2xl text-stone-900 container py-10 ">Vi er en familievennlig restaurant i Bø sentrum. Vi tilbyr pizzamenyer, pizzabuffet m/salater, 
                    à la carte og barnemeny for de minste. Vi har også både inne- og uteservering.</p>
                    <p className="text-xl md:text-1xl lg:text-2xl text-stone-900 container py-10">Ved siden av vår restaurant befinner den irske puben The Bull inn seg. Her har de fotball 
                    på storskjerm, dart, brettspill og musikkscene.</p>
                </div>
                <img src="/Pizzafjoset.jpg" alt="Image" className="h-96 m-auto" />
            </div>
        </main>
        </SessionProvider>
    )
};

export default AboutPage;
