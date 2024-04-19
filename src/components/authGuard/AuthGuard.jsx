// laget av Markus Moen Magnussen

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function AuthGuard({ children }) {
    const { data: session, status } = useSession();

    useEffect(() => {
        // venter til vi har loadet siden
        if (status === "loading") return;

        // Denne ville da ha redirecta til en standard login-side
        if (status !== "authenticated") {
            alert("Du må logge inn før du kan se denne siden")
            redirect("http://localhost")
        }
    }, [session, status]);

    // hvis brukeren er autentisert, returnerer vi innholdet i {children}
    if (status === "authenticated") {
        return children; // children i dette tilfellet, er alle elementer som ligger mellom taggen/komponentet på selve siden
    }

    return <div>Vent litt...</div>;
}
