// Laget av Markus Moen Magnussen og Kaisa Lien

"use client";
import Link from "next/link";
import { Facebook, Phone, Mail, Building } from 'lucide-react';
import {SessionProvider} from "next-auth/react";
import BookingForm from "@/components/contactForm/BookingForm";

const ContactPage = () => {
    console.log('test');
    return (
        <>
            <SessionProvider>
            <div className="container my-24 mx-auto md:px-8">
                <section className="mb-32">
                    <div className="flex justify-center">
                        <div className="text-center md:max-w-xl lg:max-w-3xl">
                            <h2 className="mb-12 px-6 text-3xl font-bold">Kontakt oss</h2>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full sm:w-1/2 lg:w-1/2 mb-12 md:px-3 lg:px-6 sm:flex-shrink-0">
                            <div className="mx-auto">
                                <div className="flex flex-wrap">
                                    <div className="mb-12 w-full sm:w-1/2 lg:w-1/2 lg:p-10">
                                        <div className="flex items-start">
                                            <div className="ml-6 grow">
                                                <div className="flex gap-2 mb-2 font-bold dark:text-white">
                                                    <Link href="https://www.facebook.com/pizzafjoset"><Facebook />Facebook</Link>
                                                </div>
                                                <p className="text-neutral-600 dark:text-neutral-200 font-semibold">
                                                    Pizza Fjoset
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full lg:w-1/2 lg:p-10">
                                        <div className="flex items-start">
                                            <div className="ml-6 grow">
                                                <div className="flex gap-2 mb-2 font-bold dark:text-white">
                                                    <Link href="mailto:pizzafjoset@gmail.com"><Mail />Epostadresse</Link>
                                                </div>
                                                <p className="text-neutral-600 dark:text-neutral-200 font-semibold">
                                                    pizzafjoset@gmail.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full lg:w-1/2 lg:p-10">
                                        <div className="align-start flex">
                                            <div className="ml-6 grow mb-2 font-bold dark:text-white">
                                                <Link href="callto:35 95 00 12"><Phone />Telefon</Link>
                                                <p className="text-neutral-600 dark:text-neutral-200 font-semibold">
                                                    35 95 00 12
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full lg:w-1/2 lg:p-10">
                                        <div className="flex items-start">
                                            <div className="ml-6 grow">
                                                <div className="flex gap-2 mb-2 font-bold dark:text-white">
                                                    <p><Building />Du finner oss her</p>
                                                </div>
                                                <p className="text-neutral-600 dark:text-neutral-200 font-semibold">
                                                    Bøgata 11, 3800 Bø i Telemark
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="w-full sm:w-1/2 lg:w-1/2 mb-12 md:px-3 lg:px-6">
                            <div style={{ maxWidth: '600px', margin: 'auto' }}>
                                <iframe
                                    style={{ width: '100%', height: '450px', border: '0' }}
                                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB8o_OhY-ivXSJz9sEC7wL6YI-eHUM3hfE&q=59.41463851928711,9.059505462646484"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <BookingForm />
            </div>
            </SessionProvider>
        </>
    );
}

export default ContactPage;