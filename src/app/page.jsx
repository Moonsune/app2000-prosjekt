// Laget av Kaisa Lien

import {ArrowRightCircle, TruckIcon, Check } from 'lucide-react';
import CookieConsentBanner from '@/components/cookies/CookieConsentBanner';
import Link from 'next/link';
import {SessionProvider} from "next-auth/react";

const Home = () => {
  return (
      <SessionProvider>
    <main className="flex min-h-screen flex-col items-center justify-between text-lg md:text-64xl lg:text-6xl font-bold text-white w-full">
      <div className="container mx-auto">
        <div className="flex flex-wrap flex-grow">
          <div className="mx-auto h-auto text-center relative">
            <div className="relative">
              <img src="/12.jpg" alt="Image" className="w-full object-cover" style={{ maxWidth: '100%', height: '200px' }} />
              <div className="absolute inset-0 flex items-center justify-center">
              <Link href="/menu"> 
                <button className="text-orange-200 px-8 py-4 bg-orange-900 rounded-lg text-xl md:text-4xl lg:text-2xl hover:bg-orange-950 duration-300">Bestill her</button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img src="/5.png" alt="Image" className="w-full object-cover" style={{ maxWidth: '100%', height: '200px' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-orange-200 text-xl md:text-4xl lg:text-2xl">Burgertirsdag</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row md:justify-center bg-orange-200 text-neutral-900 lg:text-xl">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
                <div className="p-4 border border-orange-100 flex flex-col md:w-full">
                  <img src="/Sicilianpng.png" alt="Image" className="w-full object-contain" style={{ maxWidth: '100%' }} />
                  <div className="mt-auto">
                    <p className="text-3xl">Sicilian</p>
                    <p className="text-base">Tenk på smaksløkene dine med en brennende kombinasjon av krydret pepperoni, jalapenos, knuste røde chiliflak og smeltet mozzarellaost, som gir et spark med hver bit.</p>
                    <p className="ml-2">249,-</p>
                    <Link href="/menu"> 
                    <button className="bg-orange-900 rounded-lg text-white lg:text-2xl px-2 hover:bg-orange-950 duration-300">Bestill</button>
                    </Link>
                  </div>
                </div>

                <div className="p-4 border border-orange-100 flex flex-col md:w-full">
                  <img src="/Baconburgerpng.png" alt="Image" className="w-full object-contain" style={{ maxWidth: '100%' }} />
                  <div className="mt-auto">
                    <p className="text-3xl">Bacon Deluxe</p>
                    <p className="text-base">Nyt røykfylt godhet med en flammegrillet biffbiff, toppet med sprø bacon, smeltet cheddarost, karamelliserte løk og en dryss av syrlig BBQ-saus.</p>
                    <p className="ml-2">299,-</p>
                    <Link href="/menu"> 
                    <button className="bg-orange-900 rounded-lg text-white lg:text-2xl px-2 hover:bg-orange-950 duration-300">Bestill</button>
                    </Link>
                  </div>
                </div>

                <div className="p-4 border border-orange-100 flex flex-col md:w-full">
                  <img src="/Bellanapolipng.png" alt="Image" className="w-full object-contain" style={{ maxWidth: '100%' }} />
                  <div className="mt-auto">
                    <p className="text-3xl">Bella Napoli</p>
                    <p className="text-base">En klassisk italiensk nytelse med tynn, sprø skorpe, syrlig tomatsaus, fersk mozzarella og en blanding av aromatiske urter, toppet med salat, tomater og en klatt syrlig majones.</p>
                    <p className="ml-2">249,-</p>
                    <Link href="/menu"> 
                    <button className="bg-orange-900 rounded-lg text-white lg:text-2xl px-2 hover:bg-orange-950 duration-300">Bestill</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-300 text-base">
              <div className="container mx-auto px-6 sm:px-8 py-8 sm:py-12 max-w-screen-xl">
                <div className="flex justify-evenly sm:flex-row">
                  <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <div className="flex items-center justify-center rounded-full border border-2 border-white w-10 h-10 sm:w-12 sm:h-12">
                      <TruckIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <p className="lg:text-lg sm:text-base">Rask og gratis levering</p>
                    <div className="flex items-center justify-center">
                      <ArrowRightCircle className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
                      <p className="text-xs sm:text-sm">Inntil 3km.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center ml-0 sm:ml-4">
                    <div className="flex items-center justify-center rounded-full border border-2 border-white w-10 h-10 sm:w-12 sm:h-12">
                      <Check className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <p className="lg:text-lg sm:text-base">Sikker betaling</p>
                    <div className="flex items-center justify-center ">
                      <ArrowRightCircle className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
                      <p className="text-xs sm:text-sm">Sikkerhet til enhver tid.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CookieConsentBanner />
    </main>
      </SessionProvider>
  );
}

export default Home;